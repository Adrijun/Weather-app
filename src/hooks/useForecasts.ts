import axios from 'axios';
import { useState, ChangeEvent, useEffect } from 'react';
import { optionType, forecastType } from '../types/types';
//hook for debouncing input values
const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
//Handling weather forecast data
const useForecast = () => {
  const apiKey = 'cdbef612adc53e8632dee88d52b2a1ef';
  const [term, setTerm] = useState<string>('');
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<optionType | null>(null);
  const [forecast, setForecast] = useState<forecastType | null>(null);

  const debouncedTerm = useDebounce(term, 500); //Debounce the search term to reduce unnecessary API calls
  const getSearchOptions = async (value: string) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=4&appid=${apiKey}&lang={sv} `
      );

      setOptions(response.data);
    } catch (error) {
      console.error('Axios error:', error);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };
  // Fetch search options when the debounced term changes
  useEffect(() => {
    if (debouncedTerm !== '') {
      getSearchOptions(debouncedTerm);
    }
  }, [debouncedTerm]);
  // Fetch the weather forecast for the selected city
  const getForecast = async (city: optionType) => {
    try {
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=cdbef612adc53e8632dee88d52b2a1ef`
      );
      // Extract relevant data from the API response
      const forecastData = {
        ...forecastResponse.data.city,
        list: forecastResponse.data.list.slice(0, 12), //
      };
      setForecast(forecastData);
    } catch (error) {}
  };
  // Handle form submission to trigger forecast retrieval
  const onSubmit = () => {
    if (!city) return;

    getForecast(city);
  };
  // Handle selection of a search option
  const onOptionSelect = async (option: optionType) => {
    setCity(option);
  };
  // Update the input term and clear options when a city is selected
  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);
  // Return the state and functions needed for the forecast feature
  return {
    term,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  };
};

export default useForecast;

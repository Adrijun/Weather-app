import axios from 'axios';
import { useState, ChangeEvent, useEffect } from 'react';
import { optionType } from '../types/types';

const useForecast = () => {
  const apiKey = 'cdbef612adc53e8632dee88d52b2a1ef';
  const [term, setTerm] = useState<string>('');
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<optionType | null>(null);
  const [forecast, setForecast] = useState<null>(null);
  const getSearchOptions = async (value: string) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=4&appid=${apiKey}`
      );

      setOptions(response.data);
      console.log('Axios:', response.data);
    } catch (error) {
      console.error('Axios error:', error);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);

    if (value === '') return;

    getSearchOptions(value);
  };

  const getForecast = async (city: optionType) => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=cdbef612adc53e8632dee88d52b2a1ef`
      );

      setForecast(weatherResponse.data);
    } catch (error) {}
  };

  const onSubmit = () => {
    if (!city) return;

    getForecast(city);
  };

  const onOptionSelect = async (option: optionType) => {
    setCity(option);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

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

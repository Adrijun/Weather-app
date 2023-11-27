import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { optionType } from '../types/types';

const SearchCity = () => {
  const apiKey = 'cdbef612adc53e8632dee88d52b2a1ef';
  const [term, setTerm] = useState<string>('');
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<optionType | null>(null);
  //https://api.openweathermap.org/data/3.0/onecall?lat=${option.lat}&lon=${option.lon}&units=metric&appid={API key}
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

      console.log('Weather Response:', weatherResponse.data);
    } catch (error) {
      console.error('Axios error:', error);
    }
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

  return (
    <main className="bg-light p-4">
      <section className="container">
        <article className="row">
          <div className="col-md-6 mx-auto w-50">
            <h2 className="text-center">Weather Forecast</h2>
            <p className="text-center">
              Enter the city you want to know the weather for
            </p>
            <input type="text" value={term} onChange={onInputChange} />
            <Button onClick={onSubmit}> Search</Button>

            <ListGroup>
              <ListGroup.Item>
                {options.map((option: optionType, index: number) => (
                  <ListGroup.Item key={option.name + '-' + index}>
                    <Button onClick={() => onOptionSelect(option)}>
                      {option.name}
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup.Item>
            </ListGroup>
          </div>
        </article>
      </section>
    </main>
  );
};

export default SearchCity;

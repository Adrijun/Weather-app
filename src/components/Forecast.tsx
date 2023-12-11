import React from 'react';
import { forecastType } from '../types/types';
import Sunrise from '../icons/Sunrise';
import Sunset from '../icons/Sunset';
import { convertTimestampToTime } from '../constants/constants';
import WeatherInfo from './WeatherInfo';

type Props = {
  data: forecastType;
};
const Forecast = ({ data }: Props) => {
  const today = data.list[0];
  return (
    <>
      <div className="bg-light p-4d-flex align-items text-center">
        <section className="bg-light p-4d-flex align-items text-center">
          <h2>
            {data.name},<span> {data.country} </span>
          </h2>
          <h2>{Math.round(today.main.temp)}°C</h2>
          <p>
            {today.weather[0].main} {today.weather[0].description}
            <p>
              Max temp :{Math.ceil(today.main.temp_max)}°C
              <span> Min temp : {Math.floor(today.main.temp_min)}°C</span>
            </p>
          </p>
        </section>

        <section
          className="col-6  p-4 mx-auto d-flex flex-row text-center overflow-scroll rounded m-2"
          style={{ backgroundColor: 'rgb(230, 230, 230)', opacity: '0.9' }}
        >
          {data.list.map((item, i) => (
            <div key={i}>
              <p>{i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}</p>
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <p> {Math.round(item.main.temp)}</p>
            </div>
          ))}
        </section>

        <section
          className="d-flex align-items-center justify-content-center p-4 col-6 mx-auto m-1  "
          style={{ backgroundColor: 'rgb(230, 230, 230)', opacity: '0.9' }}
        >
          <Sunrise /> <span>{convertTimestampToTime(data.sunrise)}</span>
          <Sunset /> <span>{convertTimestampToTime(data.sunset)}</span>
        </section>
        <section className="row">
          <div className="col-md-6">
            <WeatherInfo
              icon="wind"
              title="Wind"
              description="Wind"
              info={`${Math.round(today.wind.speed)} km/h`}
            />

            <WeatherInfo
              icon="humidity"
              title="Humidity"
              info={`${Math.round(today.main.humidity)}% `}
              description=""
            />

            <WeatherInfo
              icon="pop"
              title="Precipitation"
              info={`${Math.round(
                today.pop * 100
              )}% probability of precipitation clouds at `}
              description={
                Math.round(today.pop * 100) > 50
                  ? 'Expect more precipitation'
                  : 'Expect less precipitation'
              }
            />
          </div>
          <div className="col-md-6">
            <WeatherInfo
              icon="feelslike"
              title="Feels like"
              info={`${Math.round(today.main.feels_like)}° `}
              description=""
            />
            <WeatherInfo
              icon="pressure"
              title="Pressure"
              info={`${today.main.pressure}hPa `}
              description={`${
                Math.round(today.main.pressure) < 1013
                  ? 'Lower than 1013hPa often indicates unstable weather and clouds.  '
                  : 'Higher than 1013hPa often indicate stable weather and clear skies.'
              } `}
            />

            <WeatherInfo
              icon="visibility"
              title="Visibility"
              info={`${(today.visibility / 1000).toFixed()} km`}
              description={`${
                Math.round(today.visibility) < 10
                  ? 'Not so clear day '
                  : 'Clear day'
              } `}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Forecast;

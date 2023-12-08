import React from 'react';
import humidity from '../icons/Humidity';
import precipitation from '../icons/Precipitation';
import pressure from '../icons/Pressure';
import feelsLike from '../icons/FeelsLike';
import visibility from '../icons/Visibility';
import wind from '../icons/Wind';
type Props = {
  icon: 'humidity' | 'pop' | 'pressure' | 'feelslike' | 'visibility' | 'wind';
  title: string | JSX.Element;
  info: string;
  description: string;
};

const icons = {
  humidity: humidity,
  pop: precipitation,
  pressure: pressure,
  feelslike: feelsLike,
  visibility: visibility,
  wind: wind,
};

const WeatherInfo = ({ icon, title, info, description }: Props) => {
  const Icon = icons[icon];
  return (
    <article
      className=" col-6 m-2 p-1 rounded mx-auto "
      style={{ backgroundColor: 'rgb(230, 230, 230)', opacity: '0.9' }}
    >
      <Icon /> <h4>{title}</h4>
      <h5>{info}</h5>
      <p> {description}</p>
    </article>
  );
};
export default WeatherInfo;

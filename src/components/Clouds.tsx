import '../styles/clouds.css';
import React, { FC, useEffect, useState } from 'react';

interface CloudsComponentProps {
  numberOfClouds: number;
  weatherType: string;
}
const getRandomDelay = () => Math.random() * 10;
const Clouds: FC<CloudsComponentProps> = ({ numberOfClouds, weatherType }) => {
  const [clouds, setDrops] = useState<{ position: number; delay: number }[]>(
    []
  );
  const isCloud = weatherType === 'clouds';
  useEffect(() => {
    // Generera en lista med slumpmässiga positioner och fördröjningar för regndroppar
    const randomClouds = Array.from({ length: numberOfClouds }, () => ({
      position: Math.random() * 1,
      delay: getRandomDelay(),
    }));
    setDrops(randomClouds);
  }, [numberOfClouds]);
  return (
    <div>
      {clouds.map((cloud, index) => (
        <div
          key={index}
          className={
            weatherType === 'clouds' ? 'clouds' : 'other-weather-class'
          }
          style={{
            left: `${cloud.position}%`,
            animationDelay: `${cloud.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Clouds;

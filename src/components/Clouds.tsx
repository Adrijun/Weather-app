import '../styles/clouds.css';
import '../styles/clouds.css';
import React, { FC, useEffect, useState } from 'react';

interface CloudsComponentProps {
  numberOfClouds: number;
  weatherType: string;
}

const getRandomDelay = () => Math.random() * 10;

const Clouds: FC<CloudsComponentProps> = ({ numberOfClouds, weatherType }) => {
  const [clouds, setClouds] = useState<{ position: number; delay: number }[]>(
    []
  );
  const isCloud = weatherType === 'clouds';

  useEffect(() => {
    console.log('Running Clouds useEffect');
    // Generera en lista med slumpmässiga positioner och fördröjningar för molnen
    const randomClouds = Array.from({ length: numberOfClouds }, () => ({
      position: Math.random() * 1,
      delay: getRandomDelay(),
    }));
    setClouds(randomClouds);
  }, [numberOfClouds, weatherType]);

  console.log('Render Clouds Component');

  return (
    <div>
      {clouds.map((cloud, index) => (
        <div
          key={index}
          className={`clouds ${index % 2 === 0 ? 'cloudsOne' : 'cloudsTwo'}`}
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

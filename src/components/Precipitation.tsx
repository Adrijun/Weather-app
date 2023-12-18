import '../styles/snowflakes.css';
import React, { FC, useEffect, useState } from 'react';

interface SnowComponentProps {
  numberOfSnowflakes: number;
  weatherType: string;
}
const getRandomDelay = () => Math.random() * 10;
const Snow: FC<SnowComponentProps> = ({ numberOfSnowflakes, weatherType }) => {
  const [drops, setDrops] = useState<{ position: number; delay: number }[]>([]);
  const isRaining = weatherType === 'rain';
  useEffect(() => {
    // Generera en lista med slumpmässiga positioner och fördröjningar för regndroppar
    const randomSnowFlakes = Array.from({ length: numberOfSnowflakes }, () => ({
      position: Math.random() * 100,
      delay: getRandomDelay(),
    }));
    setDrops(randomSnowFlakes);
  }, [numberOfSnowflakes]);
  return (
    <div>
      {drops.map((drop, index) => (
        <div
          key={index}
          className={isRaining ? 'raindrop' : 'snowflake'}
          style={{
            left: `${drop.position}%`,
            animationDelay: `${drop.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Snow;

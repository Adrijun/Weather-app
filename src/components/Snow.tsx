// RainComponent.tsx
import '../styles/snowflakes.css';
import React, { FC, useEffect, useState } from 'react';

interface SnowComponentProps {
  numberOfSnowflakes: number;
}
const getRandomDelay = () => Math.random() * 10;
const Snow: FC<SnowComponentProps> = ({ numberOfSnowflakes }) => {
  const [drops, setDrops] = useState<{ position: number; delay: number }[]>([]);

  useEffect(() => {
    // Generera en lista med slumpmässiga positioner och fördröjningar för regndroppar
    const randomSnowFlakes = Array.from({ length: numberOfSnowflakes }, () => ({
      position: Math.random() * 100,
      delay: getRandomDelay(),
    }));
    setDrops(randomSnowFlakes);
  }, [numberOfSnowflakes]);

  return (
    <div className="snow-container">
      {drops.map((drop, index) => (
        <div
          key={index}
          className="snowflake"
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

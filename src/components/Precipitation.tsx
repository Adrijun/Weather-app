import '../styles/snowflakes.css';
import React, { FC, useEffect, useState } from 'react';

interface SnowComponentProps {
  numberOfDrops: number;
  weatherType: string;
}

const getRandomDelay = () => Math.random() * 10;

const Precipitation: FC<SnowComponentProps> = ({
  numberOfDrops,
  weatherType,
}) => {
  const [drops, setDrops] = useState<{ position: number; delay: number }[]>([]);
  const isSnowing = weatherType === 'snow';
  const isRaining = weatherType === 'rain';

  useEffect(() => {
    if (!isSnowing && !isRaining) {
      // Om det inte är snö eller regn, återställ dropparna till en tom lista
      setDrops([]);
      return;
    }

    // Generera en lista med slumpmässiga positioner och fördröjningar för snöflingor eller regndroppar
    const randomDrops = Array.from({ length: numberOfDrops }, () => ({
      position: Math.random() * 100,
      delay: getRandomDelay() - 10,
    }));

    setDrops(randomDrops);
  }, [numberOfDrops, isSnowing, isRaining]);

  if (!isSnowing && !isRaining) {
    // Om det inte är snö eller regn, rendera inte något
    return null;
  }

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

export default Precipitation;

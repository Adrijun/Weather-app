import '../styles/moon.css';

import React, { FC, useEffect } from 'react';

interface MoonProps {
  weatherType: string;
}

const Moon: FC<MoonProps> = ({ weatherType }) => {
  const isClear = weatherType === 'clear';

  useEffect(() => {}, [weatherType]);

  if (!isClear) {
  }
  const generateRandomPosition = () => {
    const randomPosition = Math.random() * 50;
    return `${randomPosition}%`;
  };
  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, index) => (
      <div
        key={index}
        className="stars"
        style={{
          left: generateRandomPosition(),
          top: generateRandomPosition(),
        }}
      ></div>
    ));
  };

  return (
    <>
      <section className="moonSection">
        <div className="moon"></div>
        {isClear && renderStars(5)}
      </section>
    </>
  );
};

export default Moon;

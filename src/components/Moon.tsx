import '../styles/moon.css';

import React, { FC } from 'react';

interface MoonProps {
  weatherType: string;
}

const Moon: FC<MoonProps> = ({ weatherType }) => {
  // Check if the weather is clear
  const isClear = weatherType === 'clear';
  // generate  random position
  const generateRandomPosition = () => {
    const randomPosition = Math.random() * 50;
    return `${randomPosition}%`;
  };
  // Generate Stars with random posistion
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

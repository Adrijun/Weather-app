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
    if (!isCloud) {
      setClouds([]);
      return;
    }
    const randomClouds = Array.from({ length: numberOfClouds }, () => ({
      position: Math.random() * 1,
      delay: getRandomDelay() - 10,
    }));
    setClouds(randomClouds);
  }, [isCloud, numberOfClouds, weatherType]);

  return (
    <section className="cloudsSection">
      {clouds.map((cloud, index) => (
        <div
          key={index}
          className={`clouds ${index % 2 === 0 ? 'cloudsOne' : 'cloudsTwo'}`}
          style={{
            left: `${cloud.position * 50}%`,
            animationDelay: `${cloud.delay}s`,
          }}
        />
      ))}
    </section>
  );
};

export default Clouds;

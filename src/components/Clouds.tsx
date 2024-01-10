import '../styles/clouds.css';
import React, { FC, useEffect, useState } from 'react';

interface CloudsComponentProps {
  numberOfClouds: number;
  weatherType: string;
}

// Function to generate a random delay for cloud animations
const getRandomDelay = () => Math.random() * 10;

// Clouds component as a functional component
const Clouds: FC<CloudsComponentProps> = ({ numberOfClouds, weatherType }) => {
  // State to manage the clouds positions and animation delays
  const [clouds, setClouds] = useState<{ position: number; delay: number }[]>(
    []
  );
  // Boolean to check if the weather type is 'clouds'
  const isCloud = weatherType === 'clouds';

  // update clouds when weather type or number of clouds change
  useEffect(() => {
    // If the weather type is not clouds, clear the clouds state
    if (!isCloud) {
      setClouds([]);
      return;
    }

    // Generate random clouds with positions and delays
    const randomClouds = Array.from({ length: numberOfClouds }, () => ({
      position: Math.random() * 1,
      delay: getRandomDelay() - 10,
    }));

    // Set the generated clouds in the state
    setClouds(randomClouds);
  }, [isCloud, numberOfClouds, weatherType]);

  // Render the Clouds component with dynamic styles and animations
  return (
    <section className="cloudsSection">
      {clouds.map((cloud, index) => (
        <div
          key={index}
          className={`clouds ${index % 2 === 0 ? 'cloudsOne' : 'cloudsTwo'}`}
          style={{
            left: `${cloud.position * 50}%`, // Set left position based on the random position
            animationDelay: `${cloud.delay}s`, // Set animation delay based on the random delay
          }}
        />
      ))}
    </section>
  );
};

export default Clouds;

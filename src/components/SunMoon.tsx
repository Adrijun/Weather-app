import React, { FC, useEffect, useState } from 'react';
import Sun from './Sun';
import Moon from './Moon';

interface SunMoonComponentProps {
  sunrise: number;
  sunset: number;
  weatherType: string;
}

const SunMoon: FC<SunMoonComponentProps> = ({
  sunrise,
  sunset,
  weatherType,
}) => {
  const [isDay, setIsDay] = useState<boolean>(false);
  // useEffect to update isDay based on the current time, sunrise, and sunset
  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000);

    // Check if it is daytime
    const isDaytime = currentTime > sunrise && currentTime < sunset;
    setIsDay(isDaytime);
  }, [sunrise, sunset]);

  return (
    <section className="sunMoonSection">
      {weatherType === 'clear' && (
        <div>
          {isDay ? (
            <Sun weatherType={weatherType} />
          ) : (
            <Moon weatherType={weatherType} />
          )}
        </div>
      )}
    </section>
  );
};

export default SunMoon;

import React, { FC, useEffect, useState } from 'react';
import Sun from './Sun';
import Moon from './Moon';

interface SunMoonComponentProps {
  sunrise: number; // Tid för soluppgång i sekunder sedan UNIX-epoken
  sunset: number; // Tid för solnedgång i sekunder sedan UNIX-epoken
  weatherType: string;
}

const SunMoon: FC<SunMoonComponentProps> = ({
  sunrise,
  sunset,
  weatherType,
}) => {
  const [isDay, setIsDay] = useState<boolean>(false);

  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000); // Aktuell tid i sekunder sedan UNIX-epoken

    // Avgör om det är dag eller natt baserat på aktuell tid, soluppgång och solnedgång
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

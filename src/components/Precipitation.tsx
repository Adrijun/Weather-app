import React from 'react';
import Snowflake from '../icons/Snowflake';
import Raindrop from '../icons/Raindrop';

interface SnowComponentProps {
  numberOfDrops: number;
  weatherType: string;
}

const getRandomDelay = () => Math.random() * 10;

const Precipitation: React.FC<SnowComponentProps> = ({
  numberOfDrops,
  weatherType,
}) => {
  const [drops, setDrops] = React.useState<
    { position: number; delay: number }[]
  >([]);

  React.useEffect(() => {
    if (weatherType !== 'snow' && weatherType !== 'rain') {
      setDrops([]);
      return;
    }

    const randomDrops = Array.from({ length: numberOfDrops }, () => ({
      position: Math.random() * 100,
      delay: getRandomDelay() - 10,
    }));

    setDrops(randomDrops);
  }, [numberOfDrops, weatherType]);

  if (weatherType !== 'snow' && weatherType !== 'rain') {
    return null;
  }

  return (
    <section className="precipitationSection">
      {drops.map((drop, index) => (
        <div
          key={index}
          className={weatherType === 'snow' ? 'snowflake' : 'raindrop'}
          style={{
            left: `${drop.position}%`,
            animationDelay: `${drop.delay}s`,
          }}
        >
          {weatherType === 'snow' ? <Snowflake /> : null}
          {weatherType === 'rain' ? <Raindrop /> : null}
        </div>
      ))}
    </section>
  );
};

export default Precipitation;

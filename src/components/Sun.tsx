import '../styles/sun.css';

import React, { FC, useEffect } from 'react';

interface SunProps {
  weatherType: string;
}

const Sun: FC<SunProps> = ({ weatherType }) => {
  const isClear = weatherType === 'clear';

  useEffect(() => {}, [weatherType]);

  if (!isClear) {
  }

  return <div className="sun"></div>;
};

export default Sun;

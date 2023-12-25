import '../styles/moon.css';

import React, { FC, useEffect, useState } from 'react';

interface MoonProps {
  weatherType: string;
}

const Moon: FC<MoonProps> = ({ weatherType }) => {
  const isClear = weatherType === 'clear';

  useEffect(() => {}, [weatherType]);

  if (!isClear) {
  }

  return <div className="moon"></div>;
};

export default Moon;

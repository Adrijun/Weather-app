import React from 'react';
import '../styles/precipitation.css';

function Raindrop() {
  return (
    <svg
      width="24"
      height="24"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 494.4 494.4"
      xmlSpace="preserve"
    >
      <path
        style={{ fill: '#19DAF4' }}
        d="M372.8,299.2L372.8,299.2L246.4,0L120,298.4l0.8,0.8c-8,17.6-12,36.8-12,56.8  c0,76.8,61.6,138.4,138.4,138.4S385.6,432.8,385.6,356C384.8,335.2,380,316,372.8,299.2z"
      />
      <g>
        <path
          style={{ fill: '#0DC7CC' }}
          d="M246.4,494.4c76.8,0,138.4-61.6,138.4-138.4c0-20-4.8-40-12-56.8l0.8-0.8L246.4,0"
        />
        <path
          style={{ fill: '#0DC7CC' }}
          d="M153.6,345.6c0,48.8,39.2,88,88,88"
        />
      </g>
      <path style={{ fill: '#19DAF4' }} d="M339.2,345.6c0,48.8-39.2,88-88,88" />
    </svg>
  );
}

export default Raindrop;

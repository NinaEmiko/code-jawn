import React, { useState, useEffect } from 'react';

interface ProgressCircleProps {
  size?: number;
  previousPercentage: number;
  percentage: number;
  style?: React.CSSProperties;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  size = 60,
  previousPercentage,
  percentage,
  style = {},
}) => {
  const radius = size;
  const circumference = 2 * Math.PI * radius;
  const [currentPercentage, setCurrentPercentage] = useState<number>(previousPercentage);
  const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;
  const rotation = -90;

  // Update percentage every interval
  useEffect(() => {
    setCurrentPercentage(previousPercentage);

    const intervalId = setInterval(() => {
      setCurrentPercentage((prev) => {
        if (prev < percentage) {
          return prev + 1;
        } else if (prev > percentage) {
          return prev - 1;
        } else {
          clearInterval(intervalId);
          return prev;
        }
      });
    }, 10);

    return () => clearInterval(intervalId);
  }, [percentage, previousPercentage]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    >
      <svg
        width={style.width || 2 * radius + 40}
        height={style.height || 2 * radius + 40}
        viewBox={`0 0 ${2 * radius + 40} ${2 * radius + 40}`}
      >
        {/* Background Circle */}
        <circle
          cx={radius + 20}
          cy={radius + 20}
          r={radius}
          stroke="grey" // Background color of the circle
          strokeWidth="5"
          fill="none"
        />

        {/* Progress Circle */}
        <circle
          cx={radius + 20}
          cy={radius + 20}
          r={radius}
          stroke="#ff8c34" // Progress color (using orange)
          strokeWidth="5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(${rotation} ${radius + 20} ${radius + 20})`}
        />

        {/* Percentage Text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={radius / 3} // Adjust font size relative to radius
          fontWeight="bold"
          fill="#ff8c34" // Text color (using blue)
        >
          {`${currentPercentage}%`}
        </text>
      </svg>
    </div>
  );
};

export default ProgressCircle;

import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

const ProgressCircle = ({ props }: { props: any }) => {
  const radius = props.size || 60;
  const circumference = 2 * Math.PI * radius;
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;
  const rotation = -90;

  useEffect(() => {
    setCurrentPercentage(0);

    const intervalId = setInterval(() => {
      setCurrentPercentage((prev) => {
        if (prev < props.percentage) {
          return prev + 1;
        } else if (prev > props.percentage) {
          return prev - 1;
        } else {
          clearInterval(intervalId);
          return prev;
        }
      });
    }, 10);

    return () => clearInterval(intervalId);
  }, [props.percentage]);

  return (
    <View style={[styles.container, props.style]}>
      <Svg
        width={props.style?.width || 6 * radius}
        height={props.style?.height ||3 * radius}
        viewBox={`0 0 ${2 * radius + 40} ${2 * radius + 40}`}
      >
        {/* Background Circle */}
        <Circle
          cx={radius + 20}
          cy={radius + 20}
          r={radius}
          stroke="grey" // Background color of the circle
          strokeWidth="5"
          fill="none"
        />
        
        {/* Progress Circle */}
        <Circle
          cx={radius + 20}
          cy={radius + 20}
          r={radius}
          stroke="#ff7100" // Progress color
          strokeWidth="5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(${rotation} ${radius + 20} ${radius + 20})`}
        />
        
        {/* Percentage Text */}
        <SvgText
          x="50%" // Position text at 50% of the circle's width
          y="50%" // Position text at 50% of the circle's height
          textAnchor="middle" // Center text horizontally
          alignmentBaseline="middle" // Center text vertically
          fontSize={radius / 3} // Adjust font size relative to radius
          fontWeight="bold"
          fill="#12edd8"
        >
          {`${currentPercentage}%`}
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProgressCircle;

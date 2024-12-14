import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

const ProgressCircle = ({ props }: { props: any }) => {
  const radius = 60;
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
    <View style={styles.container}>
      <Svg
        width={6 * radius}
        height={3 * radius}
        viewBox={`-15 -30 ${3 * radius} ${3 * radius}`}
      >
        {/* Background Circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius}
          stroke="grey" // Background color of the circle
          strokeWidth="5"
          fill="none"
        />
        
        {/* Progress Circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius}
          stroke="#ff7100" // Progress color
          strokeWidth="5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(${rotation} ${radius} ${radius})`}
        />
        
        {/* Percentage Text */}
        <SvgText
          x="17%"
          y="34%"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize="18"
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

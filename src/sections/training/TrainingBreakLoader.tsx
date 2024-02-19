import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { useTheme } from "../../utils/theme";

const DualCircleLoader = ({ size = 150, strokeWidth = 10 }) => {
  const theme = useTheme();
  const spinValue = new Animated.Value(0);
  const [spin, setSpin]: any = useState("0deg");

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000, // Easing is an additional import from react-native
        useNativeDriver: true, // To make use of native driver for performance
      })
    ).start();

    setSpin(
      spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
      })
    );
  }, []);

  // Next, interpolate beginning and end values (in this case 0 and 1)

  const circleLength = (size - strokeWidth) * 0.7 * Math.PI;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, { transform: [{ rotate: spin }] }]}>
        <Svg height={size} width={size}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={(size - strokeWidth) / 2}
            stroke={theme.primaryColor}
            strokeWidth={strokeWidth}
            strokeDasharray={[circleLength, (size - strokeWidth) * Math.PI]}
            fill="transparent"
          />
        </Svg>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {},
});

export default DualCircleLoader;

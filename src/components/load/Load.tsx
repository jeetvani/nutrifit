import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import React from "react";
import { useTheme } from "../../utils/theme";
import { primaryColor, shadow } from "../../utils/constants";
import { useload } from "../../utils/load";

export default function Load() {
  const load = useload();
  const theme = useTheme();
  return (
    <>
      {load ? (
        <View
          style={{
            ...styles.container,
          }}
        >
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: theme.backgroundColor,
              opacity: 0.4,
            }}
          ></View>
          <ActivityIndicator size="large" color={theme.primaryColor} />
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

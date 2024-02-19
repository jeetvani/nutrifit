import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { useTheme } from "../../utils/theme";

const logo = require("../../assets/DarkLogo.png");

export default function ChargeScreen() {
  const theme = useTheme();
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: theme.backgroundColor,
      }}
    >
      <Image
        style={{ width: "60%", height: "50%" }}
        source={
          theme.theme == "light"
            ? require("../../assets/LightLogo.png")
            : require("../../assets/DarkLogo.png")
        }
        contentFit="contain"
      />
    </View>
  );
}

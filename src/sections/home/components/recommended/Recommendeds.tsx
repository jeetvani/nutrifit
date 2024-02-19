import { View, Text } from "react-native";
import React from "react";
import { subTitleText } from "../../../../utils/constants";
import { useTheme } from "../../../../utils/theme";
import Slider from "../slider/Slider";
import { useTranslation } from "react-i18next";

export default function Recommendeds() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ ...subTitleText, color: theme.primaryTextColor }}>
        {t("Recommendeds:Recommendeds")}
      </Text>
      <Slider />
    </View>
  );
}

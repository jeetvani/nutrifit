import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  grayText,
  principalColor,
  regularText,
  shadow,
  smallText,
} from "../../../../../utils/constants";
import { useTheme } from "../../../../../utils/theme";
import { useTranslation } from "react-i18next";

interface Props {
  days: {
    position: string;
    name: string;
    number: string;
    value: boolean;
  }[];
}

export default function Days(props: Props) {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {props.days?.map((day) => (
        <View
          key={day.position}
          style={{
            ...styles.dayContainer,
            borderColor:
              theme.theme == "light"
                ? day.value
                  ? "white"
                  : theme.primaryColor
                : theme.primaryColor,
            backgroundColor: day.value
              ? theme.primaryColor
              : theme.backgroundColor,
            borderWidth: day.value ? 1 : 0.5,
            ...shadow,
            shadowColor: theme.shadowColor,
          }}
        >
          <Text
            style={{
              ...smallText,
              color: day.value ? theme.oppositeColor : theme.secundaryTextColor,
              fontWeight: "500",
            }}
          >
            {t(`days:${day.name.substring(0, 3)}`)}
          </Text>
          <Text
            style={{
              ...smallText,
              color: day.value ? theme.oppositeColor : theme.secundaryTextColor,
              marginTop: 5,
            }}
          >
            {day.number}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "98%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 20,
  },
  dayContainer: {
    width: "10%",
    height: 60,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: "center",
    marginBottom: 20,
  },
  check: {
    marginTop: 15,
    width: 10,
    height: 10,
    backgroundColor: principalColor,
    borderRadius: 100,
  },
  noCheck: {
    marginTop: 17,
    width: 5,
    height: 5,
    backgroundColor: principalColor,
    borderRadius: 100,
    opacity: 0.5,
  },
});

import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {
  mediumText,
  principalColor,
  regularText,
  secundaryColor,
  shadow,
} from "../../../../utils/constants";
import Days from "./days/Days";
import { useTheme } from "../../../../utils/theme";
import { useTranslation } from "react-i18next";

export default function Calendar() {
  const theme = useTheme();
  const [days, setDays]: any = useState();
  const [dateRange, setDateRange] = useState("");
  const translation = useTranslation();

  useEffect(() => {
    function obtenerFechasSemana() {
      const dateWeeks: Date[] = [];
      const daysWeek: object[] = [];
      const today: Date = new Date();

      const firstDayWeek: Date = new Date(today);
      firstDayWeek.setDate(today.getDate() - today.getDay());

      for (let i = 0; i < 7; i++) {
        const fecha: Date = new Date(firstDayWeek);
        fecha.setDate(firstDayWeek.getDate() + i);
        daysWeek.push({
          position: i,
          name:
            fecha
              .toLocaleDateString(
                translation[1].language == "en"
                  ? "en-US"
                  : translation[1].language == "es"
                  ? "es-MX"
                  : "pt",
                { weekday: "long" }
              )[0]
              .toUpperCase() +
            fecha
              .toLocaleDateString(
                translation[1].language == "en"
                  ? "en-US"
                  : translation[1].language == "es"
                  ? "es-MX"
                  : "pt",
                { weekday: "long" }
              )
              .slice(1),
          number: fecha.getDate(),
          value: fecha.getDate() == today.getDate(),
        });
        dateWeeks.push(fecha);
      }

      setDays(daysWeek);
      setDateRange(
        `${dateWeeks[0].getDate()} ${dateWeeks[0]
          .toLocaleDateString(
            translation[1].language == "en"
              ? "en-US"
              : translation[1].language == "es"
              ? "es-MX"
              : "pr-BR",
            { month: "long" }
          )
          .substring(0, 3)} - ${dateWeeks[6].getDate()} ${dateWeeks[6]
          .toLocaleDateString("en-US", { month: "long" })
          .substring(0, 3)}`
      );
    }

    obtenerFechasSemana();
  }, []);

  return (
    <View style={{ ...styles.container, borderColor: theme.primaryColor }}>
      <View style={styles.subContainer}>
        <View style={styles.topContainer}>
          <Text
            style={{
              ...regularText,
              fontSize: 12,
              color: theme.secundaryTextColor,
            }}
          >
            {dateRange}
          </Text>
          <Text
            style={{
              ...regularText,
              color: theme.primaryColor,
              fontSize: 12,
              fontWeight: "400",
              marginLeft: "auto",
            }}
          ></Text>
        </View>
        <Days days={days} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 0.5,
  },
  subContainer: { width: "90%" },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
});

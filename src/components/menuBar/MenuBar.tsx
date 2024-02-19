import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useTheme } from "../../utils/theme";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
const statusBarHeight = Constants.statusBarHeight;
const barHeight = 65;

interface Props {
  back?: boolean;
}

export default function MenuBar(props: Props) {
  const themeStyles = useTheme();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languageOptions = [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "português", value: "pt" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {/*<Switch
          style={{ zIndex: 10 }}
          value={Theme}
          onChange={(change) => {
            setTheme(!Theme);
            dispatch(setAppTheme(!Theme ? "dark" : "light"));
            AsyncStorage.setItem("theme", !Theme ? "dark" : "light");
          }}
        ></Switch>*/}

        <View
          style={{
            height: barHeight,
            width: "90%",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          {props.back ? (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
              <AntDesign name="left" size={20} color={theme.primaryTextColor} />
            </TouchableOpacity>
          ) : null}
        </View>

        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 60, height: 60 }}
            source={
              themeStyles.theme == "light"
                ? require("../../assets/LightLogo2.png")
                : require("../../assets/DarkLogo2.png")
            }
            contentFit="contain"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: barHeight,
  },
  subContainer: {
    alignItems: "center",
  },
  itemContainer: {
    marginLeft: "auto",
    width: barHeight,
    height: barHeight,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  languageButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "blue", // Puedes personalizar el color
    borderRadius: 5,
  },
  languageButtonText: {
    color: "white", // Puedes personalizar el color
    fontWeight: "bold",
  },
  languageButtonsContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 5,
  },
});

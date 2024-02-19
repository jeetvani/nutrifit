import {
  subTitleText,
  titleText,
  regularText,
  shadow,
  mediumText,
} from "../../../utils/constants";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "../../../utils/theme";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { setTheme as setAppTheme } from "../../../redux/features/app/appSlice";
import SwitchToggle from "react-native-switch-toggle";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MetabolicProfile() {
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const themeState = useAppSelector((state) => state.app.theme);
  const [state, setState] = useState(theme);
  const [Theme, setTheme] = useState(false);
  const { t } = useTranslation();
  const translation = useTranslation();

  useEffect(() => {
    setTheme(themeState !== "light");
  }, [themeState]);

  return (
    <View
      style={{
        ...styles.screenContainer,
        backgroundColor: theme.backgroundColor,
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            ...styles.containerTitle,
            backgroundColor: theme.backgroundColor,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.arrow}
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color={theme.primaryTextColor}
            />
          </TouchableOpacity>

          <Text
            style={{
              ...titleText,
              ...styles.titleTop,
              color: theme.primaryTextColor,
            }}
          >
            {t("CustomizeApp:personalizar_tu_cuenta")}
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.centerContainer}
        >
          <Text style={{ ...styles.subTitletext, color: theme.primaryColor }}>
            {t("CustomizeApp:Elige_tu_tema_favorito")}
          </Text>
          <View
            style={{
              ...styles.containerData,
              borderColor: theme.primaryColor,
              backgroundColor: theme.backgroundColor,
              shadowColor: theme.shadowColor,
              height: 70,
            }}
          >
            <SwitchToggle
              containerStyle={{
                marginTop: 0,
                width: 80,
                height: 40,
                borderRadius: 15,
                padding: 7,
                ...shadow,
                elevation: 9,
                shadowColor: theme.shadowColor,
              }}
              circleStyle={{
                width: 30,
                height: 30,
                borderRadius: 20,
                ...shadow,
                elevation: 10,
              }}
              backgroundColorOn="#3BAA35"
              backgroundColorOff="#7DB926"
              circleColorOn="#0F0F0F"
              circleColorOff="#F3F3F3"
              switchOn={Theme}
              onPress={() => {
                setTheme(!Theme);
                dispatch(setAppTheme(!Theme ? "dark" : "light"));
                AsyncStorage.setItem("theme", !Theme ? "dark" : "light");
              }}
            />
            <Text
              style={{
                marginLeft: 60,
                ...subTitleText,
                fontWeight: "500",
                color:
                  theme.theme == "light"
                    ? theme.primaryTextColor
                    : theme.secundaryTextColor,
              }}
            >
              Light
            </Text>
            <Text
              style={{
                marginLeft: 60,
                ...subTitleText,
                fontWeight: "500",
                color:
                  theme.theme == "dark"
                    ? theme.primaryTextColor
                    : theme.secundaryTextColor,
              }}
            >
              Dark
            </Text>
          </View>
          <Text
            style={{
              ...styles.subTitletext,
              color: theme.primaryColor,
              marginTop: 20,
            }}
          >
            {t("CustomizeApp:Elige_tu_idioma")}
          </Text>
          <View
            style={{
              width: "100%",
              marginTop: 18,
              borderRadius: 10,
              borderWidth: 0.8,
              ...shadow,
              alignItems: "center",
              borderColor: theme.primaryColor,
              backgroundColor: theme.backgroundColor,
              shadowColor: theme.shadowColor,
            }}
          >
            <View
              style={{
                width: "90%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={styles.languageButton}
                onPress={() => {
                  changeLanguage("pr");
                  AsyncStorage.setItem("language", "pr");
                }}
              >
                <Text
                  style={{
                    ...mediumText,
                    color:
                      translation[1].language == "pr"
                        ? theme.primaryTextColor
                        : theme.secundaryTextColor,
                  }}
                >
                  Português
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.languageButton}
                onPress={() => {
                  changeLanguage("es");
                  AsyncStorage.setItem("language", "es");
                }}
              >
                <Text
                  style={{
                    ...mediumText,
                    color:
                      translation[1].language == "es"
                        ? theme.primaryTextColor
                        : theme.secundaryTextColor,
                  }}
                >
                  Español
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.languageButton}
                onPress={() => {
                  changeLanguage("en");
                  AsyncStorage.setItem("language", "en");
                }}
              >
                <Text
                  style={{
                    ...mediumText,
                    color:
                      translation[1].language == "en"
                        ? theme.primaryTextColor
                        : theme.secundaryTextColor,
                  }}
                >
                  English
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  centerContainer: { width: "92%" },
  title: { ...subTitleText, marginTop: 25, fontWeight: "400" },
  subTitle: { ...subTitleText, marginTop: 5 },
  containerTitle: {
    width: "92%",
    height: 70,
    display: "flex",

    alignItems: "center",
    flexDirection: "row",
  },
  titleTop: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  arrow: {
    position: "absolute",
    alignSelf: "center",
  },
  subTitletext: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "500",
  },
  text: { ...regularText, marginTop: 3, width: "80%" },
  containerData: {
    width: "100%",
    marginTop: 18,
    borderRadius: 10,
    borderWidth: 0.8,
    ...shadow,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  languageButton: {
    width: "30%",
    height: 60,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  subTitleText,
  regularText,
  shadow,
  mediumText,
  titleText,
} from "../../../utils/constants";
import { useTheme } from "../../../utils/theme";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

export default function ContactHelp() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { t } = useTranslation();
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
            shadowColor: theme.shadowColor,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("account")}
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
            {t("ContactHelp:contact_help")}
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.centerContainer}
        >
          <Text style={{ ...styles.subTitletext, color: theme.primaryColor }}>
            {t("ContactHelp:common_questions")}
          </Text>
          <View
            style={{
              ...styles.optionContainer,
              borderColor: theme.primaryColor,
              backgroundColor: theme.backgroundColor,
              shadowColor: theme.shadowColor,
            }}
          >
            <TouchableOpacity style={{ ...styles.rowContainer, marginTop: 10 }}>
              <Text
                style={{
                  ...styles.text,
                  marginTop: 3,
                  color: theme.secundaryTextColor,
                }}
              >
                {t("ContactHelp:how_do_we_communicate")}
              </Text>
              <AntDesign
                name="exclamationcircleo"
                size={20}
                color={theme.primaryColor}
                style={{ ...styles.icons }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowContainer}>
              <Text
                style={{
                  ...styles.text,
                  width: "90%",
                  color: theme.secundaryTextColor,
                }}
              >
                {t("ContactHelp:access_telegram_community")}
              </Text>
              <AntDesign
                name="exclamationcircleo"
                size={20}
                color={theme.primaryColor}
                style={{ ...styles.icons }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowContainer}>
              <Text style={{ ...styles.text, color: theme.secundaryTextColor }}>
                {t("ContactHelp:why_not_a_diet")}
              </Text>
              <AntDesign
                name="exclamationcircleo"
                size={20}
                color={theme.primaryColor}
                style={{ ...styles.icons }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowContainer}>
              <Text style={{ ...styles.text, color: theme.secundaryTextColor }}>
                {t("ContactHelp:want_to_train")}
              </Text>
              <AntDesign
                name="exclamationcircleo"
                size={20}
                color={theme.primaryColor}
                style={{ ...styles.icons }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowContainer}>
              <Text style={{ ...styles.text, color: theme.secundaryTextColor }}>
                {t("ContactHelp:where_is_my_nutritional_plan")}
              </Text>
              <AntDesign
                name="exclamationcircleo"
                size={20}
                color={theme.primaryColor}
                style={{ ...styles.icons }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowContainer}>
              <Text style={{ ...styles.text, color: theme.secundaryTextColor }}>
                {t("ContactHelp:when_do_i_receive_my_nutritional_plan")}
              </Text>
              <AntDesign
                name="exclamationcircleo"
                size={20}
                color={theme.primaryColor}
                style={{ ...styles.icons }}
              />
            </TouchableOpacity>
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
    borderRadius: 10,
    display: "flex",

    alignItems: "center",
    flexDirection: "row",
  },
  titleTop: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  arrow: {
    alignSelf: "center",
  },
  subTitletext: {
    marginTop: 18,
    fontSize: 20,
    fontWeight: "400",
  },
  text: { ...mediumText, alignSelf: "center", fontWeight: "bold" },
  optionContainer: {
    width: "100%",
    height: 325,
    borderRadius: 10,
    borderWidth: 1.1,
    marginTop: 23,
    ...shadow,

    flexDirection: "column",
    padding: 10,
    elevation: 8,
  },
  rowContainer: {
    flexDirection: "row",
    marginLeft: 5,
    marginTop: 25,
  },
  icons: {
    marginLeft: "auto",
    marginRight: 10,
    alignSelf: "center",
  },
});

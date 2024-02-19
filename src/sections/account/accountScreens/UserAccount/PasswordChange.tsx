import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  subTitleText,
  shadow,
  titleText,
  mediumText,
} from "../../../../utils/constants";
import { useTheme } from "../../../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
const data = [
  {
    Email: "youremailoftheaccount@gmail.com",
  },
];
export default function PasswordChange() {
  const theme = useTheme();
  const navigation = useNavigation();
  const datas = data[0];
  const [value, setValue] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const [isFocusedTwo, setFocusedTwo] = useState(false);
  const [isFocusedThree, setFocusedThree] = useState(false);
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
            {t("PasswordChange:Cambiar_contraseña")}
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.centerContainer}
        >
          <TextInput
            placeholder={t("PasswordChange:Contraseña_actual")}
            placeholderTextColor={theme.secundaryTextColor}
            style={{
              borderColor: isFocused
                ? theme.primaryColor
                : theme.secundaryColor,
              ...styles.input,
              color: theme.primaryTextColor,
              marginTop: 13,
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <TextInput
            placeholder={t("PasswordChange:Nueva_Contraseña")}
            placeholderTextColor={theme.secundaryTextColor}
            style={{
              borderColor: isFocusedTwo
                ? theme.primaryColor
                : theme.secundaryColor,
              ...styles.input,
              color: theme.primaryTextColor,
            }}
            onFocus={() => setFocusedTwo(true)}
            onBlur={() => setFocusedTwo(false)}
          />
          <TextInput
            placeholder={t("PasswordChange:Confirmar_Contraseña")}
            placeholderTextColor={theme.secundaryTextColor}
            style={{
              borderColor: isFocusedThree
                ? theme.primaryColor
                : theme.secundaryColor,
              ...styles.input,
              color: theme.primaryTextColor,
            }}
            onFocus={() => setFocusedThree(true)}
            onBlur={() => setFocusedThree(false)}
          />
        </ScrollView>
        <View
          style={{
            width: "100%",
            height: 120,
            backgroundColor: theme.backgroundColor,
            shadowColor: theme.shadowColor,
          }}
        >
          <TouchableOpacity
            style={{
              ...styles.buttomContainer,
              backgroundColor: theme.primaryColor,
              shadowColor: theme.shadowColor,
            }}
          >
            <Text
              style={{
                ...styles.keepContainer,
              }}
            >
              {t("Guardar:Guardar")}
            </Text>
          </TouchableOpacity>
        </View>
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
    alignSelf: "center",
    flexDirection: "row",
  },
  titleTop: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  arrow: {
    alignSelf: "center",
    position: "absolute",
  },
  subTitletext: {
    marginTop: 12,
    ...subTitleText,
    fontWeight: "400",
  },
  text: { ...mediumText, alignSelf: "center", fontWeight: "bold" },
  input: {
    width: "100%",
    height: 60,
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  buttomContainer: {
    justifyContent: "center",
    width: "90%",
    height: 50,
    alignSelf: "center",
    ...shadow,
    marginTop: 30,
    borderRadius: 15,
    elevation: 8,
  },
  keepContainer: {
    alignSelf: "center",
    ...subTitleText,
    fontWeight: "400",
    color: "white",
  },
});

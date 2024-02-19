import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import Constants from "expo-constants";
import React, { useState } from "react";
import { mediumText, regularText, smallText } from "../../utils/constants";
import { login } from "../../api/services/Auth";
import { useAppDispatch } from "../../redux/store";
import CustomInput from "../../components/input/CustomInput";
import { useTheme } from "../../utils/theme";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { setLoad } from "../../redux/features/app/appSlice";

const statusBarHeight = Constants.statusBarHeight;
const marginTopResized = Dimensions.get("window").height * 0.05;

interface Props {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
}

export default function Login(props: Props) {
  const theme = useTheme();
  const translation = useTranslation();
  const { t } = translation;
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [expandLanguage, setExpandLanguage] = useState(false);

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      Toast.show({
        type: "error",
        text1: t("Toast:Error_login"),
        text2: t("Toast:Email_or_password_was_not_correct"),
      });
    } else {
      dispatch(setLoad("load"));
      try {
        await login(email, password, dispatch);
      } catch {
        Toast.show({
          type: "error",
          text1: t("Toast:Error_login"),
          text2: t("Toast:Email_or_password_was_not_correct"),
        });
      }
      dispatch(setLoad("no-load"));
    }
  };

  const validateEmail = (email: string) => {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={
            theme.theme == "light"
              ? require("../../assets/LightLogo2.png")
              : require("../../assets/DarkLogo2.png")
          }
          style={{ ...styles.image, shadowColor: theme.shadowColor }}
          contentFit="contain"
        />
      </View>
      <Text
        style={{
          ...mediumText,
          color: theme.secundaryTextColor,
          marginTop: 20,
        }}
      >
        {t("Login:Introduce_tu_email_y_contraseña")}
      </Text>
      <CustomInput
        placeHolder="Email"
        secureEntry={false}
        value={email}
        setValue={setEmail}
        style={{ width: "80%", marginTop: 20 }}
        keyboardType="email-address"
      />
      <CustomInput
        placeHolder={t("Login:place")}
        secureEntry={true}
        value={password}
        setValue={setPassword}
        style={{ width: "80%", marginTop: 15 }}
      />
      {/*<View style={{ width: "80%" }}>
        <Text
          style={{
            ...regularText,
            color: theme.primaryColor,
            marginLeft: "auto",
            marginTop: 20,
          }}
        >
          {t("Login:Olvidaste_tu_contraseña")}
        </Text>
        </View>*/}
      <TouchableOpacity
        onPress={() => handleLogin()}
        style={{ ...styles.loginButton, backgroundColor: theme.primaryColor }}
      >
        <Text style={{ ...styles.buttonText, color: "white" }}>
          {t("Login:Iniciar_Sesion")}
        </Text>
      </TouchableOpacity>
      <View
        style={{ flexDirection: "row", marginTop: 20, alignSelf: "center" }}
      >
        <Text
          style={{
            ...regularText,
            color: theme.secundaryTextColor,
            marginTop: 20,
          }}
        >
          {t("Login:No_tienes_cuenta")}
        </Text>
        <Text
          onPress={() => props.setSection("register")}
          style={{
            ...regularText,
            color: theme.primaryColor,
            marginLeft: 5,
            marginTop: 20,
          }}
        >
          {t("Login:Registrate")}
        </Text>
      </View>
      <View style={styles.languageSelect}>
        <View
          style={{
            ...styles.languageExpand,
            borderColor: theme.primaryColor,
            height: expandLanguage ? "auto" : 30,
          }}
        >
          {!expandLanguage ? (
            <TouchableOpacity
              onPress={() => {
                setExpandLanguage(true);
              }}
              style={styles.options}
            >
              <Text
                style={{
                  ...styles.optionsText,
                  ...smallText,
                  color: theme.primaryTextColor,
                }}
              >
                {translation[1].language == "pr"
                  ? "Portugues"
                  : translation[1].language == "es"
                  ? "Español"
                  : "English"}
              </Text>
            </TouchableOpacity>
          ) : (
            ["Portugues", "Español", "English"].map((lan) => (
              <TouchableOpacity
                onPress={() => {
                  if (expandLanguage) {
                    changeLanguage(
                      lan == "Portugues" ? "pr" : lan == "Español" ? "es" : "en"
                    );
                    AsyncStorage.setItem(
                      "language",
                      lan == "Portugues" ? "pr" : lan == "Español" ? "es" : "en"
                    );
                    setExpandLanguage(false);
                  } else {
                    setExpandLanguage(true);
                  }
                }}
                style={styles.options}
              >
                <Text
                  style={{
                    ...styles.optionsText,
                    ...smallText,
                    color: theme.primaryTextColor,
                  }}
                >
                  {lan}
                </Text>
              </TouchableOpacity>
            ))
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageContainer: {
    width: 190,
    height: 150,
    marginTop: statusBarHeight + marginTopResized,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  loginButton: {
    width: "80%",
    height: 50,
    marginTop: 40,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { ...mediumText, fontWeight: "500" },
  languageSelect: {
    marginTop: 20,
    width: 100,
    height: 30,
    borderRadius: 5,
    borderWidth: 0,
  },
  languageExpand: {
    width: "100%",
    borderRadius: 5,
    borderWidth: 0.5,
    height: 30,
    overflow: "hidden",
  },
  options: {
    width: "100%",
    height: 30,
    justifyContent: "center",
  },
  optionsText: {
    marginLeft: 10,
  },
});

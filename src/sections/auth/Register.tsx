import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Image } from "expo-image";
import Constants from "expo-constants";
import React, { useContext, useState } from "react";
import {
  grayText,
  inputText,
  mediumText,
  principalColor,
  regularText,
  secundaryColor,
  shadow,
  smallText,
  subTitleText,
  titleText,
} from "../../utils/constants";
import {
  checkEmailExist,
  getAccount,
  logOut,
  register,
} from "../../api/services/Auth";
import { useAppDispatch } from "../../redux/store";
import CustomInput from "../../components/input/CustomInput";
import { themes, useTheme } from "../../utils/theme";
import { useTranslation } from "react-i18next";
import { AuthContext } from "./AuthContext";
import { changeLanguage } from "i18next";
import Toast from "react-native-toast-message";
import { err } from "react-native-svg";

const statusBarHeight = Constants.statusBarHeight;

interface Props {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
}

export default function Register({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): React.JSX.Element {
  const { section, setSection } = route.params;
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const context = useContext(AuthContext)!;
  const translation = useTranslation();
  const { t } = translation;
  const [passwordCheck, setPasswordCheck] = useState("");
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const [expandLanguage, setExpandLanguage] = useState(false);
  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.backgroundColor }}
    >
      <View style={{ alignItems: "center", width: "100%" }}>
        <View style={styles.imageContainer}>
          <Image
            source={
              theme.theme == "light"
                ? require("../../assets/LightLogo2.png")
                : require("../../assets/DarkLogo2.png")
            }
            style={styles.image}
            contentFit="contain"
          />
        </View>
        <Text
          style={{
            ...mediumText,
            color: theme.secundaryTextColor,
            marginTop: 10,
          }}
        >
          {t("Register:Crea_tu_perfil_y_empieza_a_entrenar")}
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            marginTop: 25,
            justifyContent: "space-between",
          }}
        >
          <CustomInput
            placeHolder={t("NameAlias:Nombre")}
            secureEntry={false}
            value={context.newUser.name}
            setValue={(text) =>
              context.setUser({ ...context.newUser, name: text.toString() })
            }
            style={{ width: "49%" }}
          />
          <CustomInput
            placeHolder={t("NameAlias:Apellido")}
            secureEntry={false}
            value={context.newUser.last_name}
            setValue={(text) =>
              context.setUser({
                ...context.newUser,
                last_name: text.toString(),
              })
            }
            style={{ width: "49%" }}
          />
        </View>
        <CustomInput
          placeHolder="Email"
          secureEntry={false}
          value={context.newUser.email}
          setValue={(text) =>
            context.setUser({ ...context.newUser, email: text.toString() })
          }
          keyboardType="email-address"
          style={{ marginTop: 15, width: "80%" }}
        />
        <CustomInput
          placeHolder={t("Login:place")}
          secureEntry={true}
          value={context.newUser.password}
          setValue={(text) =>
            context.setUser({ ...context.newUser, password: text.toString() })
          }
          style={{ marginTop: 15, width: "80%" }}
        />
        <CustomInput
          placeHolder={t("PasswordChange:Confirmar_Contraseña")}
          secureEntry={true}
          value={passwordCheck}
          setValue={setPasswordCheck}
          style={{ marginTop: 15, width: "80%" }}
        />
        <TouchableOpacity
          onPress={async () => {
            let Title = "";
            let errorMessage = "";

            try {
              await checkEmailExist(context.newUser.email);
              if (!isValidEmail(context.newUser.email)) {
                errorMessage = "Email_not_valid";
              } else if (
                context.newUser.password !== passwordCheck ||
                context.newUser.password.length < 5
              ) {
                errorMessage = "Verify_password";
              } else {
                context.setUser({
                  ...context.newUser,
                  user_name: context.newUser.name + context.newUser.last_name,
                });

                navigation.navigate("StepOne");
                return;
              }
              Toast.show({
                type: "error",
                text1: t("Toast:Error_register"),
                text2: t("Toast:" + errorMessage),
              });
            } catch (error) {
              Toast.show({
                type: "error",
                text1: t("Toast:Error_register"),
                text2: t("Toast:Email_not_valid"),
              });
            }
          }}
          style={{ ...styles.loginButton, backgroundColor: theme.primaryColor }}
        >
          <Text style={styles.buttonText}> {t("Register:Crear_cuenta")}</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignSelf: "center",
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              ...regularText,
              color: theme.secundaryTextColor,
              marginTop: 20,
            }}
          >
            {t("Register:Tienes_cuenta")}
          </Text>
          <Text
            onPress={() => setSection("login")}
            style={{
              ...regularText,
              color: theme.primaryColor,
              marginLeft: 5,
              marginTop: 20,
            }}
          >
            {t("Register:Inicia_sesion")}
          </Text>
        </View>
        <View style={styles.languageSelect}>
          <View
            style={{
              ...styles.languageExpand,
              height: expandLanguage ? "auto" : 30,
              borderColor: theme.primaryColor,
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
                        lan == "Portugues"
                          ? "pr"
                          : lan == "Español"
                          ? "es"
                          : "en"
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  imageContainer: {
    width: 190,
    height: 150,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  input: {
    width: "80%",
    height: Dimensions.get("window").height * 0.06,
    padding: 15,
    borderRadius: 10,
    borderWidth: 0.5,
    color: grayText,
    backgroundColor: secundaryColor,
    ...shadow,
  },
  loginButton: {
    width: "80%",
    height: 50,
    marginTop: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { ...regularText, color: "white", fontWeight: "500" },
  languageSelect: {
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

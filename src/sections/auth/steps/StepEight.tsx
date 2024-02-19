import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import { useTheme } from "../../../utils/theme";
import { mediumText, regularText, titleText } from "../../../utils/constants";
import Select from "../../../components/select/Select";
import { register } from "../../../api/services/Auth";
import { useAppDispatch } from "../../../redux/store";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../AuthContext";
import Constants from "expo-constants";
import * as Device from "expo-device";
import Toast from "react-native-toast-message";
import { setLoad } from "../../../redux/features/app/appSlice";

export default function StepEight({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const theme = useTheme();
  const { t } = useTranslation();
  const authContext = useContext(AuthContext)!;
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor,
        paddingTop: Device.osName == "Android" ? Constants.statusBarHeight : 0,
      }}
    >
      <View style={styles.centerContainer}>
        <Text style={{ ...titleText, color: theme.primaryTextColor }}>
          {t("StepEight:Donde_quieres_entrenar")}
        </Text>
        <Select
          style={{ marginTop: 30 }}
          label={t("StepEight:Casa")}
          description={t("StepEight:Entreno_con_equipamiento_domestico")}
          value={authContext.newUser.place}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              place: value.toString(),
            })
          }
          selectValue="home"
        />
        <Select
          label={t("StepEight:Gym")}
          style={{ marginTop: 10 }}
          description={t("StepEight:Voy_al_gym_o_tengo_un_gym_en_casa")}
          value={authContext.newUser.place}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              place: value.toString(),
            })
          }
          selectValue="gym"
        />
        <TouchableOpacity
          onPress={async () => {
            if (authContext.newUser.place != "") {
              dispatch(setLoad("load"));
              try {
                await register(authContext.newUser, dispatch);
              } catch (error) {
                Toast.show({
                  type: "error",
                  text1: t("Toast:Error_register"),
                  text2: "Ocurrio un error al registrarse",
                });
              }
              dispatch(setLoad("no-load"));
            }
          }}
          style={{
            ...styles.nextButton,
            backgroundColor: theme.primaryColor,
          }}
        >
          <Text
            style={{
              ...mediumText,
              color: "white",
            }}
          >
            {t("Siguiente:Siguiente")}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    width: "92%",
    paddingTop: "5%",
    alignSelf: "center",
  },
  nextButton: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    marginTop: "auto",
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

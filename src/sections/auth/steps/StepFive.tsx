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
import { mediumText, titleText } from "../../../utils/constants";
import Select from "../../../components/select/Select";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../AuthContext";
import Constants from "expo-constants";
import * as Device from "expo-device";

export default function StepFive({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const theme = useTheme();
  const { t } = useTranslation();
  const authContext = useContext(AuthContext)!;

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
          {t("StepFive:Cuantos_pasos_caminas_al_dia")}
        </Text>
        <Select
          style={{ marginTop: 30 }}
          label={t("StepFive:Menos_de_5000_pasos_al_dia")}
          value={authContext.newUser.steps}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              steps: value.toString(),
            })
          }
          selectValue="5000"
        />
        <Select
          style={{ marginTop: 10 }}
          label={t("StepFive:Entre_5000_y_10000_pasos_al_dia")}
          value={authContext.newUser.steps}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              steps: value.toString(),
            })
          }
          selectValue="5000-10000"
        />
        <Select
          style={{ marginTop: 10 }}
          label={t("StepFive:Mas_de_10000_pasos_al_dia")}
          value={authContext.newUser.steps}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              steps: value.toString(),
            })
          }
          selectValue="10000"
        />
        <TouchableOpacity
          onPress={async () => {
            if (authContext.newUser.steps != "") {
              navigation.navigate("StepSix");
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

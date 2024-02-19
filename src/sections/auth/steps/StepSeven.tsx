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
import { useTranslation } from "react-i18next";
import { AuthContext } from "../AuthContext";
import Constants from "expo-constants";
import * as Device from "expo-device";

export default function StepSeven({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const theme = useTheme();
  const authContext = useContext(AuthContext)!;
  const [sex, setSex] = useState("");
  const { t } = useTranslation();
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
          {t("StepSeven:En_que_nivel_quieres_empezar")}
        </Text>
        <Text
          style={{
            ...regularText,
            color: theme.secundaryTextColor,
            marginTop: 10,
          }}
        >
          {t("StepSeven:Podras_cambiar_el_nivel")}
        </Text>
        <Select
          style={{ marginTop: 30 }}
          label={t("StepSeven:Iniciacion")}
          description={t("StepSeven:No_tengo_mucha_experiencia")}
          value={authContext.newUser.level}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              level: value.toString(),
            })
          }
          selectValue="beginner"
        />
        <Select
          label={t("StepSeven:Regular")}
          style={{ marginTop: 10 }}
          description={t("StepSeven:Llevo_algunos_meses_entrenando")}
          value={authContext.newUser.level}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              level: value.toString(),
            })
          }
          selectValue="regular"
        />
        <Select
          label={t("StepSeven:Avanzado")}
          style={{ marginTop: 10 }}
          description="Llevo muchos años entrenando"
          value={authContext.newUser.level}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              level: value.toString(),
            })
          }
          selectValue="advanced"
        />
        <TouchableOpacity
          onPress={async () => {
            if (authContext.newUser.level != "") {
              navigation.navigate("StepEight");
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

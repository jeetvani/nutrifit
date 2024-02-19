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

export default function StepSix({
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
          {t("StepSix:Cuantos_dias_entrenas_semanalmente")}
        </Text>
        <Select
          style={{ marginTop: 30 }}
          label={t("StepSix:Menos_de_3_dias_por_semana")}
          value={authContext.newUser.training_days}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              training_days: value.toString(),
            })
          }
          selectValue="-3"
        />
        <Select
          style={{ marginTop: 10 }}
          label={t("StepSix:dias_por_semana_3")}
          value={authContext.newUser.training_days}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              training_days: value.toString(),
            })
          }
          selectValue="3"
        />
        <Select
          style={{ marginTop: 10 }}
          label={t("StepSix:dias_por_semana_4")}
          value={authContext.newUser.training_days}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              training_days: value.toString(),
            })
          }
          selectValue="4"
        />
        <Select
          style={{ marginTop: 10 }}
          label={t("StepSix:dias_por_semana_5")}
          value={authContext.newUser.training_days}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              training_days: value.toString(),
            })
          }
          selectValue="5"
        />
        <Select
          style={{ marginTop: 10 }}
          label={t("StepSix:dias_por_semana_7_6")}
          value={authContext.newUser.training_days}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              training_days: value.toString(),
            })
          }
          selectValue="6-7"
        />
        <TouchableOpacity
          onPress={async () => {
            if (authContext.newUser.training_days != "") {
              navigation.navigate("StepSeven");
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

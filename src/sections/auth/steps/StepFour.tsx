import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useContext, useState } from "react";
import { useTheme } from "../../../utils/theme";
import { mediumText, regularText, titleText } from "../../../utils/constants";
import Select from "../../../components/select/Select";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../AuthContext";
import Constants from "expo-constants";
import * as Device from "expo-device";

export default function StepFour({
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
          {t("StepFour:Cual_es_tu_objetivo")}
        </Text>
        <Text
          style={{
            ...regularText,
            color: theme.secundaryTextColor,
            marginTop: 10,
          }}
        >
          {t("StepFour:Te_en_cuenta_que_cualquier_actividad")}
        </Text>
        <Select
          style={{ marginTop: 30 }}
          label={t("StepFour:Perder_grasa")}
          description={t("StepFour:Reducir_peso_corporal_y_grasa")}
          value={authContext.newUser.objetive}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              objetive: value.toString(),
            })
          }
          selectValue="loseFat"
        />
        <Select
          label={t("StepFour:Ganar_musculo")}
          style={{ marginTop: 10 }}
          description={t("StepFour:Incrementar_mi_masa_muscular")}
          value={authContext.newUser.objetive}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              objetive: value.toString(),
            })
          }
          selectValue="gainMuscle"
        />
        <Select
          label={t("StepFour:Mantenimiento_y_tonificacion")}
          style={{ marginTop: 10 }}
          description={t("StepFour:Mejorar_mi_condicion_manteniendo_mi_peso")}
          value={authContext.newUser.objetive}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              objetive: value.toString(),
            })
          }
          selectValue="maintenanceAndTonification"
        />
        <TouchableOpacity
          onPress={async () => {
            if (authContext.newUser.objetive != "") {
              navigation.navigate("StepFive");
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

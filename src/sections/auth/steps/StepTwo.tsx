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
import { mediumText, titleText, regularText } from "../../../utils/constants";
import Select from "../../../components/select/Select";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../AuthContext";
import Constants from "expo-constants";
import * as Device from "expo-device";

export default function StepTwo({
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
          {t("StepTwo:Cual_es_tu_sexo_metabolico")}
        </Text>
        <Text
          style={{
            ...regularText,
            color: theme.secundaryTextColor,
            marginTop: 10,
          }}
        >
          {t("StepTwo:Basado_en_tu_sexo")}
        </Text>
        <Select
          style={{ marginTop: 20 }}
          label={t("StepTwo:HombreLabel")}
          value={authContext.newUser.sex}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              sex: value.toString(),
            })
          }
          selectValue="man"
        />
        <Select
          style={{ marginTop: 10 }}
          label={t("StepTwo:MujerLabel")}
          value={authContext.newUser.sex}
          setValue={(value) =>
            authContext.setUser({
              ...authContext.newUser,
              sex: value.toString(),
            })
          }
          selectValue="women"
        />
        <TouchableOpacity
          onPress={async () => {
            if (authContext.newUser.sex !== "") {
              navigation.navigate("StepThree");
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
    paddingTop: "5%",
    width: "92%",
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

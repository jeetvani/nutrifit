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
import CustomInput from "../../../components/input/CustomInput";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../AuthContext";
import Constants from "expo-constants";
import * as Device from "expo-device";
import moment from "moment";
export default function StepThree({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const theme = useTheme();
  const authContext = useContext(AuthContext)!;
  const { t } = useTranslation();
  const [date, setDate] = useState("");
  const [height, setHeight] = useState("");

  const isValidDate = (dateString: string): boolean => {
    const isValid = moment(dateString, "MM/DD/YYYY", true).isValid();
    return isValid;
  };
  const formatBirthDay = (text: string): string => {
    const formattedText = text
      .replace(/\D/g, "")
      .slice(0, 8)
      .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    return formattedText;
  };
  const formatDecimal = (text: string): string => {
    const formattedText = text
      .replace(/\D/g, "")
      .slice(0, 3)
      .replace(/(\d{1})(\d{2})/, "$1,$2");
    return formattedText;
  };

  const handleNext = () => {
    const { newUser } = authContext;

    const heightNumeric = parseFloat(newUser.height.replace(",", "."));
    const weightNumeric = parseFloat(newUser.weight);

    if (
      !isValidDate(newUser.birth_day) ||
      isNaN(heightNumeric) ||
      heightNumeric < 0 ||
      isNaN(weightNumeric) ||
      weightNumeric <= 30
    ) {
      return;
    }
    navigation.navigate("StepFour");
  };
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
          {t("StepThree:Algunos_datos")}
        </Text>
        <Text
          style={{
            ...regularText,
            color: theme.secundaryTextColor,
            marginTop: 10,
          }}
        >
          {t("StepThree:Con_estos_datos_conseguiremos")}
        </Text>
        <CustomInput
          style={{ marginTop: 20 }}
          placeHolder="(DD/MM/YYYY)"
          value={formatBirthDay(authContext.newUser.birth_day)}
          setValue={(text) =>
            authContext.setUser({
              ...authContext.newUser,
              birth_day: `${formatBirthDay(text.toString()).split("/")[1]}/${
                formatBirthDay(text.toString()).split("/")[0]
              }/${formatBirthDay(text.toString()).split("/")[2]}`,
            })
          }
          secureEntry={false}
          keyboardType="numeric"
          maxLength={10}
        />
        <CustomInput
          style={{ marginTop: 10 }}
          placeHolder={t("StepThree:Altura")}
          value={authContext.newUser.height}
          setValue={(text) =>
            authContext.setUser({
              ...authContext.newUser,
              height: text.toString(),
            })
          }
          secureEntry={false}
          keyboardType="numeric"
          maxLength={3}
        />

        <CustomInput
          style={{ marginTop: 10 }}
          placeHolder={t("StepThree:Peso")}
          value={authContext.newUser.weight}
          setValue={(text) =>
            authContext.setUser({
              ...authContext.newUser,
              weight: text.toString(),
            })
          }
          secureEntry={false}
          keyboardType="numeric"
          maxLength={3}
        />

        <TouchableOpacity
          onPress={handleNext}
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

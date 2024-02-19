import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  subTitleText,
  titleText,
  mediumText,
  regularText,
  shadow,
} from "../../../utils/constants";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "../../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../../redux/store";
import { useTranslation } from "react-i18next";
const calorieCalculation = [
  {
    kcal: 2550,
  },
];

export default function MetabolicProfile({
  route,
}: {
  navigation: any;
  route: any;
}) {
  const theme = useTheme();
  const { t } = useTranslation();
  const date = calorieCalculation[0];
  const navigation = useNavigation();
  const accountState = useAppSelector((state) => state.account.user as any);
  const [account, setAccount] = useState(accountState);

  useEffect(() => {
    console.info(accountState);
    setAccount(accountState);
  }, [accountState]);

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
            {t("MetabolicProfile:Perfil_Metabolico")}
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.centerContainer}
        >
          <Text
            style={{ ...styles.subTitletext, color: theme.primaryTextColor }}
          >
            {t("MetabolicProfile:Perfil_Metabolico")}
          </Text>
          <Text style={{ ...styles.text, color: theme.primaryTextColor }}>
            {t("MetabolicProfile:Tus_datos_metabolicos")}
          </Text>
          <View
            style={{
              ...styles.containerData,
              borderColor: theme.primaryColor,
              backgroundColor: theme.backgroundColor,
              shadowColor: theme.shadowColor,
            }}
          >
            <View style={styles.containerAccount}>
              <Text
                style={{
                  ...styles.textcontainer,
                  marginTop: 0,
                  color: theme.primaryTextColor,
                }}
              >
                {t("MetabolicProfile:" + account.sex)},{" "}
                {new Date().getFullYear() -
                  new Date(account.birth_day).getFullYear()}{" "}
                {t("MetabolicProfile:años")}
              </Text>
              <Text
                style={{
                  ...styles.textcontainer,
                  color: theme.primaryTextColor,
                }}
              >
                {account.weights[account.weights.length - 1].weight}{" "}
                {t("MetabolicProfile:Kg")}, {account.height}{" "}
                {t("MetabolicProfile:Cm")}
              </Text>
              <Text
                style={{
                  ...styles.textcontainer,
                  color: theme.primaryTextColor,
                }}
              >
                {account.training_days}{" "}
                {t("MetabolicProfile:entrenos_por_semana")}
              </Text>
              <Text
                style={{
                  ...styles.textcontainer,
                  color: theme.primaryTextColor,
                }}
              >
                {t("MetabolicProfile:Entre")} {account.steps}{" "}
                {t("MetabolicProfile:pasos_por_semana")}
              </Text>
            </View>
          </View>
          <Text
            style={{
              ...styles.subTitletext,
              color: theme.primaryTextColor,
              marginTop: 15,
            }}
          >
            {t("MetabolicProfile:Calorias_diarias_necesarias")}
          </Text>
          <Text
            style={{
              ...styles.text,
              color: theme.primaryTextColor,
            }}
          >
            {t("MetabolicProfile:De_acuerdo_a_tu_objetivo")}
          </Text>
          <View
            style={{
              width: "50%",
              marginTop: 10,
              borderColor: theme.primaryColor,
              borderRadius: 10,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.containerRow}>
              <FontAwesome5
                name="gripfire"
                size={30}
                color={theme.primaryColor}
              />
              <Text
                style={{ ...styles.dateKcal, color: theme.primaryTextColor }}
              >
                {account.kcal.toFixed(2)}
              </Text>
              <Text
                style={{ ...styles.textKcal, color: theme.primaryTextColor }}
              >
                {t("MetabolicProfile:Kcal")}
              </Text>
            </View>
          </View>
        </ScrollView>
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

    alignSelf: "center",
    alignItems: "center",
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
    marginTop: 10,
    fontSize: 22,
    fontWeight: "400",
  },
  text: { ...regularText, marginTop: 3, width: "80%" },
  containerData: {
    width: "100%",
    marginTop: 18,
    borderRadius: 10,
    borderWidth: 1,
    ...shadow,
  },
  textcontainer: {
    marginTop: 8,
    ...regularText,
    fontWeight: "400",
  },
  containerAccount: { marginLeft: 20, marginVertical: 15 },
  edit: { marginLeft: 20, marginTop: 11 },
  editText: { ...regularText, fontWeight: "500" },
  containerRow: { flexDirection: "row", marginTop: 15, marginBottom: 15 },
  dateKcal: {
    ...titleText,
    fontWeight: "700",
    marginLeft: 5,
    marginTop: 3,
  },
  textKcal: { ...mediumText, marginTop: 8, marginLeft: 5 },
  question: {
    marginLeft: 22,
    marginTop: 7,
    marginBottom: 20,
  },
  questionText: { ...regularText, fontWeight: "500" },
});

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Alert,
} from "react-native";
import React, { useState } from "react";
import {
  subTitleText,
  mediumText,
  regularText,
  shadow,
  titleText,
} from "../../../../../utils/constants";
import { useTranslation } from "react-i18next";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "../../../../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import Select from "../../../../../components/select/Select";

export default function WeightLevel() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const options = [
    { label: "Casa", description: "Entreno con equipamiento domestico" },
    { label: "Gimnasio", description: "Voy al gym o tengo un gym en casa" },
  ];
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  function handleOptionPress(index: number): void {
    setSelectedOption(index);
  }
  const [value, setValue] = useState("");
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
            {t("WeightLevel:Nivel_de_peso")}
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.centerContainer}
        >
          <Text
            style={{
              ...subTitleText,
              color: theme.primaryTextColor,
              marginTop: 10,
            }}
          >
            {t("WeightLevel:Cuan_duro_quieres_entrenar")}
          </Text>
          <Text
            style={{
              ...mediumText,
              color: theme.secundaryTextColor,
              marginTop: 5,
            }}
          >
            {t("WeightLevel:En_base_a_tu_respuesta")}
          </Text>
          <View style={styles.optionsContainer}>
            <Select
              style={{ marginBottom: 10 }}
              label={t("WeightLevel:Estoy_empezando")}
              description={t("WeightLevel:Tengo_poca_experiencia")}
              setValue={setValue}
              value={value}
              selectValue="beginning"
            ></Select>

            <Select
              style={{ marginBottom: 10 }}
              label={t("WeightLevel:Entreno_Normal")}
              description={t("WeightLevel:Prefiero_empezar")}
              setValue={setValue}
              value={value}
              selectValue="Normal"
            ></Select>

            <Select
              style={{ marginBottom: 10 }}
              label={t("WeightLevel:Me_gusta_entrenar_fuerte")}
              description={t("WeightLevel:Quiero_entrenar_con_pesos")}
              setValue={setValue}
              value={value}
              selectValue="strong"
            ></Select>

            <Select
              style={{ marginBottom: 10 }}
              label={t("WeightLevel:Quiero_entrenar_muy_duro")}
              description={t(
                "WeightLevel:Quiero_entrenar_con_el_maximo_peso_posible"
              )}
              setValue={setValue}
              value={value}
              selectValue="hard"
            ></Select>
          </View>
        </ScrollView>
        <View
          style={{
            width: "100%",
            height: 120,
            backgroundColor: theme.backgroundColor,
            shadowColor: theme.shadowColor,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                "Would you like to modify the weight level?",
                "This change will modify the weight level of the workouts.",
                [
                  { text: "Cancel", style: "destructive" },
                  { text: "Modify", onPress: () => console.log(value) },
                ]
              )
            }
            style={{
              ...styles.buttomContainer,
              backgroundColor: theme.primaryColor,
              shadowColor: theme.shadowColor,
            }}
          >
            <Text
              style={{
                ...styles.keepContainer,
              }}
            >
              {t("Guardar:Guardar")}
            </Text>
          </TouchableOpacity>
        </View>
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

    alignItems: "center",
    alignSelf: "center",
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
    marginTop: 12,
    ...subTitleText,
    fontWeight: "400",
  },
  text: { ...mediumText, fontWeight: "300", width: "92%", marginTop: 3 },
  optionsContainer: {
    marginTop: 20,
  },
  optionContainer: {
    width: "100%",
    height: 95,
    borderRadius: 10,
    borderWidth: 1.2,
    ...shadow,
    justifyContent: "center",
    padding: 10,
    marginBottom: 10,
  },
  optionLabel: {
    ...mediumText,
    fontWeight: "500",
    marginTop: 0,
  },
  optionDescription: {
    ...regularText,
    width: "48%",
  },
  buttomContainer: {
    justifyContent: "center",
    width: "90%",
    height: 50,
    alignSelf: "center",
    ...shadow,
    marginTop: 30,
    borderRadius: 15,
    elevation: 8,
  },
  keepContainer: {
    alignSelf: "center",
    ...subTitleText,
    fontWeight: "400",
    color: "white",
  },
});

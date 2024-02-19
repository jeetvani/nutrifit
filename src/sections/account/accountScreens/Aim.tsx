import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  subTitleText,
  regularText,
  shadow,
  mediumText,
  titleText,
} from "../../../utils/constants";
import { useTheme } from "../../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import Select from "../../../components/select/Select";
import { AuthContext } from "../../auth/AuthContext";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useTranslation } from "react-i18next";
import { setUsers } from "../../../api/services/User";
import Toast from "react-native-toast-message";

interface OptionProps {
  label: string;
  description: string;
  selected: boolean;
  onPress: () => void;
}

export default function Aim() {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const userState = useAppSelector((state: any) => state.account.user);
  const [user, setUser] = useState(userState);
  const [value, setValue] = useState(userState.objetive);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionPress = (index: number) => {
    setSelectedOption(index);
  };

  useEffect(() => {
    setUser(userState);
  }, [userState]);

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
            {t("Aim:Objetivo_de_salud")}
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.centerContainer}
        >
          <Text
            style={{ ...styles.subTitletext, color: theme.primaryTextColor }}
          >
            {t("Aim:Cuál_es_tu_objetivo")}
          </Text>
          <Text style={{ ...styles.text, color: theme.primaryTextColor }}>
            {t("Aim:Tus_datos_metabólicos")}
          </Text>
          <View style={styles.optionsContainer}>
            <Select
              style={{ marginBottom: 10 }}
              label={t("Aim:Perder_grasa")}
              description={t("Aim:reducir_peso_corporal_y_grasa")}
              setValue={setValue}
              value={value}
              selectValue="loseFat"
            ></Select>
            <Select
              style={{ marginBottom: 10 }}
              label={t("Aim:ganar_musculo")}
              description={t("Aim:incrementa_mi_masa_muscular")}
              setValue={setValue}
              value={value}
              selectValue="gainMuscle"
            ></Select>
            <Select
              style={{ marginBottom: 10 }}
              label={t("Aim:mantenimiento_y_tonificacion")}
              description={t("Aim:mejorar_mi_condicion")}
              setValue={setValue}
              value={value}
              selectValue="maintenanceAndTonification"
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
                t("Aim:Desea_modificar_su_objetivo"),
                t("Aim:Cambio"),
                [
                  { text: t("Alert:Cancel"), style: "destructive" },
                  {
                    text: t("Alert:Modify"),
                    onPress: () => {
                      setUsers({ field: "objetive", value }, dispatch);
                      Toast.show({
                        type: "success",
                        text1: t("Toast:Modify"),
                        text2: t("Toast:Diet_goal_was_modified"),
                      });
                    },
                  },
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

    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  arrow: {
    alignSelf: "center",
    position: "absolute",
  },
  titleTop: {
    marginLeft: "auto",
    marginRight: "auto",
  },

  subTitletext: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "400",
  },
  text: { ...regularText, marginTop: 3, width: "80%" },
  optionsContainer: {
    marginTop: 20,
  },
  optionContainer: {
    width: "100%",
    height: 75,
    borderRadius: 10,
    borderWidth: 1.2,
    ...shadow,
    justifyContent: "center",
    padding: 10,
    marginBottom: 10,
  },

  buttomContainer: {
    justifyContent: "center",
    width: "90%",
    height: 50,
    alignSelf: "center",
    ...shadow,
    marginTop: 30,
    borderRadius: 15,
    elevation: 1,
  },
  keepContainer: {
    alignSelf: "center",
    ...subTitleText,
    fontWeight: "400",
    color: "white",
  },
});

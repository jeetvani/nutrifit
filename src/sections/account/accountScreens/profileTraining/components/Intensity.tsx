import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  subTitleText,
  mediumText,
  regularText,
  shadow,
  titleText,
} from "../../../../../utils/constants";
import { useTranslation } from "react-i18next";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { useTheme } from "../../../../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import Select from "../../../../../components/select/Select";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import { setUsers } from "../../../../../api/services/User";
import Toast from "react-native-toast-message";

export default function Intensity() {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const userState = useAppSelector((state: any) => state.account.user);
  const [user, setUser] = useState(userState);
  const [value, setValue] = useState(userState.level);

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
            {t("Intensity:Nivel")}
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
            {t("Intensity:Con_que_intensidad_entrena")}
          </Text>
          <Text style={{ ...mediumText, color: theme.secundaryTextColor }}>
            {t("Intensity:Intensidad_de_entrenamiento")}
          </Text>
          <View style={styles.optionsContainer}>
            <Select
              style={{ marginBottom: 10 }}
              label={t("Intensity:Iniciacion")}
              description={t("Intensity:Llevo_poco_tiempo_entrenando")}
              setValue={setValue}
              value={value}
              selectValue="beginner"
            ></Select>
            <Select
              style={{ marginBottom: 10 }}
              label={t("Intensity:Intermedio")}
              description={t("Intensity:Llevo_algunos_meses_entrenando")}
              setValue={setValue}
              value={value}
              selectValue="regular"
            ></Select>
            <Select
              style={{ marginBottom: 10 }}
              label={t("Intensity:Avanzado")}
              description={t("Intensity:Levo_muchos_años_entrenando")}
              setValue={setValue}
              value={value}
              selectValue="advanced"
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
                t("Intensity:Do_you_want_to_change_your_level"),
                t("Intensity:Change"),
                [
                  { text: t("Alert:Cancel"), style: "destructive" },
                  {
                    text: t("Alert:Modify"),
                    onPress: () => {
                      setUsers({ field: "level", value }, dispatch);
                      Toast.show({
                        type: "success",
                        text1: t("Toast:Modify"),
                        text2: t("Toast:Level_was_modified"),
                      });
                    },
                  },
                ]
              )
            }
            style={{
              ...styles.buttomContainer,
              backgroundColor: theme.primaryColor,
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
  text: { ...mediumText, fontWeight: "300", width: "92%" },
  optionsContainer: {
    marginTop: 15,
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
  optionLabel: {
    ...mediumText,
    fontWeight: "500",
  },
  optionDescription: {
    ...regularText,
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

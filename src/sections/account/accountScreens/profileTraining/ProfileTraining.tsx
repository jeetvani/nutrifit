import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  subTitleText,
  titleText,
  mediumText,
  regularText,
} from "../../../../utils/constants";
import { AntDesign } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../../../redux/store";
interface Props {
  data: {
    intensity: String;
    place: String;
    weightLevel: String;
    timeDay: String;
    duration: String;
    trainerGender: String;
    muscleGroup: String;
    skill: String;
    trainingDays: String;
  };
}

export default function ProfileTraining() {
  const theme = useTheme();
  const userState = useAppSelector((state) => state.account.user as any);
  const navegation = useNavigation();
  const { t } = useTranslation();
  const [user, setUser] = useState(userState);

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
            onPress={() => navegation.goBack()}
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
            {t("ProfileTraining:Perfil_de_Entrenamiento")}
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.centerContainer}
        >
          <TouchableOpacity
            onPress={() => navegation.navigate("trainingPlace")}
            style={{
              ...styles.buttomContainer,
              borderColor: theme.secundaryColor,
              backgroundColor: theme.backgroundColor,
              shadowColor: theme.primaryTextColor,
            }}
          >
            <View style={{ flexDirection: "row", marginLeft: 15 }}>
              <View style={{ ...styles.columnContainer }}>
                <Text
                  style={{
                    ...styles.optionLabel,
                    color: theme.primaryTextColor,
                  }}
                >
                  {t("ProfileTraining:Lugar_de_entrenamiento")}
                </Text>
                <Text
                  style={{
                    ...styles.optionDescription,
                    color: theme.primaryTextColor,
                  }}
                >
                  {t("ProfileTraining:" + user.place)}
                </Text>
              </View>
              <AntDesign
                name="right"
                size={18}
                color="black"
                style={{
                  ...styles.arrowContainer,
                  color: theme.primaryTextColor,
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navegation.navigate("intensity")}
            style={{
              ...styles.buttomContainer,
              borderColor: theme.secundaryColor,
              backgroundColor: theme.backgroundColor,
              shadowColor: theme.primaryTextColor,
            }}
          >
            <View style={{ flexDirection: "row", marginLeft: 15 }}>
              <View style={{ ...styles.columnContainer }}>
                <Text
                  style={{
                    ...styles.optionLabel,
                    color: theme.primaryTextColor,
                  }}
                >
                  {t("ProfileTraining:Nivel")}
                </Text>
                <Text
                  style={{
                    ...styles.optionDescription,
                    color: theme.primaryTextColor,
                  }}
                >
                  {t("ProfileTraining:" + user.level)}
                </Text>
              </View>
              <AntDesign
                name="right"
                size={18}
                color="black"
                style={{
                  ...styles.arrowContainer,
                  color: theme.primaryTextColor,
                }}
              />
            </View>
          </TouchableOpacity>
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
    alignItems: "center",
  },
  centerContainer: { width: "92%", alignSelf: "center" },
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
  },
  buttomContainer: {
    width: "100%",
    alignSelf: "center",
    height: 70,
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
  },
  optionLabel: {
    ...mediumText,
    fontWeight: "500",
  },
  optionDescription: {
    ...regularText,
    marginTop: 2,
  },
  columnContainer: { flexDirection: "column" },
  arrowContainer: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: 20,
  },
});

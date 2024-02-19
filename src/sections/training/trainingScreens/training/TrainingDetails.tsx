import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "../../../../utils/theme";
import {
  imageUrl,
  mediumText,
  regularText,
  shadow,
  smallText,
  subTitleText,
} from "../../../../utils/constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { Image } from "expo-image";
import { useTraining } from "../../../../context/trainingContext";
import { useNavigation } from "@react-navigation/native";
import Excercise from "./components/Excercise";
import Constants from "expo-constants";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { setLoad } from "../../../../redux/features/app/appSlice";
import { useTranslation } from "react-i18next";

interface Props {
  id: string;
}

export default function TrainingDetails({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const theme = useTheme();
  const translation = useTranslation();
  const t = translation.t;
  const groupTraining: any = useTraining();
  const training: any = groupTraining.trainings.find(
    (training: any) => training.id === route.params.trainingId
  );
  const account = useAppSelector((state: any) => state.account.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoad("load"));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.backgroundColor,
      }}
    >
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          width: "87%",
          top: Constants.statusBarHeight + 5,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            ...styles.topButton,
            backgroundColor: theme.backgroundColor,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="left" size={20} color={theme.primaryTextColor} />
        </TouchableOpacity>
      </View>
      <View
        style={{ ...styles.imageContainer, shadowColor: theme.shadowColor }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: imageUrl + training.image.url,
            headers: {
              Cookie: "payload-token=" + account.token,
            },
          }}
          contentFit="cover"
        />
      </View>
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
          overflow: "visible",
          marginBottom: 20,
          marginTop: -60,
        }}
      >
        <View
          style={{
            ...styles.centerContainer,
            backgroundColor: theme.backgroundColor,
            marginTop: 60,
          }}
        >
          <View
            style={{
              ...styles.principalContainer,
              backgroundColor: theme.backgroundColor,
              borderColor: theme.primaryColor,
              shadowColor: theme.shadowColor,
            }}
          >
            <Text
              style={{
                ...regularText,
                marginTop: 15,
                color: theme.secundaryTextColor,
              }}
            >
              {t("TrainingDetails:Entrenamiento")}
            </Text>
            <View style={styles.principalCenterContainer}>
              <Text
                style={{
                  ...mediumText,
                  color: theme.primaryTextColor,
                  marginTop: 4,
                }}
              >
                {training.titles[translation[1].language]}
              </Text>
              <Text
                style={{
                  ...smallText,
                  color: theme.secundaryColor,
                  fontWeight: "400",
                  marginTop: 4,
                  marginBottom: 15,
                }}
              >
                {training.excercises.length} {t("TrainingDetails:ejercicios")} -{" "}
                {training.duration} min
              </Text>
              {groupTraining.typeScreen != "defaultTraining" &&
              training.titles[translation[1].language] ==
                groupTraining.today.day[translation[1].language] ? (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("TrainingStart", { training: training })
                  }
                  style={{
                    ...styles.button,
                    marginBottom: 15,
                    backgroundColor: theme.primaryColor,
                  }}
                >
                  <Text
                    style={{
                      ...regularText,
                      fontSize: 12,
                      fontWeight: "400",
                      color: "white",
                    }}
                  >
                    {t("TrainingDetails:Empezar_entrenamiento")}
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </View>

          <View style={styles.summary}>
            <Text
              style={{
                ...mediumText,
                color: theme.primaryTextColor,
              }}
            >
              {t("TrainingDetails:Ejercicios")}
            </Text>
            <Text
              style={{
                ...regularText,
                fontSize: 12,
                color: theme.secundaryTextColor,
                marginTop: 5,
              }}
            >
              {t("TrainingDetails:Realiza_en_orden")}{" "}
              {training.excercises.length} {t("TrainingDetails:ejercicios_con")}
            </Text>
          </View>
          <View style={{ width: "85%", marginTop: 10 }}>
            {training.excercises.map((data: any) => (
              <Excercise data={data} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    width: "100%",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: Dimensions.get("screen").height * 0.52,
    ...shadow,
  },
  principalContainer: {
    width: "87%",
    marginTop: -60,
    borderWidth: 1,
    borderRadius: 20,
    ...shadow,
    alignItems: "center",
    justifyContent: "center",
  },
  principalCenterContainer: {
    width: "85%",
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkTextContainer: {
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: "auto",
    width: "80%",
    alignSelf: "center",
  },
  backButton: {
    position: "absolute",
    width: 40,
    height: 40,
    left: 15,
    top: 15,
    borderRadius: 100,
    ...shadow,
  },
  summary: {
    width: "85%",
    marginTop: 25,
  },
  topButton: {
    width: 45,
    height: 45,
    borderRadius: 10,
    ...shadow,
  },
});

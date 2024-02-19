import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
  imageUrl,
  regularText,
  smallText,
} from "../../../../../utils/constants";
import { useTheme } from "../../../../../utils/theme";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTraining } from "../../../../../context/trainingContext";
import { useAppSelector } from "../../../../../redux/store";
import { useTranslation } from "react-i18next";

interface Props {
  data: any;
}

export default function Training(props: Props) {
  const theme = useTheme();
  const userTraining: any = useTraining();
  const translation = useTranslation();
  const t = translation.t;
  const training = props.data.training
    ? { ...props.data.training, index: props.data.index }
    : props.data;
  const navigation = useNavigation();

  const account = useAppSelector((state: any) => state.account.user);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("TrainingDetails", { trainingId: training.id })
      }
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image
          style={{ width: "100%", height: "100%", borderRadius: 10 }}
          source={{
            uri: imageUrl + training.image.url,
            headers: {
              Cookie: "payload-token=" + account.token,
            },
          }}
          contentFit="cover"
        />
      </View>
      <View style={styles.dataContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ ...regularText, color: theme.secundaryTextColor }}>
            {t("TrainingComponents:Dia")} {training.index}
          </Text>
          {userTraining.today ? (
            userTraining.today.index + 1 == training.index ? (
              <View
                style={{
                  marginLeft: 7,
                  backgroundColor: theme.primaryColor,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    ...smallText,
                    color: "white",
                    paddingRight: 5,
                    paddingLeft: 5,
                  }}
                >
                  {t("TrainingComponents:Hoy")}
                </Text>
              </View>
            ) : null
          ) : null}
        </View>
        <Text
          style={{
            ...regularText,
            marginTop: 3,
            color: theme.primaryTextColor,
          }}
        >
          {training.titles[translation[1].language]}
        </Text>
        <Text
          style={{
            ...regularText,
            marginTop: 3,
            fontSize: 12,
            color: theme.primaryTextColor,
          }}
        >
          {training.duration} min
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <AntDesign name="right" size={22} color={theme.secundaryTextColor} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  imageContainer: {
    width: "25%",
    height: "90%",
  },
  dataContainer: {
    marginLeft: 20,
  },
  iconContainer: {
    marginLeft: "auto",
  },
});

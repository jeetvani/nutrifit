import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  blackTransparent,
  imageUrl,
  mediumText,
  primaryColor,
  principalColor,
  regularText,
  secundaryColor,
  shadow,
  smallText,
  subTitleText,
  titleText,
} from "../../../../../utils/constants";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../../../../../utils/theme";
import { loadFonts } from "../../../../../utils/fonts";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../../../redux/store";

const dimensions = Dimensions.get("screen");

interface Props {
  data: any;
}

export default function Training(props: Props) {
  useEffect(() => {
    loadFonts();
  }, []);
  const theme = useTheme();
  const translation = useTranslation();
  const t = translation.t;
  const navigation = useNavigation();
  const accountState = useAppSelector((state) => state.account.user as any);
  const [user, setUser] = useState(accountState);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("TrainingFlow", {
          training: props.data,
          typeScreen: "userTraining",
        })
      }
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: imageUrl + props.data.image,
            headers: {
              Cookie: "payload-token=" + user.token,
            },
          }}
          contentFit="cover"
          transition={1000}
        />

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
          style={{ width: "100%", height: "100%", position: "absolute" }}
        />

        <View style={styles.centerContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ ...regularText, color: "white", fontWeight: "400" }}>
              {t("TrainingSlider:Metodo")}
            </Text>
            <Text style={{ ...regularText, color: "white", fontWeight: "500" }}>
              {" "}
              {props.data.titles[translation[1].language]}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ ...smallText, color: "white", fontWeight: "400" }}>
              {props.data.duration} min • {props.data.type}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...mediumText,
                color: "white",
                marginTop: 8,
              }}
            >
              {props.data.today.day[translation[1].language].toUpperCase()}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    width: dimensions.width * 0.92,
    height: 130,
    backgroundColor: secundaryColor,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  centerContainer: {
    width: "90%",
    height: "75%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
});

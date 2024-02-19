import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  AntDesign,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
  Foundation,
} from "@expo/vector-icons";
import { useTheme } from "../../../../utils/theme";
import {
  subTitleText,
  regularText,
  shadow,
  smallText,
  imageUrl,
} from "../../../../utils/constants";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import {
  addFavoriteTraining,
  deleteFavoriteNutrition,
  deleteFavoriteTraining,
} from "../../../../api/services/Favorites";
import { useTranslation } from "react-i18next";

export default function FavSquare(props: any) {
  const translation = useTranslation();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const theme = useTheme();
  const accountState = useAppSelector((state) => state.account.user as any);
  const [account, setAccount] = useState(accountState);
  const [check, setCheck] = useState(true);
  const { data, type } = props;

  useEffect(() => {
    setAccount(accountState);
  }, [accountState]);

  return (
    <TouchableOpacity
      key={data.id}
      style={{
        ...styles.FoodContainer,
        borderColor: theme.primaryColor,
        backgroundColor: theme.backgroundColor,
        shadowColor:
          theme.theme == "light"
            ? theme.secundaryTextColor
            : theme.primaryColor,
      }}
    >
      <View style={styles.horizontalContainer}>
        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={{
              uri: imageUrl + data.image.url,
              headers: {
                Cookie: "payload-token=" + account.token,
              },
            }}
            contentFit="cover"
          />
          {type == "nutrition" ? (
            <View
              style={{
                position: "absolute",
                backgroundColor: theme.primaryColor,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                bottom: 0,
              }}
            >
              <Text
                style={{
                  ...smallText,
                  color: "white",
                  padding: 3,
                }}
              >
                {(account.kcal / 5).toFixed(2)} kcal
              </Text>
            </View>
          ) : null}
        </View>
        <View style={styles.textContainer}>
          <Text
            style={{
              ...regularText,
              color: theme.primaryTextColor,
            }}
          >
            {data.titles[translation[1].language]}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              setCheck(false);
              type == "training"
                ? deleteFavoriteTraining(data.id, dispatch)
                : deleteFavoriteNutrition(data.id, dispatch);
            }}
          >
            <Ionicons
              name={check ? "heart" : "heart-outline"}
              size={22}
              color={theme.primaryColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "100%",
  },
  FoodContainer: {
    marginBottom: 15,
    width: "100%",
    height: 110,
    borderRadius: 10,
    borderWidth: 0.5,
    ...shadow,
  },
  horizontalContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    margin: 20,
  },
  imagecontainer: {
    width: 80,
    height: 80,
    borderRadius: 7,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 7,
  },
  textContainer: { width: "60%", marginLeft: 15 },

  iconContainer: {
    position: "relative",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: 5,
    marginTop: 2,
  },
});

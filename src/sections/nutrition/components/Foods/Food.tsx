import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  imageUrl,
  regularText,
  shadow,
  smallText,
} from "../../../../utils/constants";
import { useTheme } from "../../../../utils/theme";
import { Image } from "expo-image";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import {
  addFavoriteNutrition,
  deleteFavoriteNutrition,
} from "../../../../api/services/Favorites";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

export default function Food(props: { food: any }) {
  const translation = useTranslation();
  const navigation = useNavigation();
  const theme = useTheme();
  const food = props.food;
  const accountState = useAppSelector((state: any) => state.account.user);
  const [account, setAccount] = useState(accountState);
  const dispatch = useAppDispatch();
  const favoritesState = useAppSelector(
    (state: any) => state.account.favorites.favoritesNutritions
  );
  const [checkFavorites, setCheckFavorites] = useState(
    account.favoritesNutritions?.includes(food.id)
  );

  useEffect(() => {
    setAccount(accountState);
    setCheckFavorites(favoritesState?.map((f: any) => f.id).includes(food.id));
  }, [favoritesState]);

  useEffect(() => {
    setAccount(accountState);
  }, [accountState]);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("NutritionDetails", { nutrition: food })
      }
      key={food.id}
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
              uri: imageUrl + food.image,
              headers: {
                Cookie: "payload-token=" + account.token,
              },
            }}
            contentFit="cover"
          />
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
        </View>
        <View style={styles.textContainer}>
          <Text
            style={{
              ...regularText,
              color: theme.primaryTextColor,
            }}
          >
            {food.titles[translation[1].language]}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() =>
              checkFavorites
                ? deleteFavoriteNutrition(food.id, dispatch)
                : addFavoriteNutrition(food.id, dispatch)
            }
          >
            <Ionicons
              name={checkFavorites ? "heart" : "heart-outline"}
              size={20}
              color={
                checkFavorites ? theme.primaryColor : theme.primaryTextColor
              }
            />
          </TouchableOpacity>
          <Text
            style={{
              ...smallText,
              color: theme.primaryTextColor,
              position: "absolute",
              marginLeft: 2,
              width: 30,
              top: 30,
            }}
          >
            {food.duration} m
          </Text>
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

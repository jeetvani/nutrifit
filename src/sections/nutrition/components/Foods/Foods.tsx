import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import { Image } from "expo-image";
import {
  grayText,
  primaryColor,
  regularText,
  secundaryColor,
  shadow,
  mediumText,
  imageUrl,
  smallText,
} from "../../../../utils/constants";
import { useTheme } from "../../../../utils/theme";
import { loadFonts } from "../../../../utils/fonts";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { addFavoriteNutrition } from "../../../../api/services/Favorites";
import Food from "./Food";

interface Props {
  nutrition: {
    id: string;
    image: string;
    titles: any;
    ingredients: object[];
    steps: object[];
    kcal: number;
  }[];
}

export default function Foods(props: Props) {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const theme = useTheme();
  const account = useAppSelector((state) => state.account.user as any);

  return (
    <View style={styles.container}>
      {props.nutrition.map((food) => (
        <Food food={food} />
      ))}
    </View>
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

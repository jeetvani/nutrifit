import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "../../../utils/theme";
import FavSquare from "./components/FavSquare";
import { subTitleText } from "../../../utils/constants";
import { useAppSelector } from "../../../redux/store";
import { useTranslation } from "react-i18next";
export default function FoodsFav() {
  const theme = useTheme();
  const { t } = useTranslation();
  const favoritesState = useAppSelector(
    (state: any) => state.account.favorites.favoritesNutritions
  );
  const [favorites, setFavorites] = useState(favoritesState);

  useEffect(() => {
    setFavorites(favoritesState);
  }, [favoritesState]);

  return (
    <ScrollView
      style={{
        backgroundColor: theme.backgroundColor,
        flex: 1,
      }}
    >
      <View
        style={{
          marginTop: 15,
          backgroundColor: theme.backgroundColor,
          flex: 1,
          width: "96%",
          alignSelf: "center",
        }}
      >
        {favorites?.map((favorite: any) => (
          <FavSquare data={favorite} type={"nutrition"} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleText: { marginTop: 15, marginLeft: 10, ...subTitleText },
});

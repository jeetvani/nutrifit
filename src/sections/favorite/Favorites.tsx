import { StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect, useState, useTransition } from "react";
import MenuBar from "../../components/menuBar/MenuBar";
import { useTheme } from "../../utils/theme";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getDefaultTrainings } from "../../api/services/Trainings";
import FoodsFav from "./screens/FoodsFav";
import TrainingsFav from "./screens/TrainingsFav";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Constants from "expo-constants";
import * as Device from "expo-device";
import { useTranslation } from "react-i18next";
import { getFavorites } from "../../api/services/Favorites";

const TabTop = createMaterialTopTabNavigator();
function MyTabs() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <TabTop.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.primaryTextColor,
        tabBarLabelStyle: { fontSize: 13, fontWeight: "bold" },
        tabBarStyle: {
          backgroundColor: theme.backgroundColor,
        },

        tabBarIndicatorStyle: {
          backgroundColor: theme.primaryColor,
        },
      }}
    >
      <TabTop.Screen name={t("Favorites:Training")} component={TrainingsFav} />
      <TabTop.Screen name={t("Favorites:Foods")} component={FoodsFav} />
    </TabTop.Navigator>
  );
}
export default function Favorites() {
  const theme = useTheme();
  const [refresh, setRefresh] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView
      style={{
        ...styles.screenContainer,
        backgroundColor: theme.backgroundColor,
        paddingTop: Device.osName == "Android" ? Constants.statusBarHeight : 0,
      }}
    >
      <MenuBar back={true} />
      <MyTabs />
    </SafeAreaView>
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
  centerContainer: { width: "92%", alignSelf: "center", marginBottom: "10%" },
});

import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import MenuBar from "../../components/menuBar/MenuBar";
import { subTitleText, titleText } from "../../utils/constants";
import { useTheme } from "../../utils/theme";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { initializeData } from "../../api/services/Auth";
import { getDefaultTrainings } from "../../api/services/Trainings";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AboutMeScreen from "./screens/AboutMeScreen";
import ProductScreen from "./screens/ProductScreen";

import { useTranslation } from "react-i18next";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const TabTop = createMaterialTopTabNavigator();
import Constants from "expo-constants";
import * as Device from "expo-device";

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
      <TabTop.Screen name={t("Tribu:About_Me")} component={AboutMeScreen} />
      <TabTop.Screen name={t("Tribu:Product")} component={ProductScreen} />
    </TabTop.Navigator>
  );
}
export default function Tribu() {
  const theme = useTheme();
  const [refresh, setRefresh] = useState(false);
  const dispatch = useAppDispatch();

  async function refreshData() {
    setRefresh(true);
    await getDefaultTrainings(dispatch);
    console.info("[Home Screen]: Default Trainings Update");
    setRefresh(false);
  }

  useEffect(() => {
    refreshData();
  }, []);
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

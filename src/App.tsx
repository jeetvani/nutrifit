import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useRef, useState } from "react";
import Home from "./sections/home/Home";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Nutrition from "./sections/nutrition/Nutrition";
import { useTheme } from "./utils/theme";
import Account from "./sections/account/Account";
import BottomBarButton from "./sections/account/BottomBarButton";
import { shadow, shadowInverse } from "./utils/constants";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import * as Device from "expo-device";
import { useTranslation } from "react-i18next";

const Tab = createBottomTabNavigator();

export default function App() {
  const theme = useTheme();
  const moreButton = useRef<any | null>(null);
  const { t } = useTranslation();
  const navigation = useNavigation();
  navigation.addListener("state", () => {
    closeButton();
  });
  const closeButton = () => {
    moreButton.current?.close();
  };

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: theme.backgroundColor,
      }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: theme.primaryColor,
          tabBarInactiveTintColor: theme.secundaryTextColor,
          tabBarStyle: {
            backgroundColor: theme.backgroundColor,
            borderTopColor: theme.backgroundColor,
            shadowColor: theme.secundaryTextColor,
            ...shadowInverse,
          },
          tabBarItemStyle:
            Device.osName == "Android" ? { marginBottom: 10 } : null,
        })}
      >
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                style={{ marginTop: 5 }}
                name={focused ? "flash" : "flash-outline"}
                size={20}
                color={focused ? theme.primaryColor : theme.secundaryTextColor}
              />
            ),
          }}
          name={t("AppManager:entrenos")}
          component={Home}
        />
        <Tab.Screen
          options={({ navigation }) => ({
            headerShown: false,
            tabBarButton: (props) => (
              <BottomBarButton navigation={navigation} ref={moreButton} />
            ),
          })}
          name="Account"
          component={Account}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                style={{ marginTop: 5 }}
                name={focused ? "food-apple" : "food-apple-outline"}
                size={20}
                color={focused ? theme.primaryColor : theme.secundaryTextColor}
              />
            ),
          }}
          name={t("AppManager:Nutricion")}
          component={Nutrition}
        />
      </Tab.Navigator>
    </View>
  );
}

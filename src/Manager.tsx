import React, { useEffect, useState } from "react";
import { initializeData, refreshToken } from "./api/services/Auth";
import Auth from "./sections/auth/Auth";
import { ACCOUNT_INITIAL_VALUE } from "./redux/features/account/accountSlice";
import ChargeScreen from "./components/loading/ChargeScreen";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { ThemeContext, themes, useTheme } from "./utils/theme";
import Load from "./components/load/Load";
import { LoadContext, loads } from "./utils/load";
import App from "./App";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TrainingSign from "./sections/training/TrainingSign";
import { NavigationContainer } from "@react-navigation/native";
import NutritionDetails from "./sections/nutrition/screens/nutritionDetails/NutritionDetails";
import TrainingFlow from "./sections/training/TrainingFlow";
import Tribu from "./sections/tribu/Tribu";
import AccountFlow from "./sections/account/AccountFlow";
import { I18nextProvider } from "react-i18next";
import translate from "./translate/translate";
import Favorites from "./sections/favorite/Favorites";
import { changeLanguage } from "i18next";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { shadow } from "./utils/constants";

export default function Manager() {
  const dispatch = useAppDispatch();
  const accountState: any = useAppSelector((state) => state.account);
  const themeState = useAppSelector(
    (state) => state.app.theme as "light" | "dark"
  );
  const loadState = useAppSelector(
    (state) => state.app.load as "noLoad" | "load"
  );
  const languageState = useAppSelector(
    (state) => state.app.language as "es" | "pr" | "en"
  );

  const [theme, setTheme] = useState(themes[themeState]);
  const [load, setLoad] = useState(loads[loadState]);

  const [user, setUser] = useState(accountState.user);

  const toastConfig = {
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: theme.primaryColor,
          backgroundColor: theme.backgroundColor,
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          color: theme.primaryTextColor,
          fontSize: 15,
          fontWeight: "400",
        }}
      />
    ),
    error: (props: any) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: "red",
          backgroundColor: theme.backgroundColor,
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          color: theme.primaryTextColor,
          fontSize: 15,
          fontWeight: "400",
        }}
      />
    ),
  };

  useEffect(() => {
    initializeData(dispatch);
    refreshToken();
  }, []);

  useEffect(() => {
    setTheme(themes[themeState]);
    setLoad(loads[loadState]);
  }, [themeState, loadState]);

  useEffect(() => {
    changeLanguage(languageState);
  }, [languageState]);

  useEffect(() => {
    setUser(accountState.user as any);
  }, [accountState]);

  const Stack = createNativeStackNavigator();

  return (
    <ThemeContext.Provider value={theme}>
      <LoadContext.Provider value={load}>
        {(() => {
          if (!user) {
            return <Auth />;
          } else if (user === ACCOUNT_INITIAL_VALUE) {
            return <ChargeScreen />;
          } else {
            return (
              <NavigationContainer>
                <Stack.Navigator
                  screenOptions={{ headerShown: false }}
                  initialRouteName="App"
                >
                  <Stack.Screen
                    name="App"
                    component={App}
                    options={{
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name="NutritionDetails"
                    component={NutritionDetails}
                    options={{
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="TrainingSign"
                    component={TrainingSign}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="TrainingFlow"
                    component={TrainingFlow}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="Tribu"
                    component={Tribu}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="AccountFlow"
                    component={AccountFlow}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="Favorites"
                    component={Favorites}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            );
          }
        })()}
        <Load />
        <Toast config={toastConfig} />
      </LoadContext.Provider>
    </ThemeContext.Provider>
  );
}

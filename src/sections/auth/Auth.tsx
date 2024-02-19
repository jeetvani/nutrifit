import { View, Text } from "react-native";
import React, { createContext, useReducer, useState } from "react";
import Login from "./Login";
import { grayText, principalColor, regularText } from "../../utils/constants";
import Register from "./Register";
import { ThemeContext, useTheme } from "../../utils/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import StepFive from "./steps/StepFive";
import StepSix from "./steps/StepSix";
import StepSeven from "./steps/StepSeven";
import StepEight from "./steps/StepEight";
import { useTranslation } from "react-i18next";
import { AuthContext } from "./AuthContext";

const initialState = {
  name: "",
  last_name: "",
  user_name: "",
  sex: "",
  birth_day: "",
  height: "",
  weight: "",
  objetive: "",
  steps: "",
  training_days: "",
  level: "",
  place: "",
  email: "",
  password: "",
};

export default function Auth() {
  const [newUser, setUser] = useState(initialState);
  const [section, setSection] = useState("login");
  const theme = useTheme();
  const { t } = useTranslation();
  const Stack = createNativeStackNavigator();
  return (
    <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      {section == "login" ? (
        <Login section={section} setSection={setSection} />
      ) : (
        <AuthContext.Provider value={{ newUser, setUser }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                options={{ headerShown: false }}
                name="Register"
                component={Register}
                initialParams={{ section: section, setSection: setSection }}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="StepOne"
                component={StepOne}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="StepTwo"
                component={StepTwo}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="StepThree"
                component={StepThree}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="StepFour"
                component={StepFour}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="StepFive"
                component={StepFive}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="StepSix"
                component={StepSix}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="StepSeven"
                component={StepSeven}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="StepEight"
                component={StepEight}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </AuthContext.Provider>
      )}
    </View>
  );
}

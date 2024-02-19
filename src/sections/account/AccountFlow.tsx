import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "./Account";
import MetabolicProfile from "./accountScreens/MetabolicProfile";
import Aim from "./accountScreens/Aim";
import WeightControl from "./accountScreens/WeightControl";
import ProfileTraining from "./accountScreens/profileTraining/ProfileTraining";
import ContactHelp from "./accountScreens/ContactHelp";
import CustomizeApp from "./accountScreens/CustomizeApp";
import EmailChange from "./accountScreens/UserAccount/EmailChange";
import NameAlias from "./accountScreens/UserAccount/NameAlias";
import PasswordChange from "./accountScreens/UserAccount/PasswordChange";
import TypeDiet from "./accountScreens/nutritionPreference/TypeDiet";
import MyFoods from "./accountScreens/nutritionPreference/MyFoods";
import Protein from "./accountScreens/nutritionPreference/Protein";
import Eating from "./accountScreens/nutritionPreference/Eating";
import Alergenos from "./accountScreens/nutritionPreference/Alergenos";
import CanceledRecipes from "./accountScreens/nutritionPreference/CanceledRecipes";
import CanceledFood from "./accountScreens/nutritionPreference/CanceledFood";
import { SafeAreaView } from "react-native";
import { useTheme } from "../../utils/theme";
import ProfileFlow from "./accountScreens/profileTraining/ProfileFlow";
import Constants from "expo-constants";
import * as Device from "expo-device";

const Stack = createStackNavigator();

export default function AccountFlow() {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor,
        overflow: "visible",
        paddingTop: Device.osName == "Android" ? Constants.statusBarHeight : 0,
      }}
    >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="account"
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="account"
          component={Account}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="metabolicProfile"
          component={MetabolicProfile}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="aim"
          component={Aim}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="weightControl"
          component={WeightControl}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="profileFlow"
          component={ProfileFlow}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="customizeApp"
          component={CustomizeApp}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="emailChange"
          component={EmailChange}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="nameAlias"
          component={NameAlias}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="passwordChange"
          component={PasswordChange}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="myFoods"
          component={MyFoods}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="protein"
          component={Protein}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="eating"
          component={Eating}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="alergenos"
          component={Alergenos}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="canceledRecipes"
          component={CanceledRecipes}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="canceledFood"
          component={CanceledFood}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

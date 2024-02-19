import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TrainingContext } from "../../context/trainingContext";
import { useAppSelector } from "../../redux/store";
import TrainingSign from "./TrainingSign";
import TrainingStart from "./trainingStart/TrainingStart";
import TrainingDetails from "./trainingScreens/training/TrainingDetails";
import GroupTrainingDetails from "./trainingScreens/groupTraining/GroupTrainingDetails";
import TrainingFinish from "./trainingStart/TrainingFinish";
import StripWar from "./trainingScreens/warning/StripWar";
export default function TrainingFlow({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const Stack = createNativeStackNavigator();
  const accountState = useAppSelector((state) => state.account.user as any);
  const [account, setAccount] = useState(accountState);
  useEffect(() => {
    setAccount(accountState);
  }, [accountState]);

  return (
    <View style={{ width: "100%", flex: 1, backgroundColor: "#000" }}>
      <TrainingContext.Provider
        value={{
          ...route.params.training,
          typeScreen: route.params.typeScreen,
        }}
      >
        <Stack.Navigator initialRouteName="GroupTrainingDetails">
          <Stack.Screen
            name={
              account.premium?.current ? "GroupTrainingDetails" : "TrainingSign"
            }
            component={
              account.premium?.current ? GroupTrainingDetails : TrainingSign
            }
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TrainingDetails"
            component={TrainingDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TrainingStart"
            component={TrainingStart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TrainingFinish"
            component={TrainingFinish}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StripWar"
            component={StripWar}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </TrainingContext.Provider>
    </View>
  );
}

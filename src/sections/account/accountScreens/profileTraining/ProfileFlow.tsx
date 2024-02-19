import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileTraining from "./ProfileTraining";
import TrainingPlace from "./components/TrainingPlace";
import Intensity from "./components/Intensity";
import WeightLevel from "./components/WeightLevel";
import TimeOfDay from "./components/TimeOfDay";
import Duration from "./components/Duration";
import MuscleGroups from "./components/MuscleGroups";
import Skill from "./components/Skill";
import TrainingDays from "./components/TrainingDays";
import CoachGender from "./components/CoachGender";
const Stack = createStackNavigator();

export default function ProfileFlow() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="profileTraining"
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="profileTraining"
        component={ProfileTraining}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="trainingPlace"
        component={TrainingPlace}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="intensity"
        component={Intensity}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="weightLevel"
        component={WeightLevel}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="timeOfDay"
        component={TimeOfDay}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="duration"
        component={Duration}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="muscleGroups"
        component={MuscleGroups}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="skill"
        component={Skill}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="trainingDays"
        component={TrainingDays}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="coachGender"
        component={CoachGender}
      />
    </Stack.Navigator>
  );
}

import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import MenuBar from "../../components/menuBar/MenuBar";
import { shadow, subTitleText, titleText } from "../../utils/constants";
import Slider from "./components/slider/Slider";
import Calendar from "./components/calendar/Calendar";
import { useTheme } from "../../utils/theme";
import Training from "./components/userTrainings/components/Training";
import Recommendeds from "./components/recommended/Recommendeds";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getAccount, initializeData } from "../../api/services/Auth";
import { Ionicons } from "@expo/vector-icons";
import {
  getDefaultTrainings,
  getUserTrainings,
} from "../../api/services/Trainings";
import UserTrainings from "./components/userTrainings/UserTrainings";
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import Constants from "expo-constants";
import * as Device from "expo-device";
import { getNutrition } from "../../api/services/Nutrition";
import { getFavorites } from "../../api/services/Favorites";

export default function Home() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [refresh, setRefresh] = useState(true);
  const dispatch = useAppDispatch();

  async function refreshDataAwait() {
    setRefresh(true);
    await getAccount(dispatch);
    await getDefaultTrainings(dispatch);
    await getUserTrainings(dispatch);
    await getNutrition(dispatch);
    await getFavorites(dispatch);
    setRefresh(false);
  }

  async function refreshData() {
    setRefresh(true);
    getAccount(dispatch);
    getNutrition(dispatch);
    getUserTrainings(dispatch);
    getDefaultTrainings(dispatch);
    getFavorites(dispatch);
    setRefresh(false);
  }

  async function refreshAwaitData() {
    setRefresh(true);
    getAccount(dispatch);
    getNutrition(dispatch);
    await getUserTrainings(dispatch);
    await getDefaultTrainings(dispatch);
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
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
          refreshControl={
            <RefreshControl
              onRefresh={() => refreshAwaitData()}
              refreshing={refresh}
              tintColor={theme.primaryColor}
            />
          }
        >
          <MenuBar />
          <View style={styles.centerContainer}>
            <Calendar />
            <UserTrainings />
            <Recommendeds />
          </View>
        </ScrollView>
      </View>
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

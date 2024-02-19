import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { subTitleText, regularText } from "../../../utils/constants";
import { useTheme } from "../../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import * as Device from "expo-device";
import { getAccount } from "../../../api/services/Auth";
import {
  getDefaultTrainings,
  getUserTrainings,
} from "../../../api/services/Trainings";
import { useAppDispatch } from "../../../redux/store";
import { setLoad } from "../../../redux/features/app/appSlice";
import { useTranslation } from "react-i18next";

const date = [{ time: 20, exercise: "core" }];

export default function TrainingFinish() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const Dates = date[0];
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        ...styles.screenContainer,
        backgroundColor: theme.backgroundColor,
        paddingTop: Device.osName == "Android" ? Constants.statusBarHeight : 0,
      }}
    >
      <View style={styles.centerContainer}>
        <View
          style={{
            ...styles.circle,
            backgroundColor: theme.primaryOpacityColorTwo,
          }}
        >
          <Entypo
            name="check"
            size={50}
            color={theme.primaryColor}
            style={{ alignSelf: "center" }}
          />
        </View>
        <Text
          style={{
            ...styles.titleText,
            color: theme.primaryColor,
          }}
        >
          {t("TrainingFinish:Well_done")}!
        </Text>
        <Text style={{ ...styles.subTex, color: theme.secundaryTextColor }}>
          {t("TrainingFinish:You_have_completed_the_training")}
        </Text>
      </View>

      <View
        style={{
          marginTop: "auto",
          width: "100%",
          height: 120,
          backgroundColor: theme.backgroundColor,
          shadowColor: theme.shadowColor,
        }}
      >
        <TouchableOpacity
          onPress={async () => {
            dispatch(setLoad("load"));
            await getUserTrainings(dispatch);
            dispatch(setLoad("no-load"));
            navigation.reset({ index: 0, routes: [{ name: "App" }] });
          }}
          style={{
            ...styles.buttomContainer,
            backgroundColor: theme.primaryColor,
            shadowColor: theme.shadowColor,
          }}
        >
          <Text
            style={{
              ...subTitleText,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {t("TrainingFinish:Continuar")}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
  },
  centerContainer: { width: "92%" },
  circle: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginTop: 60,
    borderRadius: 50,
    justifyContent: "center",
  },

  titleText: {
    fontSize: 35,
    fontFamily: "Avenir",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 25,
  },
  subTex: {
    alignSelf: "center",
    textAlign: "center",
    ...regularText,
    width: "70%",
  },

  buttomContainer: {
    justifyContent: "center",
    width: "90%",
    height: 50,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 15,
  },
});

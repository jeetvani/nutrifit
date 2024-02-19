import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import MenuBar from "../../components/menuBar/MenuBar";
import {
  subTitleText,
  titleText,
  mediumText,
  grayText,
  regularText,
  smallText,
} from "../../utils/constants";

import { useTheme } from "../../utils/theme";
import Food from "./components/Foods/Foods";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { getNutrition } from "../../api/services/Nutrition";
import Constants from "expo-constants";
import * as Device from "expo-device";

export default function Nutrition() {
  const theme = useTheme();
  const { t } = useTranslation();
  const nutritionState = useAppSelector(
    (state: any) => state.nutrition.nutrition
  );
  const [nutrition, setNutrition] = useState(nutritionState);
  const accountState = useAppSelector((state) => state.account.user as any);
  const [user, setUser] = useState(accountState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setNutrition(nutritionState);
  }, [nutritionState]);

  useEffect(() => {
    setUser(accountState);
  }, [accountState]);

  return (
    <SafeAreaView
      style={{
        ...styles.screenContainer,
        backgroundColor: theme.backgroundColor,
        paddingTop: Device.osName == "Android" ? Constants.statusBarHeight : 0,
      }}
    >
      <View style={styles.container}>
        {nutrition ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              width: "100%",
            }}
          >
            <MenuBar />
            <View style={styles.centerContainer}>
              <>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      ...smallText,
                      color: theme.secundaryTextColor,
                      marginTop: 10,
                      marginLeft: "auto",
                    }}
                  >
                    {t("Nutrition:Recomendadas")}: {user.kcal} Kcal
                  </Text>
                </View>
                <Text
                  style={{
                    ...subTitleText,
                    color: theme.primaryTextColor,
                    marginTop: 7,
                  }}
                >
                  {t("Nutrition:Desayuno")}
                </Text>
                <Food nutrition={nutrition.breakfast} />
                <Text
                  style={{
                    ...subTitleText,
                    color: theme.primaryTextColor,
                    marginTop: 5,
                  }}
                >
                  {t("Nutrition:Lunch")}
                </Text>
                <Food nutrition={nutrition.lunch} />
                <Text
                  style={{
                    ...subTitleText,
                    color: theme.primaryTextColor,
                    marginTop: 5,
                  }}
                >
                  {t("Nutrition:Merienda")}
                </Text>
                <Food nutrition={nutrition.snack} />
                <Text
                  style={{
                    ...subTitleText,
                    color: theme.primaryTextColor,
                    marginTop: 5,
                  }}
                >
                  {t("Nutrition:Cena")}
                </Text>
                <Food nutrition={nutrition.dinner} />
              </>
            </View>
          </ScrollView>
        ) : (
          <View
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
              width: "70%",
            }}
          >
            <Text
              style={{ textAlign: "center", color: theme.primaryTextColor }}
            >
              {t("Nutrition:Subscribase_al_plan")}
            </Text>
          </View>
        )}
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
  title: { ...titleText, marginTop: 10 },
  subTitleNum: { ...mediumText, color: "#fff", marginLeft: 10 },
  titleFoods: {
    ...titleText,
    marginTop: 25,
    marginLeft: 5,
  },
  centerContainer: { width: "92%", alignSelf: "center", marginBottom: "5%" },
});

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
  Animated,
  ViewToken,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Training from "./training/Training";
import {
  primaryColor,
  principalColor,
  regularText,
  secundaryColor,
  smallText,
} from "../../../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../../utils/theme";
import { useTranslation } from "react-i18next";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  const trainingState = useAppSelector(
    (state) => state.trainings.defaultTrainings
  );
  const [data, setData] = useState(trainingState);
  const theme = useTheme();

  useEffect(() => {
    setData(trainingState);
  }, [trainingState]);

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          horizontal
          style={styles.list}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            setCurrentIndex(
              Math.round(event.nativeEvent.contentOffset.x / 360)
            );
          }}
        >
          {data.length > 0 ? (
            data.map((training) => <Training data={training}></Training>)
          ) : (
            <View
              style={{
                height: 300,
                width: Dimensions.get("screen").width * 0.92,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ ...regularText, color: theme.primaryTextColor }}>
                {t("Slider:No_contamos_con_entrenamientos_para_ti")}
              </Text>
              <Text style={{ ...smallText, color: theme.primaryTextColor }}>
                {t("Slider:No_contamos")}
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 15,
  },
  list: {
    width: "100%",
    flexDirection: "row",
    overflow: "visible",
  },
});

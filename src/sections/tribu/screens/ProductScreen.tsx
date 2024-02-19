import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useEffect, useState } from "react";
import { subTitleText, titleText, regularText } from "../../../utils/constants";
import { useTheme } from "../../../utils/theme";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import { LinearGradient } from "expo-linear-gradient";

export default function AboutMeScreen() {
  const theme = useTheme();
  const { t } = useTranslation();
  const [refresh, setRefresh] = useState(false);
  const dispatch = useAppDispatch();

  async function refreshData() {
    setRefresh(true);

    setRefresh(false);
  }

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <View
      style={{
        ...styles.screenContainer,
        backgroundColor: theme.backgroundColor,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", flex: 1 }}
        refreshControl={
          <RefreshControl
            onRefresh={() => refreshData()}
            refreshing={refresh}
            tintColor={theme.primaryColor}
          />
        }
      >
        <View style={styles.centerContainer}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://srnutrifit.com")}
            style={{
              ...styles.imageContainer,
              shadowColor: theme.primaryColor,
            }}
          >
            <Image
              style={{
                ...styles.image,
              }}
              source={require("../../../assets/PlanPremium.jpeg")}
              contentFit="cover"
            />
            <LinearGradient
              start={{ x: 0, y: 3.5 }}
              end={{ x: 2, y: 0.8 }}
              colors={[
                "rgba(0,0,0,0.8)",
                "rgba(0,0,0,0.8)",
                "rgba(0,0,0,0.9)",
                "rgba(0,0,0,0)",
              ]}
              style={{ ...StyleSheet.absoluteFillObject }}
            />
            <Text
              style={{
                ...styles.textOverlay,
                ...titleText,
                color: theme.primaryColor,
                fontSize: 25,
              }}
            >
              {t("Tribu:Plan") + " PREMIUM"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
  centerContainer: {
    width: "92%",
    alignSelf: "center",
    marginBottom: "10%",
    marginTop: "5%",
  },
  imageContainer: {
    height: 600,
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 0.8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imagecircle: {
    height: 250,
    width: "100%",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 20,
    overflow: "hidden",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 0.8,
  },
  imagetwo: {
    width: "100%",
    height: "100%",
  },
  textOverlay: {
    position: "absolute",
    bottom: 20,
    left: 10,
    width: "50%",
    textAlign: "center",
  },
  textOverlaytwo: {
    position: "absolute",
    top: "25%",
    bottom: 0,
    left: 10,
    width: "30%",
    textAlign: "center",
  },
});

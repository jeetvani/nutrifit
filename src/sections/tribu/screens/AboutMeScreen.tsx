import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { titleText, regularText } from "../../../utils/constants";
import { useTheme } from "../../../utils/theme";
import { Image } from "expo-image";
import { EvilIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

export default function AboutMeScreen() {
  const theme = useTheme();
  const [refresh, setRefresh] = useState(false);
  const { t } = useTranslation();

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
        <View style={styles.imageContainer}>
          <Image
            style={{
              ...styles.image,
            }}
            source={require("../../../assets/Presentation.jpeg")}
            contentFit="cover"
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignSelf: "center",
            marginTop: 15,
            width: "90%",
          }}
        >
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...titleText,
                color: theme.primaryTextColor,
              }}
            >
              SR Nutrifit
            </Text>

            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://youtube.com/@SRNutriFit?si=E2y9FV_rImgjBXQC"
                )
              }
              style={{ marginLeft: 10 }}
            >
              <EvilIcons
                name="sc-youtube"
                size={35}
                color={theme.primaryColor}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              marginTop: 15,
              ...regularText,
              marginBottom: 50,
              color: theme.primaryTextColor,
            }}
          >
            {t("Tribu:Presentation")}
          </Text>
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

  imageContainer: {
    height: 500,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imagecircle: {
    height: 170,
    width: 170,
    top: -90,
    left: 30,
    borderRadius: 100,
    overflow: "hidden",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  imagetwo: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  containerPrincipal: {
    with: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
  },
});

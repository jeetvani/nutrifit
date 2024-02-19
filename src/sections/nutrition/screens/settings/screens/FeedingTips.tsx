import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  subTitleText,
  mediumText,
  secundaryColor,
  regularText,
  shadow,
} from "../../../../../utils/constants";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import MenuBar from "../../../../../components/menuBar/MenuBar";
import { useTheme } from "../../../../../utils/theme";
import Constants from "expo-constants";
import * as Device from "expo-device";

export default function FeedingTips() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <SafeAreaView
      style={{
        ...styles.screenContainer,
        backgroundColor: theme.backgroundColor,
        paddingTop: Device.osName == "Android" ? Constants.statusBarHeight : 0,
      }}
    >
      <MenuBar />
      <View style={styles.container}>
        <View
          style={{
            ...styles.topBar,
            backgroundColor: theme.backgroundColor,
          }}
        >
          <TouchableOpacity style={styles.arrow}>
            <AntDesign
              name="arrowleft"
              size={24}
              color={theme.primaryTextColor}
            />
          </TouchableOpacity>

          <View style={{ position: "absolute", alignSelf: "center" }}>
            <Text
              style={{
                ...subTitleText,
                fontSize: 16,
                color: theme.primaryTextColor,
                fontWeight: "400",
                shadowColor: theme.shadowColor,
              }}
            >
              {t("FeedingTips:Tips_para_una_alimentación_saludable")}
            </Text>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.centerContainer}
        >
          <Text
            style={{
              ...regularText,
              marginTop: 12,
              color: theme.secundaryTextColor,
            }}
          >
            {t(
              "FeedingTips:El_tip_más_importante_es_que_generes_una_relación_sana"
            )}
          </Text>
          <Text
            style={{
              ...subTitleText,
              ...styles.title,
              color: theme.primaryTextColor,
            }}
          >
            {t("FeedingTips:Planifica_tus_comidas")}
          </Text>
          <Text
            style={{
              ...styles.text,
              ...regularText,
              color: theme.secundaryTextColor,
            }}
          >
            {t("FeedingTips:Te_ayuda_a_mantener_una_alimentacion_saludable")}
          </Text>
          <Text
            style={{
              ...subTitleText,
              ...styles.title,
              color: theme.primaryTextColor,
            }}
          >
            {t("FeedingTips:Come_porciones_adecuadas")}
          </Text>
          <Text
            style={{
              ...styles.text,
              ...regularText,
              color: theme.secundaryTextColor,
            }}
          >
            {t("FeedingTips:Evita_comer_en_exceso")}
          </Text>
          <Text
            style={{
              ...subTitleText,
              ...styles.title,
              color: theme.primaryTextColor,
            }}
          >
            {t("FeedingTips:Limita_el_consumo_de_alimentos_procesados")}
          </Text>
          <Text
            style={{
              ...styles.text,
              ...regularText,
              color: theme.secundaryTextColor,
            }}
          >
            {t("FeedingTips:Contienen_altas_cantidades_de_azúcares_grasas")}
          </Text>
          <Text
            style={{
              ...subTitleText,
              ...styles.title,
              color: theme.primaryTextColor,
            }}
          >
            {t("FeedingTips:Bebe_suficiente_agua")}
          </Text>
          <Text
            style={{
              ...styles.text,
              ...regularText,
              color: theme.secundaryTextColor,
            }}
          >
            {t(
              "FeedingTips:El_agua_es_esencial_para_mantener_el_cuerpo_hidratado"
            )}
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  topBar: {
    width: "100%",

    justifyContent: "center",
    height: 65,
    flexDirection: "column",
    ...shadow,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  centerContainer: { width: "92%" },
  title: { marginTop: 25 },
  subTitle: { ...subTitleText, marginTop: 5 },
  containerTitle: {
    backgroundColor: secundaryColor,
    width: "100%",

    borderRadius: 10,
    display: "flex",

    alignItems: "center",
    flexDirection: "row",
  },
  titleTop: {
    marginLeft: 25,
    marginBottom: 5,
  },
  arrow: {
    marginLeft: 20,
    width: 24,
    height: 24,
  },
  questions: { marginLeft: "auto", marginTop: 25, marginRight: 20 },

  text: {
    marginTop: 5,
  },
});

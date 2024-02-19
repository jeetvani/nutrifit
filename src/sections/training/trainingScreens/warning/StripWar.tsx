import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { subTitleText, shadow, titleText } from "../../../../utils/constants";
import { useTheme } from "../../../../utils/theme";
import * as Device from "expo-device";
import { StripeProvider, useStripe } from "@stripe/stripe-react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { getPaymentIntent } from "../../../../api/services/Plans";
import { useAppDispatch } from "../../../../redux/store";
import { setLoad } from "../../../../redux/features/app/appSlice";

export default function NameAlias({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const theme = useTheme();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const fetchPaymentSheetParams = async () => {
    const { paymentIntent, ephemeralKey, customer } = await getPaymentIntent();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey: process.env.EXPO_PUBLIC_STRIPE_PUBLIC_KEY as string,
    };
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      allowsDelayedPaymentMethods: true,
    });
    if (!error) {
      dispatch(setLoad("no-load"));
    }
  };

  const navigatione = useNavigation();
  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "Your order is confirmed!");
      navigation.reset({ index: 0, routes: [{ name: "App" }] });
    }
  };

  useEffect(() => {
    dispatch(setLoad("load"));
    initializePaymentSheet();
  }, []);
  return (
    <StripeProvider
      publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLIC_KEY as string}
    >
      <SafeAreaView
        style={{
          ...styles.screenContainer,
          backgroundColor: theme.backgroundColor,
          paddingTop:
            Device.osName == "Android" ? Constants.statusBarHeight : 0,
        }}
      >
        <TouchableOpacity
          onPress={() => navigatione.goBack()}
          style={styles.arrow}
        >
          <AntDesign name="close" size={32} color={theme.primaryTextColor} />
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.centerContainer}>
            <View style={styles.columnContainer}>
              <Text
                style={{
                  ...titleText,
                  color: theme.primaryColor,
                }}
              >
                {t("StripWar:Contrata_tu_plan")}
              </Text>
              <View style={styles.rowContainer}>
                <Entypo
                  name="controller-record"
                  size={14}
                  color={theme.primaryColor}
                />
                <Text
                  style={{
                    ...styles.textDetails,
                    color: theme.primaryTextColor,
                  }}
                >
                  {t("StripWar:Entrena_conmigo")}
                </Text>
              </View>
              <View style={styles.rowContainer}>
                <Entypo
                  name="controller-record"
                  size={14}
                  color={theme.primaryColor}
                />
                <Text
                  style={{
                    ...styles.textDetails,
                    color: theme.primaryTextColor,
                  }}
                >
                  {t("StripWar:Mis_mejores")}
                </Text>
              </View>
              <View style={styles.rowContainer}>
                <Entypo
                  name="controller-record"
                  size={14}
                  color={theme.primaryColor}
                />
                <Text
                  style={{
                    ...styles.textDetails,
                    color: theme.primaryTextColor,
                  }}
                >
                  {t("StripWar:Plan_de_nutricion")}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => openPaymentSheet()}
              style={{
                ...styles.buttomContainer,
                backgroundColor: theme.primaryColor,
                shadowColor: theme.shadowColor,
              }}
            >
              <Text
                style={{
                  ...styles.keepContainer,
                }}
              >
                {t("StripWar:Suscribirse")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </StripeProvider>
  );
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centerContainer: { width: "92%" },
  titleText: {
    fontFamily: "Avenir",
    fontWeight: "bold",
  },
  columnContainer: {
    flexDirection: "column",
    marginTop: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: "92%",
  },
  arrow: {
    marginRight: 15,
    marginLeft: "auto",
    marginTop: 25,
  },

  buttomContainer: {
    justifyContent: "center",
    width: "90%",
    height: 50,
    alignSelf: "center",
    ...shadow,
    marginTop: 60,
    borderRadius: 15,
  },
  keepContainer: {
    alignSelf: "center",
    ...subTitleText,
    fontWeight: "bold",
    color: "white",
  },
  textDetails: {
    ...subTitleText,
    marginLeft: 10,
  },
});

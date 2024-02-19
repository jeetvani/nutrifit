import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../../../utils/theme";
import {
  imageUrl,
  mediumText,
  regularText,
  shadow,
  smallText,
  subTitleText,
} from "../../../../utils/constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { Image } from "expo-image";
import { useTraining } from "../../../../context/trainingContext";
import { useNavigation } from "@react-navigation/native";
import Training from "./components/Training";
import Constants from "expo-constants";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  createUserTraining,
  deleteUserTraining,
} from "../../../../api/services/Trainings";
import { useTranslation } from "react-i18next";
import {
  addFavoriteTraining,
  deleteFavoriteTraining,
} from "../../../../api/services/Favorites";
import Toast from "react-native-toast-message";

interface Props {
  id: string;
}

export default function GroupTrainingDetails() {
  const theme = useTheme();
  const training: any = useTraining();
  const navigation = useNavigation();
  const translation = useTranslation();
  const t = translation.t;
  const dispatch = useAppDispatch();
  const [splitMenu, setSplitMenu] = useState(false);
  const accountState = useAppSelector((state: any) => state.account.user);
  const favoritesState = useAppSelector(
    (state: any) => state.account.favorites.favoritesTrainings
  );
  const [account, setAccount] = useState(accountState);

  const [checkFavorite, setCheckFavorite] = useState(
    account.favoritesTrainings?.includes(training.id)
  );

  const [favoriteLoad, setFavoriteLoad] = useState(false);

  const [deleteLoad, setDeleteLoad] = useState(false);

  useEffect(() => {
    setAccount(accountState);
    setCheckFavorite(
      favoritesState?.map((f: any) => f.id).includes(training.id)
    );
  }, [favoritesState]);

  useEffect(() => {
    setAccount(accountState);
    console.log("Change");
  }, [accountState]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.backgroundColor,
      }}
    >
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          width: "87%",
          top: Constants.statusBarHeight + 5,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              ...styles.topButton,
              backgroundColor: theme.backgroundColor,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="left" size={20} color={theme.primaryTextColor} />
          </TouchableOpacity>

          <View style={{ marginLeft: "auto", flexDirection: "row" }}>
            {training.typeScreen !== "userTraining" ? (
              <TouchableOpacity
                onPress={async () => {
                  setFavoriteLoad(true);
                  try {
                    checkFavorite
                      ? await deleteFavoriteTraining(training.id, dispatch)
                      : await addFavoriteTraining(training.id, dispatch);
                    setCheckFavorite(!checkFavorite);
                  } catch (error) {}
                  setFavoriteLoad(false);
                }}
                style={{
                  ...styles.topButton,
                  backgroundColor: theme.backgroundColor,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {favoriteLoad ? (
                  <ActivityIndicator size="small" color={theme.primaryColor} />
                ) : (
                  <Ionicons
                    name={checkFavorite ? "heart" : "heart-outline"}
                    size={20}
                    color={
                      checkFavorite
                        ? theme.primaryColor
                        : theme.primaryTextColor
                    }
                  />
                )}
              </TouchableOpacity>
            ) : (
              <View>
                <TouchableOpacity
                  onPress={() => setSplitMenu(!splitMenu)}
                  style={{
                    marginLeft: 2,
                    ...styles.topButton,
                    backgroundColor: theme.backgroundColor,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="ios-ellipsis-vertical"
                    size={20}
                    color={theme.primaryTextColor}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        {splitMenu ? (
          <TouchableOpacity
            onPress={async () => {
              setDeleteLoad(true);
              await deleteUserTraining(training.id, dispatch);
              setDeleteLoad(false);
              navigation.goBack();
            }}
            style={{
              marginLeft: "auto",
              marginTop: 3,
              ...styles.topButton,
              backgroundColor: theme.backgroundColor,
              width: "35%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {deleteLoad ? (
                <ActivityIndicator size="small" color={theme.primaryColor} />
              ) : (
                <Text
                  style={{
                    ...regularText,
                    color: "red",
                  }}
                >
                  {t("Alert:Delete")}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
      <View
        style={{ ...styles.imageContainer, shadowColor: theme.shadowColor }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: imageUrl + training.image,
            headers: {
              Cookie: "payload-token=" + account.token,
            },
          }}
          contentFit="cover"
        />
      </View>
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        style={{
          overflow: "visible",
          width: "100%",
          marginBottom: 50,
          marginTop: -60,
        }}
      >
        <View
          style={{
            ...styles.centerContainer,
            backgroundColor: theme.backgroundColor,
            marginTop: 60,
          }}
        >
          <View
            style={{
              ...styles.principalContainer,
              backgroundColor: theme.backgroundColor,
              borderColor: theme.primaryColor,
              shadowColor: theme.shadowColor,
            }}
          >
            <View style={styles.principalCenterContainer}>
              <Text
                style={{
                  ...regularText,
                  marginTop: 15,
                  color: theme.secundaryTextColor,
                }}
              >
                {t("GroupTrainingDetails:Metodo")}
              </Text>
              <Text
                style={{
                  ...mediumText,
                  color: theme.primaryTextColor,
                  marginTop: 4,
                }}
              >
                {training.titles[translation[1].language]}
              </Text>
              <Text
                style={{
                  ...smallText,
                  color: theme.secundaryColor,
                  fontWeight: "400",
                  marginTop: 4,
                  marginBottom: training.typeScreen == "userTraining" ? 15 : 0,
                }}
              >
                {t("GroupTrainingDetails:Con")} {training.creator} -{" "}
                {training.weeks} {t("GroupTrainingDetails:semanas")}
              </Text>
              {training.typeScreen == "defaultTraining" ? (
                <TouchableOpacity
                  onPress={() =>
                    Alert.alert(
                      training.titles[translation[1].language],
                      t(
                        "TrainingSign:Do_you_want_to_subscribe_to_the_training"
                      ),
                      [
                        {
                          text: t("Alert:Cancel"),
                          style: "destructive",
                        },
                        {
                          text: t("Alert:Subscribe"),
                          style: "default",
                          onPress: async () => {
                            const trainingGroup = training.id;
                            const trainings = training.trainings.map(
                              (t: any) => {
                                const excercises = t.excercises.map(
                                  (e: any) => e.id
                                );
                                return { training: t.id, excercises };
                              }
                            );
                            await createUserTraining(
                              { trainingGroup, trainings },
                              dispatch
                            );
                            Toast.show({
                              type: "success",
                              text1: t("Toast:Subscription"),
                              text2: t(
                                "Toast:Successful_training_subscription"
                              ),
                            });
                            navigation.reset({
                              index: 0,
                              routes: [{ name: "App" as never }],
                            });
                          },
                        },
                      ]
                    )
                  }
                  style={{
                    ...styles.button,
                    marginBottom: 15,
                    backgroundColor: theme.primaryColor,
                  }}
                >
                  <Text
                    style={{
                      ...regularText,
                      fontWeight: "400",
                      color: "white",
                    }}
                  >
                    {t("GroupTrainingDetails:Apuntame")}
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </View>

          <View style={styles.summary}>
            <Text
              style={{
                ...mediumText,
                color: theme.primaryTextColor,
              }}
            >
              {t("GroupTrainingDetails:Resumen_del_programa")}
            </Text>
            <Text
              style={{
                ...regularText,
                fontSize: 12,
                color: theme.secundaryTextColor,
                marginTop: 5,
              }}
            >
              {t("GroupTrainingDetails:Repite_en_su_orden")} {training.days}
              {t("GroupTrainingDetails:entrenos_semanales")} {training.weeks}{" "}
              {t("GroupTrainingDetails:semanas")}
            </Text>
          </View>
          <View style={{ width: "87%", marginTop: 10 }}>
            {training.trainings.map((data: any, index: number) => (
              <Training data={{ ...data, index: index + 1 }}></Training>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    width: "100%",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: Dimensions.get("screen").height * 0.52,
    ...shadow,
  },
  principalContainer: {
    width: "87%",
    borderWidth: 1,
    borderRadius: 20,
    ...shadow,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -60,
  },
  principalCenterContainer: {
    width: "85%",
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: 35,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkTextContainer: {
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: "auto",
    width: "80%",
    alignSelf: "center",
  },
  topButton: {
    width: 45,
    height: 45,
    borderRadius: 10,
    ...shadow,
  },
  summary: {
    width: "85%",
    marginTop: 25,
  },
});

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../../../utils/theme";
import {
  imageUrl,
  mediumText,
  regularText,
  shadow,
} from "../../../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { Image } from "expo-image";

import { useNavigation } from "@react-navigation/native";

import { useTranslation } from "react-i18next";
import Constants from "expo-constants";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  addFavoriteNutrition,
  addFavoriteTraining,
  deleteFavoriteNutrition,
  deleteFavoriteTraining,
} from "../../../../api/services/Favorites";

interface Props {
  id: string;
}

export default function NutritionDetails({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const nutrition = route.params.nutrition;
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const translation = useTranslation();
  const { t } = translation;
  const handleImagePress = () => {
    setModalVisible(!modalVisible);
  };
  const accountState = useAppSelector((state: any) => state.account.user);
  const favoritesState = useAppSelector(
    (state: any) => state.account.favorites.favoritesNutritions
  );
  const [account, setAccount] = useState(accountState);

  const [checkFavorite, setCheckFavorite] = useState(
    account.favoritesNutritions?.includes(nutrition.id)
  );

  const [favoriteLoad, setFavoriteLoad] = useState(false);

  useEffect(() => {
    setAccount(accountState);
    setCheckFavorite(
      favoritesState?.map((f: any) => f.id).includes(nutrition.id)
    );
  }, [favoritesState]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.backgroundColor,
      }}
    >
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          width: "87%",
          top: Constants.statusBarHeight,
          flexDirection: "row",
        }}
      >
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
          <TouchableOpacity
            onPress={async () => {
              setFavoriteLoad(true);
              try {
                checkFavorite
                  ? await deleteFavoriteNutrition(nutrition.id, dispatch)
                  : await addFavoriteNutrition(nutrition.id, dispatch);
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
                  checkFavorite ? theme.primaryColor : theme.primaryTextColor
                }
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{ ...styles.imageContainer, shadowColor: theme.shadowColor }}
      >
        <TouchableOpacity onPress={handleImagePress} activeOpacity={1}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{
              uri: imageUrl + nutrition.image,
              headers: {
                Cookie: "payload-token=" + account.token,
              },
            }}
            contentFit="cover"
          />
        </TouchableOpacity>
        <Modal animationType="slide" transparent={false} visible={modalVisible}>
          <View style={styles.modalContainer}>
            <Image
              style={styles.fullScreenImage}
              source={{
                uri: imageUrl + nutrition.image,
                headers: {
                  Cookie: "payload-token=" + account.token,
                },
              }}
            />

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                ...styles.closeButton,
                backgroundColor: theme.backgroundColor,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
              }}
            >
              <AntDesign name="left" size={20} color={theme.primaryTextColor} />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          overflow: "visible",
          width: "100%",
          marginBottom: 50,
          marginTop: -60,
        }}
        overScrollMode={"never"} //desactivar overscroll glow
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
            <Text
              style={{
                ...regularText,
                marginTop: 15,
                color: theme.secundaryTextColor,
              }}
            >
              {t("NutritionDetails:Receta")}
            </Text>
            <View style={styles.principalCenterContainer}>
              <Text
                style={{
                  ...mediumText,
                  color: theme.primaryTextColor,
                  marginTop: 4,
                  textAlign: "center",
                }}
              >
                {nutrition.titles[translation[1].language]}
              </Text>
              <View style={styles.containerRow}>
                <View
                  style={{
                    ...styles.kcalContainer,
                    backgroundColor: theme.primaryOpacityColor,
                  }}
                >
                  <Text
                    style={{
                      ...regularText,
                      textAlign: "center",
                      color: "white",
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                    }}
                  >
                    {(account.kcal / 5).toFixed(2)} Kcal
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.minContainer,
                    backgroundColor: theme.primaryOpacityColor,
                    shadowColor: theme.primaryOpacityColor,
                  }}
                >
                  <Text
                    style={{
                      ...regularText,
                      textAlign: "center",
                      color: "white",
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                    }}
                  >
                    {nutrition.duration} m
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <Text
              style={{
                ...mediumText,
                color: theme.primaryTextColor,
              }}
            >
              {t("NutritionDetails:Ingredients")}
            </Text>

            <View style={{ marginTop: 5 }}>
              {nutrition.ingredients.map((ingredient: any, index: number) => (
                <View key={index} style={{ ...styles.ingredientContainer }}>
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      marginTop: 1,
                      backgroundColor: theme.primaryColor,
                      borderRadius: 100,
                    }}
                  />
                  <View style={{ flexDirection: "row", marginLeft: 10 }}>
                    <Text
                      style={{
                        ...regularText,
                        fontWeight: "500",
                        color: theme.primaryTextColor,
                      }}
                    >
                      {ingredient.gramos.toFixed(0)}g
                    </Text>
                    <Text
                      style={{
                        ...regularText,
                        color: theme.primaryTextColor,
                      }}
                    >
                      {" "}
                      {t("NutritionDetails:De")}
                      {ingredient.ingredient.titles[translation[1].language]}
                    </Text>
                  </View>
                </View>
              ))}
            </View>

            <Text
              style={{
                ...mediumText,
                color: theme.primaryTextColor,
                marginTop: 20,
              }}
            >
              {t("NutritionDetails:Preparación")}:
            </Text>
            <View style={{ marginTop: 5 }}>
              {nutrition.instructions.map((instruction: any, index: number) => (
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <Text
                    key={index}
                    style={{
                      ...regularText,
                      fontWeight: "500",
                      color: theme.primaryTextColor,
                      textAlign: "left",
                      marginLeft: 10,
                    }}
                  >
                    {index + 1}-{" "}
                  </Text>
                  <Text
                    key={index}
                    style={{
                      ...regularText,
                      color: theme.primaryTextColor,
                      width: "90%",
                    }}
                  >
                    {instruction.step[translation[1].language]}
                  </Text>
                </View>
              ))}
            </View>
            <Text
              style={{
                ...mediumText,
                color: theme.primaryTextColor,
                marginTop: 20,
              }}
            >
              Alergenos
            </Text>
            <View style={{ ...styles.columnsSquad }}>
              <View style={{ ...styles.rowSquad }}>
                {nutrition.alergenos.length > 0 ? (
                  nutrition.alergenos.map((a: any) => (
                    <View
                      style={{
                        ...styles.textContainer,
                        backgroundColor: theme.primaryColor,
                      }}
                    >
                      <Text style={{ color: "white", ...regularText }}>
                        {a.alergeno[translation[1].language]}
                      </Text>
                    </View>
                  ))
                ) : (
                  <View
                    style={{
                      ...styles.textContainer,
                      backgroundColor: theme.primaryColor,
                    }}
                  >
                    <Text style={{ color: "white", ...regularText }}>
                      {t("NutritionDetails:No_contiene")}
                    </Text>
                  </View>
                )}
              </View>
            </View>
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
    marginTop: -60,
    borderWidth: 1,
    borderRadius: 20,
    ...shadow,
    alignItems: "center",
    justifyContent: "center",
  },
  principalCenterContainer: {
    width: "85%",
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: 35,
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
  backButton: {
    position: "absolute",
    width: 40,
    height: 40,
    left: 15,
    top: 15,
    borderRadius: 100,
    ...shadow,
  },
  summary: {
    width: "85%",
    marginTop: 25,
  },
  topButton: {
    width: 45,
    height: 45,
    borderRadius: 10,
    ...shadow,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenImage: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 30,
    left: 20,
    borderRadius: 10,
    padding: 10,
  },
  containerRow: {
    flexDirection: "row",
    marginTop: 10,
    marginRight: 10,
    marginBottom: 15,
  },
  kcalContainer: {
    padding: 5,
    borderRadius: 8,
  },
  minContainer: {
    padding: 5,
    borderRadius: 8,
    marginLeft: 8,
  },
  detailsContainer: {
    width: "85%",
    marginTop: 20,
  },
  ingredientContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  columnsSquad: { flexDirection: "column", width: "98%", alignSelf: "center" },
  rowSquad: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
    flexWrap: "wrap",
  },
  textContainer: {
    borderRadius: 10,
    padding: 9,
    marginRight: 5,
    marginBottom: 5,
  },
});

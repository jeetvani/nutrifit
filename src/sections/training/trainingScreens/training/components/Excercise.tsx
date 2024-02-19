import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Modal,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Image } from "expo-image";
import {
  imageUrl,
  regularText,
  mediumText,
  subTitleText,
  shadow,
  smallText,
} from "../../../../../utils/constants";
import { useTheme } from "../../../../../utils/theme";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import axios from "axios";
import { useTraining } from "../../../../../context/trainingContext";
import { useload } from "../../../../../utils/load";
import { setLoad } from "../../../../../redux/features/app/appSlice";
import { useTranslation } from "react-i18next";

interface Props {
  data: any;
}

export default function Training(props: Props) {
  const theme = useTheme();
  const video = useRef(null);
  const excercise = props.data;
  const navigation = useNavigation();
  const translation = useTranslation();
  const t = translation.t;
  const [play, setPlay] = useState(false);
  const training: any = useTraining();
  const [modalVisible, setModalVisible] = useState(false);
  const fadeAnim = new Animated.Value(0);
  const account = useAppSelector((state: any) => state.account);
  const dispatch = useAppDispatch();
  const modalVideo = useRef(null);

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setModalVisible(false));
    }
  }, [modalVisible]);
  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.container}
      >
        <View style={styles.imageContainer}>
          <Video
            onLoad={() => dispatch(setLoad("noLoad"))}
            ref={video}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
            source={{
              uri: imageUrl + excercise.videos[training.sex].url,
              headers: {
                Cookie: "payload-token=" + account.user.token,
              },
            }}
            isMuted={true}
            shouldPlay={false}
            useNativeControls={false}
            resizeMode={ResizeMode.COVER}
          />
        </View>
        <View style={styles.dataContainer}>
          <Text
            style={{
              ...regularText,
              marginTop: 3,
              color: theme.primaryTextColor,
              width: "75%",
            }}
          >
            {excercise.titles[translation[1].language]}
          </Text>
          {excercise.equipament[0] ? (
            <Text
              style={{
                ...smallText,
                marginTop: 3,
                color: theme.secundaryTextColor,
              }}
            >
              {excercise.equipament.map(
                (equipament: any, index: number) =>
                  equipament.item[translation[1].language] +
                  (index + 1 !== excercise.equipament.length ? ", " : "")
              )}
            </Text>
          ) : null}
        </View>

        <View style={styles.iconContainer}>
          <AntDesign name="right" size={22} color={theme.secundaryTextColor} />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View
            style={{
              ...styles.TopContainer,
              backgroundColor: theme.backgroundColor,
            }}
          >
            <View
              style={{
                ...styles.rowTopContainer,
                shadowColor: theme.shadowColor,
                backgroundColor: theme.backgroundColor,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  marginLeft: 15,
                  marginTop: 10,
                  ...subTitleText,
                  color: theme.primaryTextColor,
                }}
              >
                {t("Excercise:Detalles_del_ejercicio")}
              </Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <AntDesign
                  name="close"
                  size={24}
                  color={
                    theme.theme == "ligth"
                      ? theme.primaryTextColor
                      : theme.secundaryColor
                  }
                  style={{ marginRight: 15, marginTop: 10 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Animated.View
            style={{
              ...styles.modalContainer,
              opacity: fadeAnim,
            }}
          >
            <ScrollView
              style={{
                ...styles.scrollView,
                backgroundColor: theme.backgroundColor,
              }}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.detailsContainer}>
                <Video
                  ref={modalVideo}
                  style={styles.fullScreenImage}
                  source={{
                    uri: imageUrl + excercise.videos[training.sex].url,
                    headers: {
                      Cookie: "payload-token=" + account.user.token,
                    },
                  }}
                  isLooping={true}
                  isMuted={true}
                  shouldPlay={true}
                  useNativeControls={false}
                  resizeMode={ResizeMode.COVER}
                />
              </View>
              <View style={{ ...styles.textCenterContainer }}>
                <Text
                  style={{
                    ...mediumText,
                    marginTop: 18,
                    color: theme.primaryTextColor,
                  }}
                >
                  {excercise.titles[translation[1].language].toUpperCase()}
                </Text>
                <Text
                  style={{
                    marginTop: 18,
                    ...regularText,
                    textAlign: "left",
                    color: theme.primaryTextColor,
                  }}
                >
                  {excercise.description[translation[1].language]}.
                </Text>
                <Text
                  style={{
                    ...mediumText,
                    marginTop: 20,
                    color: theme.primaryTextColor,
                  }}
                >
                  {t("Excercise:EQUIPAMIENTOS_NECESARIOS")}
                </Text>
                <View style={{ ...styles.columnsSquad }}>
                  <View style={{ ...styles.rowSquad }}>
                    {excercise.equipament.length > 0 ? (
                      excercise.equipament.map((e: any) => (
                        <View
                          style={{
                            ...styles.textContainer,
                            backgroundColor: theme.primaryColor,
                          }}
                        >
                          <Text style={{ color: "white", ...regularText }}>
                            {e.item[translation[1].language]}
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
                <Text
                  style={{
                    ...mediumText,
                    marginTop: 18,
                    color: theme.primaryTextColor,
                  }}
                >
                  {t("Excercise:GRUPO_MUSCULAR")}
                </Text>
                <View
                  style={{
                    ...styles.columnsSquad,
                  }}
                >
                  <View
                    style={{
                      ...styles.rowSquad,
                    }}
                  >
                    {excercise.muscle_groups.length > 0 ? (
                      excercise.muscle_groups.map((m: any) => (
                        <View
                          style={{
                            ...styles.textContainer,
                            backgroundColor: theme.primaryColor,
                          }}
                        >
                          <Text style={{ color: "white", ...regularText }}>
                            {m.muscle[translation[1].language]}
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
                          No requerido
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </ScrollView>
          </Animated.View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  imageContainer: {
    width: "25%",
    height: "90%",
  },
  dataContainer: {
    marginLeft: 20,
  },
  iconContainer: {
    marginLeft: "auto",
  },
  fullScreenImage: {
    width: "100%",
    height: "100%",
    ...shadow,
  },
  closeButton: {
    marginLeft: "auto",
    alignSelf: "center",
  },

  principalContainer: {
    width: "89%",
    alignSelf: "center",
    marginTop: -60,
    borderWidth: 1,
    borderRadius: 20,
    ...shadow,

    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: { height: Dimensions.get("screen").height * 0.8, width: "100%" },
  detailsContainer: {
    width: "100%",
    height: 500,
  },

  modalBackground: {
    flex: 1,

    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContainer: {
    width: "100%",

    backgroundColor: "white",
    elevation: 9,
    alignItems: "center",
  },
  TopContainer: {
    height: 60,
    width: "100%",
    zIndex: 5,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: "row",
  },
  rowTopContainer: {
    width: "100%",
    flexDirection: "row",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    ...shadow,
  },
  textCenterContainer: { width: "92%", alignSelf: "center", marginBottom: 50 },
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
  },
  pointContainer: {
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
  },
});

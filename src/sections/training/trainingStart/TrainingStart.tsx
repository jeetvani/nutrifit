import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ResizeMode, Video, Audio } from "expo-av";
import {
  imageUrl,
  mediumText,
  regularText,
  shadow,
  subTitleText,
  titleText,
} from "../../../utils/constants";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../../../utils/theme";
import { AntDesign } from "@expo/vector-icons";
import { plusCompleteDays } from "../../../api/services/Trainings";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useTraining } from "../../../context/trainingContext";
import Constants from "expo-constants";
import * as Device from "expo-device";
import { useTranslation } from "react-i18next";
import DualCircleLoader from "../TrainingBreakLoader";
import { setLoad } from "../../../redux/features/app/appSlice";

export default function TrainingStart({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const userTraining: any = useTraining();
  const training = route.params.training;
  const [excerciseIndex, setExcerciseIndex] = useState(0);
  const translation = useTranslation();
  const t = translation.t;
  const [serieIndex, setSerieIndex] = useState(0);

  const [breakTime, setBreakTime] = useState(false);

  const [totalSeconds, setTotalSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const account = useAppSelector((state: any) => state.account.user);

  const [modalVisible, setModalVisible] = useState(false);

  const [sound, setSound]: any = useState();

  async function playSound(soundRequire: any) {
    const { sound } = await Audio.Sound.createAsync(soundRequire);
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    let interval: any;

    if (isActive) {
      const preMins = Math.floor(totalSeconds / 60);
      const preSecs = totalSeconds % 60;

      setMinutes(preMins);
      setSeconds(preSecs);

      interval = setInterval(async () => {
        if (totalSeconds > 0) {
          setTotalSeconds((prevSeconds) => prevSeconds - 1);
          const mins = Math.floor(totalSeconds / 60);
          const secs = totalSeconds % 60;
          setMinutes(mins);
          setSeconds(secs);

          if (totalSeconds < 5) playSound(require("../../../assets/sound.wav"));
        } else {
          playSound(require("../../../assets/sound2.wav"));
          const isTrainingFinished =
            serieIndex >=
              training.excercises[excerciseIndex].series.length - 1 &&
            excerciseIndex >= training.excercises.length - 1;

          if (isTrainingFinished) {
            plusCompleteDays(dispatch, userTraining.id);
            navigation.navigate("TrainingFinish");
          } else if (
            serieIndex >=
            training.excercises[excerciseIndex].series.length - 1
          ) {
            setSerieIndex(0), setExcerciseIndex(excerciseIndex + 1);
          } else {
            setSerieIndex(serieIndex + 1);
          }

          setMinutes(0);
          setSeconds(0);
          clearInterval(interval);
          setIsActive(false);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, totalSeconds]);

  useEffect(() => {
    playSound(require("../../../assets/sound2.wav"));
  }, []);

  return (
    <View style={styles.screenContainer}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={{ width: "100%", height: "50%" }}
        ></TouchableOpacity>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            height: "50%",
            width: "100%",
            backgroundColor: theme.backgroundColor,
            borderRadius: 10,
          }}
        >
          <ScrollView
            style={{
              ...styles.scrollView,
              backgroundColor: theme.backgroundColor,
              borderRadius: 10,
            }}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ ...styles.textCenterContainer }}>
              <Text
                style={{
                  ...mediumText,
                  marginTop: 18,
                  color: theme.primaryTextColor,
                }}
              >
                {training.excercises[excerciseIndex].titles[
                  translation[1].language
                ].toUpperCase()}
              </Text>
              <Text
                style={{
                  marginTop: 18,
                  ...regularText,
                  textAlign: "left",
                  color: theme.primaryTextColor,
                }}
              >
                {
                  training.excercises[excerciseIndex].description[
                    translation[1].language
                  ]
                }
                .
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
                  {training.excercises[excerciseIndex].equipament.length > 0 ? (
                    training.excercises[excerciseIndex].equipament.map(
                      (e: any) => (
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
                      )
                    )
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
                  {training.excercises[excerciseIndex].muscle_groups.length >
                  0 ? (
                    training.excercises[excerciseIndex].muscle_groups.map(
                      (m: any) => (
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
                      )
                    )
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
        </View>
      </Modal>
      <Video
        onLoadStart={() => dispatch(setLoad("load"))}
        onLoad={() => dispatch(setLoad("no-load"))}
        style={styles.video}
        source={{
          uri:
            imageUrl +
            training.excercises[excerciseIndex].videos[training.sex].url,
          headers: {
            Cookie: "payload-token=" + account.token,
          },
        }}
        isLooping={true}
        isMuted={true}
        shouldPlay={!isActive}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
      />
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={[
          "rgba(0,0,0,0.9)",
          "rgba(0,0,0,0.3)",
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0.3)",
          "rgba(0,0,0,0.9)",
        ]}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          backgroundColor: isActive ? "rgba(0,0,0,0.8)" : undefined,
        }}
      >
        <SafeAreaView
          style={{
            width: "90%",
            height: "100%",
            paddingTop:
              Device.osName == "Android" ? Constants.statusBarHeight : 0,
          }}
        >
          <Text style={{ ...subTitleText, color: "white", marginTop: 20 }}>
            {t("TrainingStart:EXCERCISE")} {excerciseIndex + 1}/
            {training.excercises.length}
          </Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={{ ...titleText, color: "white", marginTop: 2 }}>
              {training.excercises[excerciseIndex].titles[
                translation[1].language
              ].toUpperCase()}
            </Text>
          </TouchableOpacity>
          <Text style={{ ...subTitleText, color: "white", marginTop: 2 }}>
            {serieIndex + 1}/{training.excercises[excerciseIndex].series.length}{" "}
            {t("TrainingStart:SERIES")}
          </Text>
          {isActive ? (
            <View style={styles.timeContainer}>
              <DualCircleLoader />
              <View
                style={{
                  alignItems: "center",
                  position: "absolute",
                  height: 50,
                  left: 0,
                  right: 0,
                  top: 43,
                  bottom: 0,
                }}
              >
                <Text
                  style={{
                    ...titleText,
                    fontWeight: "800",
                    fontSize: 36,
                    color: "white",
                  }}
                >
                  {(minutes < 10 ? "0" : "") +
                    minutes.toString() +
                    ":" +
                    (seconds < 10 ? "0" : "") +
                    seconds.toString()}
                </Text>
                <Text style={{ ...mediumText, color: "white", marginTop: 5 }}>
                  {t("TrainingStart:BREAK")}
                </Text>
              </View>
            </View>
          ) : (
            <View style={styles.bottomContainer}>
              <View style={styles.leftContainer}>
                <Text style={{ ...mediumText, color: "white", marginTop: 5 }}>
                  {isActive ? t("TrainingStart:BREAK") : "REPS"}
                </Text>
                <Text
                  style={{
                    ...titleText,
                    fontWeight: "800",
                    fontSize: 36,
                    color: "white",
                  }}
                >
                  {isActive
                    ? (minutes < 10 ? "0" : "") +
                      minutes.toString() +
                      ":" +
                      (seconds < 10 ? "0" : "") +
                      seconds.toString()
                    : training.excercises[excerciseIndex].series[serieIndex]
                        .quantity}
                </Text>
              </View>
              <View style={styles.rightContainer}>
                {!isActive ? (
                  <TouchableOpacity
                    onPress={() => {
                      if (!isActive) {
                        setTotalSeconds(
                          serieIndex >=
                            training.excercises[excerciseIndex].series.length -
                              1
                            ? training.excercises[excerciseIndex].finalBreak
                            : training.excercises[excerciseIndex]
                                .breakBetweenSeries
                        );
                        setIsActive(true);
                      }
                    }}
                    style={{
                      ...styles.nextButton,
                      backgroundColor: theme.backgroundColor,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign
                      style={{ marginLeft: 3 }}
                      name="right"
                      size={26}
                      color={theme.primaryTextColor}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>
          )}
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: "100%",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "black",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  bottomContainer: {
    marginTop: "auto",
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
  },
  leftContainer: {},
  rightContainer: { marginLeft: "auto", justifyContent: "center" },
  nextButton: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  timeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "auto",
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
  textCenterContainer: {
    width: "92%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 50,
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
  },
  pointContainer: {
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
  },
});

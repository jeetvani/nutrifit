import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  subTitleText,
  regularText,
  shadow,
  mediumText,
  titleText,
} from "../../../utils/constants";
import { useTheme } from "../../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import { setUsers } from "../../../api/services/User";
import { setLoad } from "../../../redux/features/app/appSlice";
import Toast from "react-native-toast-message";

export default function WeightControl() {
  const theme = useTheme();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const accountState = useAppSelector((state) => state.account.user as any);
  const [modalVisible, setModalVisible] = useState(false);
  const [newWeight, setNewWeight] = useState("");
  const [data, setData] = useState(accountState.weights);
  const dispatch = useAppDispatch();

  const calculateWeightChange = (currentIndex: number) => {
    if (currentIndex === 0) {
      return 0;
    } else {
      const currentWeight = data[currentIndex].weight;
      const prevWeight = data[currentIndex - 1].weight;
      return currentWeight - prevWeight;
    }
  };

  const chartData = {
    datasets: [
      {
        label: [],
        data: data.map((value: any) => value.weight),
        color: (opacity = 1) => theme.primaryColor,
      },
    ],
  };

  const handleNewWeightChange = (text: string) => {
    setNewWeight(text);
  };

  const handleSaveWeight = async () => {
    dispatch(setLoad("load"));
    const updatedData = [...data, { date: new Date(), weight: +newWeight }];
    await setUsers({ field: "weights", value: updatedData }, dispatch);
    setModalVisible(false);
    dispatch(setLoad("no-load"));
  };

  const handleDeleteWeight = async (date: Date) => {
    dispatch(setLoad("load"));
    const updatedData: any[] = [];
    data.forEach((weight: any) => {
      if (weight.date !== date) updatedData.push(weight);
    });
    await setUsers({ field: "weights", value: updatedData }, dispatch);
    setModalVisible(false);
    dispatch(setLoad("no-load"));
  };

  useEffect(() => {
    setData(accountState.weights);
  }, [accountState]);

  return (
    <View
      style={{
        ...styles.screenContainer,
        backgroundColor: theme.backgroundColor,
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            ...styles.containerTitle,
            backgroundColor: theme.backgroundColor,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.arrow}
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color={theme.primaryTextColor}
            />
          </TouchableOpacity>
          <Text
            style={{
              ...titleText,
              color: theme.primaryTextColor,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {t("WeightControl:Control_de_peso")}
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.centerContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={{ ...styles.textCurrent, color: theme.secundaryColor }}>
            {t("WeightControl:Actualmente_pesas")}
          </Text>
          <Text style={styles.containerKcal}>
            {data[data.length - 1].weight}
            {t("MetabolicProfile:Kg")}
          </Text>

          <LineChart
            data={chartData}
            width={450}
            height={220}
            yAxisSuffix="kg"
            chartConfig={{
              backgroundColor: theme.backgroundColor,
              backgroundGradientFrom: theme.backgroundColor,
              backgroundGradientTo: theme.backgroundColor,
              strokeWidth: 9,
              color: (opacity = 1) => theme.backgroundColor,
              labelColor: (opacity = 1) => theme.backgroundColor,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "0",
                stroke: theme.primaryColor,
              },
            }}
            bezier
            style={{
              marginVertical: 30,
              borderRadius: 8,
              alignSelf: "center",
            }}
          />
          <Text style={styles.title}>{t("WeightControl:Registros")}</Text>
          <View style={styles.containerprimary}>
            {data.map((WeightControl: any, index: number) => (
              <View key={index} style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => {
                    if (data.length > 1)
                      Alert.alert(
                        t("Alert:Do_you_want_to_delete_the_weight_record"),
                        t("Alert:This_action_can_not_be_undone"),
                        [
                          { text: t("Alert:Cancel"), style: "destructive" },
                          {
                            text: t("Alert:Delete"),
                            onPress: () =>
                              handleDeleteWeight(WeightControl.date),
                          },
                        ]
                      );
                  }}
                  style={{
                    ...styles.registerContainer,
                    borderColor: theme.primaryColor,
                    backgroundColor: theme.backgroundColor,
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Text
                      style={{ ...regularText, color: theme.primaryTextColor }}
                    >
                      {new Date(WeightControl.date).toLocaleDateString()}
                    </Text>
                    <Text
                      style={{
                        ...regularText,
                        color: theme.secundaryTextColor,
                      }}
                    >
                      {WeightControl.weight} {t("MetabolicProfile:Kg")}
                    </Text>
                  </View>
                </TouchableOpacity>
                {index > 0 && (
                  <TouchableOpacity
                    style={{
                      ...styles.registerContainerTwo,
                      borderColor: theme.primaryColor,
                      backgroundColor: theme.backgroundColor,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          ...mediumText,
                          color: theme.secundaryTextColor,
                        }}
                      >
                        {calculateWeightChange(index)}{" "}
                        {t("MetabolicProfile:Kg")}
                      </Text>
                      <AntDesign
                        name={
                          calculateWeightChange(index) > 0
                            ? "arrowup"
                            : "arrowdown"
                        }
                        size={24}
                        color={
                          calculateWeightChange(index) > 0
                            ? theme.primaryColor
                            : "#CC3030"
                        } // RED
                      />
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
        <View
          style={{
            width: "100%",
            height: 110,
            backgroundColor: theme.backgroundColor,
            shadowColor: theme.shadowColor,
          }}
        >
          <TouchableOpacity
            style={{
              ...styles.buttomContainer,
              backgroundColor: theme.primaryColor,
              shadowColor: theme.shadowColor,
            }}
            onPress={() => {
              accountState.premium?.current
                ? setModalVisible(true)
                : Toast.show({
                    type: "error",
                    text1: t("Toast:Requires_the_BASIC_plan"),
                    text2: t(
                      "Toast:Purchase_the_basic_plan_to_use_the_weight_recording_function"
                    ),
                  });
            }}
          >
            <Text style={{ ...styles.keepContainer }}>
              {t("WeightControl:Agregar_peso")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <KeyboardAvoidingView
          style={styles.modalContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {t("WeightControl:Nuevo_Peso")}
            </Text>
            <TextInput
              style={styles.input}
              placeholder={t("WeightControl:Ingrese_Nuevo_Peso")}
              keyboardType="numeric"
              value={newWeight}
              onChangeText={handleNewWeightChange}
              maxLength={3}
            />
            <TouchableOpacity
              style={{
                ...styles.saveButton,
                backgroundColor: theme.primaryColor,
              }}
              onPress={() => {
                handleSaveWeight();
              }}
            >
              <Text style={styles.saveButtonText}>{t("Guardar:Guardar")}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
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
  centerContainer: { width: "92%" },
  title: {
    ...titleText,
    marginTop: 5,
    fontWeight: "400",
    alignSelf: "center",
  },
  subTitle: { ...subTitleText, marginTop: 5 },
  containerTitle: {
    width: "92%",
    height: 70,
    borderRadius: 10,
    display: "flex",

    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  arrow: {
    position: "absolute",
  },
  subTitletext: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: "bold",
  },
  text: { ...mediumText, alignSelf: "center", fontWeight: "bold" },
  textCurrent: {
    alignSelf: "center",
    ...subTitleText,
    marginTop: 15,
    fontWeight: "400",
  },
  containerKcal: {
    alignSelf: "center",
    marginTop: 5,
    ...subTitleText,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  containerprimary: {
    marginBottom: 15,
    marginTop: 10,
    flexDirection: "column",
  },
  containertwo: {
    marginTop: 0,
    flex: 1,
  },
  titleOne: { ...subTitleText, marginTop: 10, fontWeight: "300" },
  titleTwo: {
    ...titleText,
    marginTop: 5,
    marginBottom: 10,
    fontWeight: "400",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
  numkg: { ...subTitleText, marginTop: 5, fontWeight: "400" },
  containerRow: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    marginTop: 5,
  },

  questions: { marginLeft: "auto", marginTop: 25, marginRight: 20 },
  textone: {
    ...regularText,
    marginTop: 25,
  },
  textTwo: {
    ...mediumText,
    marginLeft: 8,
  },
  textKlgTwo: {
    ...mediumText,

    alignSelf: "center",
    marginTop: 5,
    marginLeft: 10,
  },
  registerContainer: {
    marginTop: 10,
    width: 150,
    height: 70,
    borderRadius: 20,
    ...shadow,
    borderWidth: 1,
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  registerContainerTwo: {
    marginTop: 10,
    width: 150,
    height: 70,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
    ...shadow,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  horizontalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imagecontainer: {
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 85,
  },
  textContainerTwo: {
    width: "60%",
    marginLeft: 15,
    flexDirection: "row",
    alignSelf: "center",
  },

  textContainer: { marginLeft: 15 },
  textcotainer: {
    color: "white",
  },
  iconContainer: {
    position: "relative",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: 5,
    marginTop: 2,
  },
  buttomContainer: {
    justifyContent: "center",
    width: "90%",
    height: 50,
    alignSelf: "center",
    ...shadow,
    marginTop: 20,
    borderRadius: 15,
    elevation: 1,
  },
  keepContainer: {
    alignSelf: "center",
    ...subTitleText,
    fontWeight: "400",
    color: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    ...titleText,
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  saveButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

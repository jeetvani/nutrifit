import { useNavigation } from "@react-navigation/native";
import { useTraining } from "../../context/trainingContext";
import { useTheme } from "../../utils/theme";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Alert,
  StyleSheet,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Image } from "expo-image";
import {
  imageUrl,
  mediumText,
  regularText,
  shadow,
  smallText,
} from "../../utils/constants";
import { useTranslation } from "react-i18next";

interface Props {
  id: string;
}

export default function TrainingSign() {
  const theme = useTheme();
  const translation = useTranslation();
  const t = translation.t;
  const training: any = useTraining();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const account = useAppSelector((state: any) => state.account.user);

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
                  color: theme.secundaryTextColor,
                }}
              >
                {t("TrainingSign:Metodo")}
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
                  marginTop: 5,
                }}
              >
                {t("TrainingSign:Con")} {training.creator} - {training.weeks}{" "}
                {t("TrainingSign:Semanas")}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("StripWar")}
                style={{
                  ...styles.button,
                  backgroundColor: theme.primaryColor,
                }}
              >
                <Text
                  style={{ ...regularText, fontWeight: "400", color: "white" }}
                >
                  {t("TrainingSign:Apuntame")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              ...mediumText,
              color: theme.primaryTextColor,
              marginTop: 30,
            }}
          >
            {t("TrainingSign:Resumen_del_programa")}
          </Text>
          <View
            style={{ ...styles.dataContainer, borderColor: theme.primaryColor }}
          >
            <View style={{ width: "95%", height: "70%" }}>
              <View style={styles.checkTextContainer}>
                <FontAwesome5
                  name="check"
                  size={15}
                  color={theme.primaryColor}
                />
                <Text
                  style={{
                    ...smallText,
                    color: theme.secundaryTextColor,
                    marginLeft: 10,
                  }}
                >
                  {t("TrainingSign:Entrenos_para")}{" "}
                  {training.type.toUpperCase()}
                </Text>
              </View>
              <View style={styles.checkTextContainer}>
                <FontAwesome5
                  name="check"
                  size={15}
                  color={theme.primaryColor}
                />
                <Text
                  style={{
                    ...smallText,
                    color: theme.secundaryTextColor,
                    marginLeft: 10,
                  }}
                >
                  {training.days} {t("TrainingSign:entrenos_por_semana")}
                </Text>
              </View>
              <View style={styles.checkTextContainer}>
                <FontAwesome5
                  name="check"
                  size={15}
                  color={theme.primaryColor}
                />
                <Text
                  style={{
                    ...smallText,
                    color: theme.secundaryTextColor,
                    marginLeft: 10,
                  }}
                >
                  {t("TrainingSign:Entrenos_de")} {training.duration} min
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              ...smallText,
              fontWeight: "400",
              color: theme.primaryTextColor,
              textAlign: "center",
              marginTop: 20,
              width: "80%",
            }}
          >
            {t("TrainingSign:Repite_en_su_orden_los")} {training.days}{" "}
            {t("TrainingSign:entrenos_semanales_durante")} {training.weeks}{" "}
            {t("TrainingSign:Semanas")[0].toLowerCase() +
              t("TrainingSign:semanas").slice(1)}
          </Text>
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
    width: "85%",
    height: 130,
    marginTop: -60,
    borderWidth: 1,
    borderRadius: 20,
    ...shadow,
    alignItems: "center",
    justifyContent: "center",
  },
  principalCenterContainer: {
    flex: 0.8,
    width: "95%",
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: 35,
    marginTop: "auto",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  dataContainer: {
    width: "55%",
    height: 120,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 15,
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
  topButton: {
    width: 45,
    height: 45,
    borderRadius: 10,
    ...shadow,
  },
});

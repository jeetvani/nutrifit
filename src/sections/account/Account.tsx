import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Linking,
  Image,
} from "react-native";
import {
  AntDesign,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
  Foundation,
} from "@expo/vector-icons";
import { useTheme } from "../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import { mediumText, titleText } from "../../utils/constants";
import * as ImagePicker from "expo-image-picker";
import { logOut } from "../../api/services/Auth";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useTranslation } from "react-i18next";
import { ImageProps as DefaultImageProps, ImageURISource } from "react-native";
type ImageProps = DefaultImageProps & {
  source: ImageURISource;
};
interface OptionProps {
  label: string;
  onPress: () => void;
  linkTo?: string;
}

const OptionItem: React.FC<OptionProps> = ({ label, onPress, linkTo }) => {
  const theme = useTheme();

  const linkToRef = React.useRef(linkTo);

  const handlePress = () => {
    if (linkToRef.current) {
      Linking.openURL(linkToRef.current);
    } else {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        ...styles.rowContainerAdditional,
        backgroundColor: theme.backgroundColor,
        borderColor: theme.primaryColor,
        height: 35,
      }}
    >
      <Text
        style={{
          ...styles.textContainer,
          marginLeft: 5,
          color: theme.primaryTextColor,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const MainScreen: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [refresh, setRefresh] = useState(false);
  const [expandedTwo, setExpandedTwo] = useState(false);
  const [additionalOptionsTwo, setAdditionalOptionsTwo] = useState<string[]>(
    []
  );
  const account: any = useAppSelector((state) => state.account.user);

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const rotateValueTwo = new Animated.Value(expandedTwo ? 1 : 0);

  const handleContainerSettingPress = () => {
    setExpandedTwo(!expandedTwo);
    Animated.timing(rotateValueTwo, {
      toValue: expandedTwo ? 0 : 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setAdditionalOptionsTwo(
      expandedTwo ? [] : ["Opción A", "Opción B", "Opción C"]
    );
  };

  const rotateArrowTwo = rotateValueTwo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const selectImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status == "granted") {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsMultipleSelection: false,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.canceled) {
          // SEND TO BACKEND TO SET PROFILE PHOTO
          setProfileImage(result.assets[0].uri || null);
        }
      }
    } catch (error) {
      console.error("Error al verificar/solicitar permisos", error);
    }
  };

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
        style={{ width: "100%", flexGrow: 1 }}
        refreshControl={
          <RefreshControl
            onRefresh={() => refreshData()}
            refreshing={refresh}
            tintColor={theme.primaryColor}
          />
        }
      >
        <View
          style={{
            ...styles.containerTitle,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ ...styles.arrow }}
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
              ...styles.titleTop,
              color: theme.primaryTextColor,
            }}
          >
            {t("Account:Perfil")}
          </Text>
        </View>

        <View style={styles.centerContainer}>
          <TouchableOpacity
            style={{
              ...styles.profileImageContainer,
              marginTop: 20,
            }}
          >
            <View
              style={{
                ...styles.imageCircle,
                backgroundColor: theme.primaryOpacityColorTwo,
              }}
            >
              <Text
                style={{
                  ...titleText,
                  fontSize: 30,
                  color: "white",
                  fontWeight: "700",
                }}
              >
                {account.name[0] + account.last_name[0]}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.editContainer}>
            <Text
              style={{
                alignSelf: "center",
                marginTop: 7,
                color: theme.primaryColor,
              }}
            ></Text>
          </View>
          <View style={styles.containerColumn}>
            <TouchableOpacity
              onPress={() => navigation.navigate("metabolicProfile")}
              style={{
                ...styles.rowContainer,
                backgroundColor: theme.backgroundColor,
                borderColor: theme.primaryColor,
                marginTop: 10,
              }}
            >
              <View style={styles.centerRowContainer}>
                <Entypo
                  name="v-card"
                  size={24}
                  color={theme.primaryColor}
                  style={{ ...styles.iconsContent }}
                />
                <Text
                  style={{
                    ...styles.textContainer,
                    color: theme.primaryTextColor,
                  }}
                >
                  {t("Account:Perfil_Metabolico")}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("aim")}
              style={{
                ...styles.rowContainer,
                backgroundColor: theme.backgroundColor,
                borderColor: theme.primaryColor,
              }}
            >
              <View style={styles.centerRowContainer}>
                <Foundation
                  name="target-two"
                  size={24}
                  color={theme.primaryColor}
                  style={{ ...styles.iconsContent }}
                />
                <Text
                  style={{
                    ...styles.textContainer,
                    color: theme.primaryTextColor,
                  }}
                >
                  {t("Account:Objetivo")}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("weightControl")}
              style={{
                ...styles.rowContainer,
                backgroundColor: theme.backgroundColor,
                borderColor: theme.primaryColor,
              }}
            >
              <View style={styles.centerRowContainer}>
                <FontAwesome5
                  name="weight"
                  size={22}
                  style={{ ...styles.iconsContent }}
                  color={theme.primaryColor}
                />
                <Text
                  style={{
                    ...styles.textContainer,
                    color: theme.primaryTextColor,
                  }}
                >
                  {t("Account:Registro_de_peso_y_fotos")}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("profileFlow")}
              style={{
                ...styles.rowContainer,
                backgroundColor: theme.backgroundColor,
                borderColor: theme.primaryColor,
              }}
            >
              <View style={styles.centerRowContainer}>
                <FontAwesome5
                  name="dumbbell"
                  size={19}
                  style={{ ...styles.iconsContent }}
                  color={theme.primaryColor}
                />
                <Text
                  style={{
                    ...styles.textContainer,
                    color: theme.primaryTextColor,
                  }}
                >
                  {t("Account:Perfil_de_entrenamiento")}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleContainerSettingPress}
              style={{
                ...styles.rowContainer,
                backgroundColor: theme.backgroundColor,
                borderColor: theme.primaryColor,
                height: expandedTwo ? "auto" : 57,
              }}
            >
              <View style={styles.centerRowContainer}>
                <Ionicons
                  name="settings-sharp"
                  size={24}
                  style={{
                    ...styles.iconsContent,
                    alignSelf: expandedTwo ? "auto" : "center",
                    marginTop: expandedTwo ? 9.5 : 0,
                  }}
                  color={theme.primaryColor}
                />
                <Text
                  style={{
                    ...styles.textContainer,
                    color: theme.primaryTextColor,
                    alignSelf: expandedTwo ? "auto" : "center",
                    marginTop: expandedTwo ? 11 : 0,
                  }}
                >
                  {t("Account:Cuenta_de_usuario")}
                </Text>
                <Animated.View
                  style={{
                    position: "absolute",
                    right: 6,
                    marginTop: expandedTwo ? 11 : 0,
                    transform: [{ rotate: rotateArrowTwo }],
                  }}
                >
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color={theme.primaryColor}
                    style={{
                      marginRight: expandedTwo ? 0 : 0,
                    }}
                  />
                </Animated.View>
                {expandedTwo && additionalOptionsTwo.length > 0 && (
                  <View
                    style={{
                      marginLeft: -160,
                      marginTop: 35,
                      marginBottom: 10,
                    }}
                  >
                    <View style={{ marginTop: 5, marginLeft: 25 }}>
                      <OptionItem
                        label={t("Account:Nombre_y_alias")}
                        onPress={() => navigation.navigate("nameAlias")}
                      />
                      {/*                      <OptionItem
                        label={t("Account:Cambiar_contraseña")}
                        onPress={() => navigation.navigate("passwordChange")}
                  />*/}
                      <OptionItem
                        label={t("Account:Terminos_y_condiciones")}
                        onPress={() => {}}
                        linkTo="https://srnutrifit.com"
                      />
                      <OptionItem
                        label={t("Account:Politica_de_privacidad")}
                        onPress={() => {}}
                        linkTo="https://srnutrifit.com"
                      />
                    </View>
                  </View>
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("customizeApp")}
              style={{
                ...styles.rowContainer,
                backgroundColor: theme.backgroundColor,
                borderColor: theme.primaryColor,
              }}
            >
              <View style={styles.centerRowContainer}>
                <FontAwesome5
                  name="palette"
                  size={24}
                  style={{ ...styles.iconsContent }}
                  color={theme.primaryColor}
                />
                <Text
                  style={{
                    ...styles.textContainer,
                    color: theme.primaryTextColor,
                  }}
                >
                  {t("Account:Personaliza_la_aplicación")}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.rowContainer,
                backgroundColor: theme.backgroundColor,
                borderColor: theme.primaryColor,
              }}
              onPress={() => logOut(dispatch)}
            >
              <View style={styles.centerRowContainer}>
                <Ionicons
                  name="power-sharp"
                  size={24}
                  style={{ ...styles.iconsContent }}
                  color={theme.primaryColor}
                />
                <Text
                  style={{
                    ...styles.textContainer,
                    color: theme.primaryTextColor,
                  }}
                >
                  {t("Account:Cerrar_sesión")}
                </Text>
              </View>
            </TouchableOpacity>
            <View />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  centerContainer: { width: "92%", alignSelf: "center" },
  containerTitle: {
    width: "92%",
    height: 70,
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  titleTop: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  arrow: {
    position: "absolute",
  },
  containerTitleTop: { alignSelf: "center", marginTop: 25, marginLeft: 135 },
  profileImageContainer: {
    alignSelf: "center",
  },

  imageCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    elevation: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  rowContainer: {
    width: "100%",
    height: 57,
    marginTop: 15,
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 0.2,
  },
  centerRowContainer: {
    flexDirection: "row",
    width: "92%",
  },
  editContainer: {},
  containerColumn: { flexDirection: "column", marginTop: 15, marginBottom: 20 },
  iconsContent: { marginLeft: 10 },
  textContainer: {
    ...mediumText,
    marginLeft: 15,
    alignSelf: "center",
  },
  rowContainerAdditional: {
    flexDirection: "row",

    height: 45,
    marginTop: 3,

    backgroundColor: "#1234",
  },
  itemsContainer: { marginTop: 15 },
  textItems: {},
});
export default MainScreen;

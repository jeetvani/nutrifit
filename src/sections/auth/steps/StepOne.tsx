import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { useTheme } from "../../../utils/theme";
import { mediumText, regularText, titleText } from "../../../utils/constants";
import CustomInput from "../../../components/input/CustomInput";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../AuthContext";
import ImagePicker, {
  launchImageLibrary,
  ImagePickerResponse,
} from "react-native-image-picker";
import Constants from "expo-constants";
import * as Device from "expo-device";

export default function StepOne({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const theme = useTheme();
  const authContext = useContext(AuthContext)!;
  const context = useContext(AuthContext)!;
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleSelectImage = () => {
    const options = {
      noData: true,
      mediaType: "photo" as const,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.assets && !response.didCancel) {
        const imageAssetsArray = response.assets[0].uri;
        setSelectedImage(imageAssetsArray || null);
      }
    });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor,
        paddingTop: Device.osName == "Android" ? Constants.statusBarHeight : 0,
      }}
    >
      <View style={styles.centerContainer}>
        <Text
          style={{ ...titleText, color: theme.primaryTextColor, marginTop: 20 }}
        >
          {t("StepOne:Como_quieres_que_nos_dirijamos_a_ti")}
        </Text>
        {/*<TouchableOpacity onPress={handleSelectImage}>
          <View
            style={{
              ...styles.image,
              backgroundColor: theme.secundaryColor,

              overflow: "hidden",
            }}
          >
            {selectedImage ? (
              <Image
                source={{ uri: selectedImage }}
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <Image
                source={require("../../../assets/DarkLogo.png")}
                style={{ width: "100%", height: "100%" }}
              />
            )}
          </View>
          <Text
          style={{
            ...mediumText,
            marginTop: 20,
            color: theme.primaryTextColor,
            alignSelf: "center",
          }}
        >
          {t("StepOne:Editar")}
        </Text>
            </TouchableOpacity>*/}

        <Text style={{ marginTop: 20 }}>
          {t("StepOne:Tu_nombre_o_tu_alias")}
        </Text>
        <CustomInput
          placeHolder={authContext.newUser.user_name}
          secureEntry={false}
          value={authContext.newUser.user_name}
          setValue={(text) =>
            authContext.setUser({
              ...authContext.newUser,
              user_name: text.toString(),
            })
          }
          maxLength={12}
        ></CustomInput>
        <Text
          style={{
            ...regularText,
            color: theme.primaryTextColor,
            marginTop: 10,
          }}
        >
          {t("StepOne:Si_quieres_que_nos_dirijamos")}
        </Text>
        <TouchableOpacity
          onPress={() => {
            const { user_name } = context.newUser;
            if (user_name.length >= 5 && /^[a-zA-Z]+$/.test(user_name)) {
              navigation.navigate("StepTwo");
            }
          }}
          style={{
            ...styles.nextButton,
            backgroundColor: theme.primaryColor,
          }}
        >
          <Text
            style={{
              ...mediumText,
              color: "white",
            }}
          >
            {t("Siguiente:Siguiente")}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centerContainer: { flex: 1, width: "92%", alignSelf: "center" },
  imageContainer: {
    alignSelf: "center",
    marginTop: 50,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 50,
  },
  nextButton: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    marginTop: "auto",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

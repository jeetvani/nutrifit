import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  subTitleText,
  regularText,
  shadow,
  mediumText,
  titleText,
} from "../../../../utils/constants";
import { useTheme } from "../../../../utils/theme";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { setUsers } from "../../../../api/services/User";
import { useAppDispatch } from "../../../../redux/store";
import { setLoad } from "../../../../redux/features/app/appSlice";
export default function NameAlias() {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const navigation = useNavigation();
  const [value, setValue] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const [isFocusedTwo, setFocusedTwo] = useState(false);
  const [isFocusedThree, setFocusedThree] = useState(false);
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [alias, setAlias] = useState("");

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
            shadowColor: theme.shadowColor,
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
              ...styles.titleTop,
              color: theme.primaryTextColor,
            }}
          >
            {t("NameAlias:Nombre_y_alias")}
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.centerContainer}
        >
          <Text
            style={{
              ...subTitleText,
              color: theme.primaryTextColor,
              marginTop: 10,
            }}
          >
            {t("NameAlias:Como_te_llemas")}
          </Text>
          <TextInput
            value={name}
            onChangeText={(t) => setName(t)}
            placeholder={t("NameAlias:Nombre")}
            placeholderTextColor={theme.secundaryTextColor}
            style={{
              borderColor: isFocused
                ? theme.primaryColor
                : theme.secundaryColor,
              ...styles.input,
              color: theme.primaryTextColor,
              marginTop: 13,
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <TextInput
            value={alias}
            onChangeText={(t) => setAlias(t)}
            placeholder={t("NameAlias:Alias")}
            placeholderTextColor={theme.secundaryTextColor}
            style={{
              borderColor: isFocusedThree
                ? theme.primaryColor
                : theme.secundaryColor,
              ...styles.input,
              color: theme.primaryTextColor,
            }}
            onFocus={() => setFocusedThree(true)}
            onBlur={() => setFocusedThree(false)}
          />
          <TextInput
            value={lastName}
            onChangeText={(t) => setLastName(t)}
            placeholder={t("NameAlias:Apellido")}
            placeholderTextColor={theme.secundaryTextColor}
            style={{
              borderColor: isFocusedTwo
                ? theme.primaryColor
                : theme.secundaryColor,
              ...styles.input,
              color: theme.primaryTextColor,
            }}
            onFocus={() => setFocusedTwo(true)}
            onBlur={() => setFocusedTwo(false)}
          />
        </ScrollView>
        <View
          style={{
            width: "100%",
            height: 120,
            backgroundColor: theme.backgroundColor,
            shadowColor: theme.shadowColor,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                t("Alert:Modify"),
                t("Alert:You_want_to_modify_the_data"),
                [
                  { text: t("Alert:Cancel"), style: "destructive" },
                  {
                    text: t("Alert:Modify"),
                    onPress: async () => {
                      dispatch(setLoad("load"));
                      if (name !== "")
                        await setUsers(
                          { field: "name", value: name },
                          dispatch
                        );
                      if (lastName !== "")
                        await setUsers(
                          { field: "last_name", value: lastName },
                          dispatch
                        );
                      if (alias !== "")
                        await setUsers(
                          { field: "user_name", value: alias },
                          dispatch
                        );
                      dispatch(setLoad("no-load"));
                      navigation.goBack();
                    },
                  },
                ]
              )
            }
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
              {t("Guardar:Guardar")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
  title: { ...subTitleText, marginTop: 25, fontWeight: "400" },
  subTitle: { ...subTitleText, marginTop: 5 },
  containerTitle: {
    width: "92%",
    height: 70,
    borderRadius: 10,
    display: "flex",

    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  titleTop: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  arrow: {
    alignSelf: "center",
    position: "absolute",
  },
  subTitletext: {
    marginTop: 12,
    ...subTitleText,
    fontWeight: "400",
  },
  text: { ...mediumText, alignSelf: "center", fontWeight: "bold" },
  input: {
    width: "100%",
    height: 60,
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  buttomContainer: {
    justifyContent: "center",
    width: "90%",
    height: 50,
    alignSelf: "center",
    ...shadow,
    marginTop: 30,
    borderRadius: 15,
    elevation: 1,
  },
  keepContainer: {
    alignSelf: "center",
    ...subTitleText,
    fontWeight: "400",
    color: "white",
  },
});

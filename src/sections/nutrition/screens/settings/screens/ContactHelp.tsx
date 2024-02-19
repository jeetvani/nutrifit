import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  subTitleText,
  titleText,
  mediumText,
  secundaryColor,
  regularText,
  shadow,
} from "../../../../../utils/constants";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import MenuBar from "../../../../../components/menuBar/MenuBar";
import { useTheme } from "../../../../../utils/theme";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../../../redux/store";
import {
  getDefaultTrainings,
  getUserTrainings,
} from "../../../../../api/services/Trainings";
import Account from "../../../../account/Account";
import { useAppDispatch } from "../../../../../redux/store";
import { useDispatch } from "react-redux";

export default function ContactHelp() {
  const accountState = useAppSelector((state: any) => state.account.user);
  const { t } = useTranslation();
  const theme = useTheme();
  const [refresh, setRefresh] = useState(false);
  const dispatch = useAppDispatch();
  async function refreshData() {
    setRefresh(true);

    getUserTrainings(dispatch);
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
      <View style={styles.container}>
        <View
          style={{
            ...styles.containerTitle,
            backgroundColor: theme.backgroundColor,
          }}
        >
          <TouchableOpacity style={styles.arrow}>
            <AntDesign
              name="arrowleft"
              size={24}
              color={theme.secundaryTextColor}
            />
          </TouchableOpacity>

          <View>
            <Text
              style={{
                ...styles.titleTop,
                ...subTitleText,
                color: theme.secundaryTextColor,
                fontWeight: "400",
              }}
            >
              {t("contact_help")}
            </Text>
          </View>
          <TouchableOpacity style={styles.questions}>
            <AntDesign
              name="questioncircleo"
              size={24}
              color={theme.secundaryTextColor}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.centerContainer}
          refreshControl={
            <RefreshControl
              onRefresh={() => refreshData()}
              refreshing={refresh}
              tintColor={theme.primaryColor}
            />
          }
        >
          <Text
            style={{
              ...titleText,
              marginTop: 10,
              color: theme.secundaryTextColor,
              fontWeight: "300",
            }}
          >
            {t("common_questions")}
          </Text>

          <View
            style={{
              ...styles.columnContainer,
              backgroundColor: theme.backgroundColor,
              borderColor: theme.primaryColor,
              ...shadow,
            }}
          >
            <TouchableOpacity
              onPress={() => console.log(window)}
              style={{ ...styles.rowContainer, marginTop: 20 }}
            >
              <Text
                style={{
                  ...styles.text,
                  ...regularText,
                  color: theme.secundaryTextColor,
                }}
              >
                {t("how_do_we_communicate")}
              </Text>

              <AntDesign
                name="exclamationcircleo"
                size={24}
                color={theme.secundaryTextColor}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log(window)}
              style={styles.rowContainer}
            >
              <View style={{ width: "80%" }}>
                <Text
                  style={{
                    ...styles.text,
                    ...regularText,
                    color: theme.secundaryTextColor,
                  }}
                >
                  {t("access_telegram_community")}
                </Text>
              </View>

              <AntDesign
                style={{ marginLeft: "auto", alignSelf: "center" }}
                name="exclamationcircleo"
                size={24}
                color={theme.secundaryTextColor}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log(window)}
              style={styles.rowContainer}
            >
              <Text
                style={{
                  ...styles.text,
                  ...regularText,
                  color: theme.secundaryTextColor,
                }}
              >
                {t("why_not_a_diet")}
              </Text>

              <AntDesign
                name="exclamationcircleo"
                size={24}
                color={theme.secundaryTextColor}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log(window)}
              style={styles.rowContainer}
            >
              <Text
                style={{
                  ...styles.text,
                  ...regularText,
                  color: theme.secundaryTextColor,
                }}
              >
                {t("want_to_train")}
              </Text>

              <AntDesign
                name="exclamationcircleo"
                size={24}
                color={theme.secundaryTextColor}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log(window)}
              style={styles.rowContainer}
            >
              <Text
                style={{
                  ...styles.text,
                  ...regularText,
                  color: theme.secundaryTextColor,
                }}
              >
                {t("where_is_my_nutritional_plan")}
              </Text>

              <AntDesign
                name="exclamationcircleo"
                size={24}
                color={theme.secundaryTextColor}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log(window)}
              style={{ ...styles.rowContainer, marginBottom: 20 }}
            >
              <Text
                style={{
                  ...styles.text,
                  ...regularText,
                  color: theme.secundaryTextColor,
                }}
              >
                {t("when_do_i_receive_my_nutritional_plan")}
              </Text>

              <AntDesign
                name="exclamationcircleo"
                size={24}
                color={theme.secundaryTextColor}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              ...styles.helpButton,
              backgroundColor: theme.backgroundColor,
              borderColor: theme.primaryColor,
              ...shadow,
            }}
          >
            <View style={styles.subContainerButtom}>
              <View>
                <Text
                  style={{
                    ...subTitleText,
                    color: theme.secundaryTextColor,
                    fontWeight: "300",
                  }}
                >
                  {t("help_desk")}
                </Text>
                <Text
                  style={{
                    ...regularText,
                    marginTop: 3,
                    color: theme.secundaryTextColor,
                  }}
                >
                  {t("resolve_your_common_doubts")}
                </Text>
              </View>
              <AntDesign
                style={{ marginLeft: "auto" }}
                name="pluscircle"
                size={35}
                color={theme.primaryColor}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
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
  centerContainer: { width: "92%", alignSelf: "center" },
  title: { marginTop: 20 },
  containerTitle: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  titleTop: {
    marginTop: 25,
    marginLeft: 80,
  },
  arrow: {
    marginLeft: 20,
    marginTop: 25,
  },
  questions: { marginLeft: "auto", marginTop: 25, marginRight: 20 },
  columnContainer: {
    marginTop: 25,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
  },
  rowContainer: {
    width: "90%",
    flexDirection: "row",
    marginTop: 15,
  },
  text: {
    flex: 2,
    marginLeft: 3,
    ...regularText,
    justifyContent: "center",
    alignItems: "center",
  },
  containertextcolumn: {
    flexDirection: "column",
  },
  AntDesignicon: { marginLeft: "auto", marginRight: 20, marginTop: 27 },
  textlow: { marginTop: 5, marginLeft: 12 },
  helpButton: {
    marginTop: 40,
    width: "100%",
    height: 90,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subContainerButtom: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
  },
});

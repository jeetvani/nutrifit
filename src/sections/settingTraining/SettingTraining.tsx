import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Feather,
  AntDesign,
  Ionicons,
  FontAwesome5,
  EvilIcons,
} from "@expo/vector-icons";


import {
  subTitleText,
  regularText,
  shadow,
  mediumText,
  titleText,
} from "../../utils/constants";
import { useTheme } from "../../utils/theme";
import { useNavigation } from "@react-navigation/native";

export default function ContactHelp() {
  const theme = useTheme();
  const navigation = useNavigation();
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
          <TouchableOpacity style={styles.arrow}>
            <Ionicons name="close" size={30} color={theme.primaryTextColor} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.centerContainer}
      >
        <View
          style={{
            ...styles.squadContainer,
            backgroundColor: theme.primaryColor,
          }}
        >
          <FontAwesome5
            name="dumbbell"
            size={40}
            color="white"
            style={{
              ...styles.containerIcon,
            }}
          />
        </View>
        <Text style={{ ...styles.text, color: theme.primaryTextColor }}>
          Entrenos
        </Text>
        <View style={styles.containerColumn}>
          <TouchableOpacity
            onPress={() => navigation.navigate("activityRegister")}
            style={{
              ...styles.containerRow,
              marginTop: 0,
              borderColor: theme.primaryColor,
            }}
          >
            <AntDesign
              name="hearto"
              size={24}
              color={theme.secundaryTextColor}
              style={{
                ...styles.IconsContainer,
              }}
            />
            <Text style={styles.textContainer}>Mis favoritos</Text>
            <AntDesign
              name="right"
              size={18}
              color={theme.primaryTextColor}
              style={{
                ...styles.arrowContainer,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.containerRow,

              borderColor: theme.primaryColor,
            }}
          >
            <Feather
              name="activity"
              size={24}
              color={theme.secundaryTextColor}
              style={{
                ...styles.IconsContainer,
              }}
            />
            <Text style={styles.textContainer}>Registro de actividad</Text>
            <AntDesign
              name="right"
              size={18}
              color={theme.primaryTextColor}
              style={{
                ...styles.arrowContainer,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.containerRow,

              borderColor: theme.primaryColor,
            }}
          >
            <FontAwesome5
              name="weight"
              size={24}
              color={theme.secundaryTextColor}
              style={{
                ...styles.IconsContainer,
              }}
            />
            <Text style={styles.textContainer}>Control de peso</Text>
            <AntDesign
              name="right"
              size={18}
              color={theme.primaryTextColor}
              style={{
                ...styles.arrowContainer,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.containerRow,

              borderColor: theme.primaryColor,
            }}
          >
            <FontAwesome5
              name="dumbbell"
              size={22}
              color={theme.secundaryTextColor}
              style={{
                ...styles.IconsContainer,
              }}
            />
            <Text style={{ ...styles.textContainer, marginLeft: 15 }}>
              Cambiar intensidad de entreno
            </Text>
            <AntDesign
              name="right"
              size={18}
              color={theme.primaryTextColor}
              style={{
                ...styles.arrowContainer,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.containerRow,

              borderColor: theme.primaryColor,
            }}
          >
            <EvilIcons
              name="sc-telegram"
              size={30}
              color={theme.secundaryTextColor}
              style={{
                ...styles.IconsContainer,
              }}
            />
            <Text style={{ ...styles.textContainer, marginLeft: 15 }}>
              Contacto y ayuda
            </Text>
            <AntDesign
              name="right"
              size={18}
              color={theme.primaryTextColor}
              style={{
                ...styles.arrowContainer,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.containerRow,

              borderColor: theme.primaryColor,
            }}
          >
            <AntDesign
              name="infocirlceo"
              size={22}
              color={theme.secundaryTextColor}
              style={{
                ...styles.IconsContainer,
              }}
            />
            <Text style={styles.textContainer}>
              Los diferentes tipos de estrenos
            </Text>
            <AntDesign
              name="right"
              size={18}
              color={theme.primaryTextColor}
              style={{
                ...styles.arrowContainer,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.containerRow,

              borderColor: theme.primaryColor,
            }}
          >
            <AntDesign
              name="infocirlceo"
              size={22}
              color={theme.secundaryTextColor}
              style={{
                ...styles.IconsContainer,
              }}
            />
            <Text style={styles.textContainer}>
              ¿Como elegir el peso para cada ejercicio?
            </Text>
            <AntDesign
              name="right"
              size={18}
              color={theme.primaryTextColor}
              style={{
                ...styles.arrowContainer,
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    alignItems: "center",
  },
  centerContainer: { width: "96%" },
  title: { ...subTitleText, marginTop: 25, fontWeight: "400" },
  subTitle: { ...subTitleText, marginTop: 5 },
  containerTitle: {
    width: "100%",
    height: 70,
    borderRadius: 10,
    display: "flex",
    elevation: 8,

    alignItems: "center",
    flexDirection: "row",
  },
  titleTop: {
    alignSelf: "center",
    ...subTitleText,
    fontWeight: "400",
    marginLeft: 95,
  },
  arrow: {
    alignSelf: "center",
    marginLeft: 15,
  },
  subTitletext: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: "400",
  },
  text: {
    ...titleText,
    fontWeight: "bold",
    fontFamily: "Angora",
    marginLeft: 15,
    marginTop: 5,
    fontSize: 32,
  },
  squadContainer: {
    marginTop: 40,
    marginLeft: 15,
    width: 90,
    height: 90,
    backgroundColor: "#1234",
    borderRadius: 15,
    justifyContent: "center",
  },
  containerIcon: { alignSelf: "center" },
  containerColumn: { flexDirection: "column", marginTop: 60, marginLeft: 15 },
  containerRow: {
    flexDirection: "row",
    width: "100%",
    height: 55,

    marginTop: 15,
    borderRadius: 10,
    borderWidth: 0.8,
  },
  arrowContainer: {
    marginLeft: "auto",
    marginRight: 20,
    alignSelf: "center",
  },
  textContainer: {
    alignSelf: "center",
    marginLeft: 20,
    ...mediumText,
    fontWeight: "500",
    width: "70%",
    lineHeight: 20,
  },
  IconsContainer: { alignSelf: "center", marginLeft: 10 },
});

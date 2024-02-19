import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Image } from "expo-image";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "../../../utils/theme";
import {
  regularText,
  shadow,
  subTitleText,
  mediumText,
  primaryColor,
} from "../../../utils/constants";
import { AntDesign } from "@expo/vector-icons";

const dimensions = Dimensions.get("screen");
const Data = [
  {
    day: "Cuadriceps y gemelos",
    type: "gym",
    duration: 50,
    amout: 6,
  },
  {
    day: "Cuadriceps y gemelos",
    type: "gym",
    duration: 50,
    amout: 6,
  },
  {
    day: "Cuadriceps y gemelos",
    type: "home",
    duration: 50,
    amout: 6,
  },
  {
    day: "Cuadriceps y gemelos",
    type: "gym",
    duration: 50,
    amout: 6,
  },
  {
    day: "Cuadriceps y gemelos",
    type: "home",
    duration: 50,
    amout: 6,
  },
  {
    day: "Cuadriceps y gemelos",
    type: "home",
    duration: 50,
    amout: 6,
  },
  {
    day: "Cuadriceps y gemelos",
    type: "gym",
    duration: 50,
    amout: 6,
  },
  {
    day: "Cuadriceps y gemelos",
    type: "home",
    duration: 50,
    amout: 6,
  },
  {
    day: "Cuadriceps y gemelos",
    type: "gym",
    duration: 50,
    amout: 6,
  },
];
export default function TrainingScreen() {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("viewAll");
  const [refresh, setRefresh] = useState(false);
  const filteredData =
    selectedCategory === "viewAll"
      ? Data
      : Data.filter((item) => item.type === selectedCategory);
  async function refreshData() {
    setRefresh(true);

    setRefresh(false);
  }

  useEffect(() => {
    refreshData();
  }, []);
  const renderItems = () => {
    return filteredData.map((data, index) => (
      <View
        key={index}
        style={{
          ...styles.itemContainer,
          backgroundColor: theme.backgroundColor,
          borderColor: theme.primaryColor,
          shadowColor: theme.shadowColor,
          ...shadow,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                ...mediumText,
                fontSize: 18,
                color: theme.primaryTextColor,
                marginTop: 15,
              }}
            >
              {data.day}
            </Text>
            <Text
              style={{
                ...regularText,
                color: theme.secundaryTextColor,
                marginTop: 1,
              }}
            >
              {data.amout} entrenos por semana
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
                marginBottom: 15,
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="clock-outline"
                  size={18}
                  color={theme.primaryColor}
                />
                <Text
                  style={{
                    ...regularText,
                    color: theme.primaryTextColor,
                    marginLeft: 3,
                  }}
                >
                  {data.duration}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 15,
                }}
              >
                <FontAwesome5
                  name="dumbbell"
                  size={15}
                  color={theme.primaryColor}
                />
                <Text
                  style={{
                    ...regularText,
                    color: theme.primaryTextColor,
                    marginLeft: 5,
                  }}
                >
                  {data.type.toUpperCase()}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              ...styles.startButton,
            }}
          >
            <FontAwesome5 name="play" size={18} color={theme.primaryColor} />
          </TouchableOpacity>
        </View>
      </View>
    ));
  };

  return (
    <ScrollView
      style={{ flex: 1, width: "100%", backgroundColor: theme.backgroundColor }}
      refreshControl={
        <RefreshControl
          onRefresh={() => refreshData()}
          refreshing={refresh}
          tintColor={theme.primaryColor}
        />
      }
    >
      <View style={{ ...styles.container }}>
        <View style={styles.centerContainer}>
          <View style={styles.filterButtons}>
            <TouchableOpacity
              style={{
                ...styles.filterButton,
                backgroundColor:
                  selectedCategory === "viewAll"
                    ? theme.primaryOpacityColor
                    : theme.backgroundColor,
                borderColor: theme.primaryColor,
                shadowColor:
                  selectedCategory === "viewAll"
                    ? theme.primaryColor
                    : theme.backgroundColor,
              }}
              onPress={() => {
                setSelectedCategory("viewAll");
              }}
            >
              <Text
                style={{
                  ...regularText,
                  color:
                    selectedCategory === "viewAll"
                      ? "white"
                      : theme.primaryTextColor,
                  padding: 7,
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.filterButton,
                backgroundColor:
                  selectedCategory === "gym"
                    ? theme.primaryOpacityColor
                    : theme.backgroundColor,
                borderColor: theme.primaryColor,
                shadowColor:
                  selectedCategory === "gym"
                    ? theme.primaryColor
                    : theme.backgroundColor,
              }}
              onPress={() => {
                setSelectedCategory("gym");
              }}
            >
              <Text
                style={{
                  ...regularText,
                  color:
                    selectedCategory === "gym"
                      ? "white"
                      : theme.primaryTextColor,
                  padding: 7,
                }}
              >
                Gym
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.filterButton,
                backgroundColor:
                  selectedCategory === "home"
                    ? theme.primaryOpacityColor
                    : theme.backgroundColor,
                borderColor: theme.primaryColor,
                shadowColor:
                  selectedCategory === "home"
                    ? theme.primaryColor
                    : theme.backgroundColor,
              }}
              onPress={() => {
                setSelectedCategory("home");
              }}
            >
              <Text
                style={{
                  ...regularText,
                  color:
                    selectedCategory === "home"
                      ? "white"
                      : theme.primaryTextColor,
                  padding: 7,
                }}
              >
                Home
              </Text>
            </TouchableOpacity>
          </View>
          {renderItems()}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  centerContainer: {
    width: "92%",
  },
  filterButtons: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
  },
  filterButton: {
    borderRadius: 7,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 7,
    ...shadow,
  },
  filterButtonText: {
    fontWeight: "600",
    fontSize: 17,
  },
  itemContainer: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
  },
  startButton: {
    width: 45,
    height: 45,
    marginLeft: "auto",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  startbottom: {
    alignSelf: "center",
  },
});

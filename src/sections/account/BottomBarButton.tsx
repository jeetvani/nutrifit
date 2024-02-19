import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Alert,
} from "react-native";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useTheme } from "../../utils/theme";
import { shadow } from "../../utils/constants";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Device from "expo-device";

const BottomBarButton = forwardRef((props: { navigation: any }, ref) => {
  const theme = useTheme();

  const buttonSize = new Animated.Value(1);
  const mode = new Animated.Value(0);

  useImperativeHandle(ref, () => ({
    close() {
      Animated.sequence([
        Animated.timing(mode, {
          toValue: 0,
          useNativeDriver: false,
        }),
      ]).start();
    },
  }));

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.9,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(mode, {
        toValue: Number(JSON.stringify(mode)) == 0 ? 1 : 0,
        useNativeDriver: false,
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const sizeStyle = {
    transform: [{ scale: buttonSize }],
  };

  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });

  const nutritionX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [
      (Dimensions.get("screen").width + Dimensions.get("screen").height) *
        0.012,
      -(Dimensions.get("screen").width + Dimensions.get("screen").height) *
        0.025,
    ],
  });

  const nutritionY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [
      (Dimensions.get("screen").width + Dimensions.get("screen").height) *
        0.007 -
        (Device.osName == "Android" ? 10 : 0),
      -(Dimensions.get("screen").width + Dimensions.get("screen").height) *
        0.04 -
        (Device.osName == "Android" ? 10 : 0),
    ],
  });

  const tribuY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [
      (Dimensions.get("screen").width + Dimensions.get("screen").height) *
        0.007 -
        (Device.osName == "Android" ? 10 : 0),
      -(Dimensions.get("screen").width + Dimensions.get("screen").height) *
        0.052 -
        (Device.osName == "Android" ? 10 : 0),
    ],
  });

  const comingSoonX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [
      (Dimensions.get("screen").width + Dimensions.get("screen").height) *
        0.012,
      (Dimensions.get("screen").width + Dimensions.get("screen").height) *
        0.048,
    ],
  });

  const comingSoonY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [
      (Dimensions.get("screen").width + Dimensions.get("screen").height) *
        0.007 -
        (Device.osName == "Android" ? 10 : 0),
      -(Dimensions.get("screen").width + Dimensions.get("screen").height) *
        0.04 -
        (Device.osName == "Android" ? 10 : 0),
    ],
  });
  return (
    <View>
      <Animated.View
        style={{
          position: "absolute",
          alignSelf: "center",
          left: nutritionX,
          top: nutritionY,
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("AccountFlow")}
          activeOpacity={1}
          style={[
            {
              ...styles.secundaryButton,
              backgroundColor: theme.primaryColor,
            },
          ]}
        >
          <Ionicons
            name="person"
            style={{}}
            size={16}
            color={theme.oppositeColor}
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          left:
            (Dimensions.get("screen").width + Dimensions.get("screen").height) *
            0.012,
          top: tribuY,
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Tribu")}
          activeOpacity={1}
          style={[
            {
              ...styles.secundaryButton,
              backgroundColor: theme.primaryColor,
              shadowColor: theme.primaryColor,
              borderColor: theme.primaryColor,
            },
          ]}
        >
          <Ionicons
            name="people"
            style={{}}
            size={18}
            color={theme.oppositeColor}
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          top: comingSoonY,
          left: comingSoonX,
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Favorites")}
          activeOpacity={1}
          style={[
            {
              ...styles.secundaryButton,
              backgroundColor: theme.primaryColor,
              shadowColor: theme.primaryColor,
              borderColor: theme.primaryColor,
            },
          ]}
        >
          <Ionicons
            name="heart"
            style={{}}
            size={18}
            color={theme.oppositeColor}
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={sizeStyle}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => handlePress()}
          style={[
            {
              ...styles.container,
              backgroundColor: theme.primaryColor,
              borderWidth: 3,
              borderColor:
                theme.theme == "light" ? "white" : theme.primaryColor,
              ...shadow,
              shadowColor: theme.shadowColor,
              shadowOffset: {
                width: 0,
                height: 1,
              },
            },
          ]}
        >
          <Animated.View style={{ transform: [{ rotate: rotation }] }}>
            <Ionicons
              name="add"
              style={{ width: 37, height: 40 }}
              size={40}
              color={"white"}
            />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    marginTop:
      -(Dimensions.get("screen").width + Dimensions.get("screen").height) *
        0.015 -
      (Device.osName == "Android" ? 10 : 0),
    width:
      (Dimensions.get("screen").width + Dimensions.get("screen").height) * 0.05,
    height:
      (Dimensions.get("screen").width + Dimensions.get("screen").height) * 0.05,
    justifyContent: "center",
    alignItems: "center",
  },
  secundaryButton: {
    position: "absolute",
    borderRadius: 100,
    width:
      (Dimensions.get("screen").width + Dimensions.get("screen").height) *
      0.025,
    height:
      (Dimensions.get("screen").width + Dimensions.get("screen").height) *
      0.025,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomBarButton;

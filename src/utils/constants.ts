import { TextStyle } from "react-native";

export const imageUrl = process.env.EXPO_PUBLIC_BASE_IMAGES_URL;

export const principalColor = "#7DB928";
export const primaryColor = "#000";
export const secundaryColor = "#141417";

export const blackTransparent = "rgba(0, 0, 0, 0.7)";

export const grayText = "#BEBEBE";

export const inputText = "#9B9B9B";

export const titleText: TextStyle = {
  fontSize: 22,
  fontWeight: "500",
};

export const subTitleText: TextStyle = {
  fontSize: 18,
  fontWeight: "300",
};

export const mediumText: TextStyle = {
  fontSize: 16,
  fontWeight: "400",
};

export const regularText: TextStyle = {
  fontSize: 14,
  fontWeight: "300",
};

export const smallText: TextStyle = {
  fontSize: 10,
  fontWeight: "300",
};

export const shadow = {
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.4,
  shadowRadius: 1.5,
  elevation: 2,
};

export const shadowInverse = {
  shadowOffset: {
    width: 0,
    height: -4,
  },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 2,
};

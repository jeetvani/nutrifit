import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import React from "react";
import { useTheme } from "../../utils/theme";
import { mediumText, regularText } from "../../utils/constants";

interface Props {
  label: string;
  description?: string;
  value: string;
  selectValue: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  style?: object;
}

export default function Select(props: Props) {
  const theme = useTheme();
  return (
    <TouchableHighlight
      underlayColor="transparent"
      style={{
        ...styles.container,
        ...props.style,
        borderColor:
          props.value == props.selectValue
            ? theme.primaryColor
            : theme.secundaryTextColor,
      }}
      onPress={() => props.setValue(props.selectValue)}
    >
      <View style={styles.subContainer}>
        <View
          style={{
            ...styles.checkPoint,
            borderColor:
              props.value == props.selectValue
                ? theme.primaryColor
                : theme.secundaryTextColor,
            backgroundColor:
              props.value == props.selectValue ? theme.primaryColor : undefined,
          }}
        />
        <View style={{ marginLeft: 15 }}>
          <Text
            style={{
              ...regularText,
              fontWeight: "400",
              color: theme.primaryTextColor,
            }}
          >
            {props.label}
          </Text>
          {props.description ? (
            <Text
              style={{
                ...regularText,
                color: theme.secundaryTextColor,
              }}
            >
              {props.description}
            </Text>
          ) : null}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    width: "90%",
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
  },
  checkPoint: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 100,
  },
});

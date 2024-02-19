import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Alert,
} from "react-native";

import React, { useState } from "react";
import {
  subTitleText,
  mediumText,
  regularText,
  shadow,
  titleText,
} from "../../../../../utils/constants";

import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { useTheme } from "../../../../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import Select from "../../../../../components/select/Select";

interface OptionProps {
  label: string;
  description: string;
  selected: boolean;
  onPress: () => void;
}
const Option: React.FC<OptionProps> = ({
  label,
  description,
  selected,
  onPress,
}) => {
  const theme = useTheme();

  const scaleValue = new Animated.Value(0.8);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.8,
      useNativeDriver: false, // Usa false si estás animando propiedades no compatibles con el driver nativo
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      friction: 0,
      tension: 0.5,
      useNativeDriver: false, // Usa false si estás animando propiedades no compatibles con el driver nativo
    }).start();
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.optionContainer,
        borderColor: selected ? theme.primaryColor : theme.secundaryColor,
      }}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Animated.View
          style={{
            width: 30,
            height: 30,
            backgroundColor: selected
              ? theme.primaryOpacityColor
              : theme.secundaryColor,
            borderRadius: 100,
            alignSelf: "center",
            transform: [{ scale: scaleValue }],
          }}
        />
        <View style={{ flexDirection: "column", marginLeft: 10 }}>
          <Text
            style={{
              ...styles.optionLabel,
              color: selected ? theme.primaryColor : theme.primaryTextColor,
            }}
          >
            {label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CoachGender: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  function handleOptionPress(index: number): void {
    setSelectedOption(index);
  }
  const [value, setValue] = useState("");

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
            Genero de tu entrenador
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.centerContainer}
        >
          <Text style={{ ...mediumText, color: theme.secundaryTextColor }}>
            ¿Tienes alguna preferencia con el genero de tu entrenador?
          </Text>

          <View style={styles.optionsContainer}>
            <Select
              style={{ marginBottom: 10 }}
              label="Masculino"
              description=""
              setValue={setValue}
              value={value}
              selectValue="masculine"
            ></Select>

            <Select
              style={{ marginBottom: 10 }}
              label="Femenino"
              description=""
              setValue={setValue}
              value={value}
              selectValue="female"
            ></Select>

            <Select
              style={{ marginBottom: 10 }}
              label="Me es indiferente"
              description=""
              setValue={setValue}
              value={value}
              selectValue="indifferent"
            ></Select>
          </View>
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
                "Desea modifcar el genero de su entrenador",
                "Este cambio modificara su entrenador",
                [
                  { text: "cancelar", style: "destructive" },
                  { text: "Modificar", onPress: () => console.log(value) },
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
              Guardar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
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

    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  titleTop: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  arrow: {
    alignSelf: "center",
  },
  subTitletext: {
    marginTop: 10,
  },
  text: { ...mediumText, fontWeight: "300", width: "92%", marginTop: 3 },
  optionsContainer: {
    marginTop: 20,
  },
  optionContainer: {
    width: "100%",
    height: 55,
    borderRadius: 10,
    borderWidth: 1.2,
    ...shadow,
    elevation: 1,
    justifyContent: "center",
    padding: 10,
    marginBottom: 12,
  },
  optionLabel: {
    ...mediumText,
    fontWeight: "500",
    marginTop: 2,
  },
  optionDescription: {
    ...regularText,
    width: "48%",
  },
  buttomContainer: {
    justifyContent: "center",
    width: "90%",
    height: 50,
    alignSelf: "center",
    ...shadow,
    marginTop: 30,
    borderRadius: 15,
    elevation: 8,
  },
  keepContainer: {
    alignSelf: "center",
    ...subTitleText,
    fontWeight: "400",
    color: "white",
  },
});
export default CoachGender;

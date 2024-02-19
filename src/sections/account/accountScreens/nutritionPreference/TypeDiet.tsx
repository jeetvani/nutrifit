import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import {
  subTitleText,
  mediumText,
  regularText,
  shadow,
  titleText,
} from "../../../../utils/constants";

import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { useTheme } from "../../../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import Select from "../../../../components/select/Select";
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

  return (
    <TouchableOpacity
      style={{
        ...styles.optionContainer,
        borderColor: selected ? theme.primaryColor : theme.secundaryColor,
        backgroundColor: theme.backgroundColor,
        shadowColor: theme.shadowColor,
      }}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: selected
              ? theme.primaryOpacityColor
              : theme.secundaryColor,
            borderRadius: 100,
            marginTop: 6,
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
const TypeDiet: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const options = [
    { label: "Casa" },
    { label: "Gimnasio", description: "Voy al gym o tengo un gym en casa" },
  ];
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
            Tipos de dietas
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
            ¿Que tipo de alimentacion sigues?
          </Text>
          <Text
            style={{
              ...mediumText,
              color: theme.secundaryTextColor,
              marginTop: 5,
            }}
          >
            Te sugerimos recetas acorde a tus preferencias alimenticias
          </Text>
          <View style={styles.optionsContainer}>
            <Select
              style={{ marginBottom: 10 }}
              label="Omnivora"
              description=""
              setValue={setValue}
              value={value}
              selectValue="Omnivora"
            ></Select>

            <Select
              style={{ marginBottom: 10 }}
              label="Ovolacteo Vegetariana"
              description=""
              setValue={setValue}
              value={value}
              selectValue="Vegetarian"
            ></Select>

            <Select
              style={{ marginBottom: 10 }}
              label="Vegana"
              description=""
              setValue={setValue}
              value={value}
              selectValue="Vegan"
            ></Select>

            <Select
              style={{ marginBottom: 10 }}
              label="Keto"
              description=""
              setValue={setValue}
              value={value}
              selectValue="Keto"
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
                "Desea modifcar el tipo de dieta",
                "Este cambio modificara el tipo de dietas ",
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

    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  titleTop: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  containerTitleTop: { alignSelf: "flex-start", flexDirection: "row" },

  arrow: {
    alignSelf: "center",
  },
  subTitletext: {
    marginTop: 12,
    ...subTitleText,
    fontWeight: "400",
  },
  text: { ...mediumText, fontWeight: "300", width: "92%" },
  optionsContainer: {
    marginTop: 20,
  },
  optionContainer: {
    width: "100%",
    height: 65,
    borderRadius: 10,
    borderWidth: 1.2,
    ...shadow,
    justifyContent: "center",

    padding: 10,
    marginBottom: 10,
  },
  optionLabel: {
    ...mediumText,
    fontWeight: "500",
    marginTop: 6.5,
  },
  optionDescription: {
    ...regularText,
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
export default TypeDiet;

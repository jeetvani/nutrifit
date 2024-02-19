import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
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
const Eating: React.FC = () => {
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
          <View style={styles.containerTitleTop}>
            <TouchableOpacity
              onPress={() => navigation.navigate("account")}
              style={styles.arrow}
            >
              <AntDesign
                name="arrowleft"
                size={24}
                color={theme.primaryTextColor}
              />
            </TouchableOpacity>

            <Text style={{ ...styles.titleTop, color: theme.primaryTextColor }}>
              ¿Con quien comes?
            </Text>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.centerContainer}
        >
          <Text
            style={{ ...styles.subTitletext, color: theme.primaryTextColor }}
          >
            ¿En tu dia a dia ¿sueles comer solo o acompañado?
          </Text>

          <View style={styles.optionsContainer}>
            <Option
              label="Suelo comer solo pero tengo amigos"
              description=""
              selected={selectedOption === 0}
              onPress={() => handleOptionPress(0)}
            />
            <Option
              label="Acompañado por mi pareja, casi siempre"
              description=""
              selected={selectedOption === 1}
              onPress={() => handleOptionPress(1)}
            />
            <Option
              label="A veces solo, a veces con mi pareja"
              description=""
              selected={selectedOption === 2}
              onPress={() => handleOptionPress(2)}
            />
            <Option
              label="otra opcion"
              description=""
              selected={selectedOption === 3}
              onPress={() => handleOptionPress(3)}
            />
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
    width: "100%",
    height: 70,
    borderRadius: 10,
    display: "flex",
    elevation: 8,
    justifyContent: "center",
  },
  titleTop: {
    ...subTitleText,
    fontWeight: "400",
    marginLeft: 85,
  },
  containerTitleTop: { alignSelf: "flex-start", flexDirection: "row" },

  arrow: {
    marginLeft: 15,
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
    marginTop: 3,
    alignSelf: "center",
    width: "95%",
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
export default Eating;

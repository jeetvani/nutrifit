import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  TouchableHighlight,
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
  const [scaleValue] = useState(new Animated.Value(selected ? 0.9 : 0.8));

  const handlePressIn = () => {
    const pressTimeout = setTimeout(() => {
      Animated.spring(scaleValue, {
        toValue: 0.8,
        useNativeDriver: false,
      }).start();
    }, 5000);
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: selected ? 0.9 : 0.85,
      friction: 0,
      tension: 0.5,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableHighlight
      style={{
        ...styles.optionContainer,
        borderColor: selected ? theme.primaryColor : theme.secundaryColor,
      }}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      underlayColor={theme.primaryOpacityColorTwo}
    >
      <View style={{ flexDirection: "row" }}>
        <Animated.View
          style={{
            width: 30,
            height: 30,
            backgroundColor: selected
              ? theme.primaryOpacityColor
              : theme.backgroundColor,
            borderWidth: 3,
            borderRadius: 5,
            borderColor: selected
              ? theme.primaryOpacityColor
              : theme.secundaryColor,
            alignSelf: "center",
            transform: [{ scale: scaleValue }],
          }}
        >
          {selected && (
            <AntDesign
              name="check"
              size={19}
              color={theme.backgroundColor}
              style={{ alignSelf: "center", marginTop: 3 }}
            />
          )}
        </Animated.View>
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
    </TouchableHighlight>
  );
};

const MyFoods: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  function handleOptionPresst(index: number): void {
    const isSelected = selectedOptions.includes(index);

    if (isSelected) {
      const newSelectedOptions = selectedOptions.filter(
        (item) => item !== index
      );
      setSelectedOptions(newSelectedOptions);
    } else {
      setSelectedOptions([...selectedOptions, index]);
    }
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
            Mis comidas
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
            Indica las comidas que quieres incluir en tu plan
          </Text>

          <View style={styles.optionsContainer}>
            <Option
              label="Desayuno"
              selected={selectedOptions.includes(0)}
              onPress={() => handleOptionPresst(0)}
              description={""}
            />
            <Option
              label="Snack"
              selected={selectedOptions.includes(1)}
              onPress={() => handleOptionPresst(1)}
              description={""}
            />
            <Option
              label="Comida"
              selected={selectedOptions.includes(2)}
              onPress={() => handleOptionPresst(2)}
              description={""}
            />
            <Option
              label="Cena"
              selected={selectedOptions.includes(3)}
              onPress={() => handleOptionPresst(3)}
              description={""}
            />
            <Option
              label="Postre cena"
              selected={selectedOptions.includes(4)}
              onPress={() => handleOptionPresst(4)}
              description={""}
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
            onPress={() =>
              Alert.alert(
                "¿Desea modifcar las comidas?",
                "Este cambio modificara Nutricion y sus comidas",
                [
                  { text: "cancelar", style: "destructive" },
                  { text: "Modificar", onPress: () => console.log() },
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

  containerTitle: {
    width: "92%",
    height: 70,
    borderRadius: 10,
    display: "flex",

    alignItems: "center",
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
    elevation: 1.5,
    justifyContent: "center",
    padding: 10,
    marginBottom: 17,
  },
  optionLabel: {
    ...mediumText,
    fontWeight: "400",
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
export default MyFoods;

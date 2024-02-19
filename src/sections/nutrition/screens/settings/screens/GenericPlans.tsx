import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  subTitleText,
  titleText,
  mediumText,
  secundaryColor,
  regularText,
} from "../../../../../utils/constants";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { useTheme } from "../../../../../utils/theme";
import MenuBar from "../../../../../components/menuBar/MenuBar";
import Constants from "expo-constants";
import * as Device from "expo-device";

export default function GenericPlans() {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{
        ...styles.screenContainer,
        backgroundColor: theme.backgroundColor,
        paddingTop: Device.osName == "Android" ? Constants.statusBarHeight : 0,
      }}
    >
      <View
        style={{
          ...styles.topBar,
        }}
      >
        <TouchableOpacity style={styles.arrow}>
          <AntDesign
            name="arrowleft"
            size={24}
            color={theme.primaryTextColor}
          />
        </TouchableOpacity>

        <View style={{ position: "absolute", alignSelf: "center" }}>
          <Text
            style={{
              ...subTitleText,
              fontSize: 16,
              color: theme.primaryTextColor,
              fontWeight: "400",
            }}
          >
            Tips para una alimentación saludable
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.centerContainer}
      >
        <Text
          style={{
            ...regularText,
            marginTop: 20,
            color: theme.secundaryTextColor,
          }}
        >
          Cortito y al pie: no tienen en cuenta tus necesidades y pretenden
          abordar algo sumamente personal, como la alimentación, con soluciones
          enlatadas a las que tú te tienes que adaptar.
        </Text>
        <Text
          style={{
            ...styles.text,
            ...regularText,
            color: theme.secundaryTextColor,
          }}
        >
          Un plan nutricional ajustado a tus necesidades, gustos, hábitos,
          intolerancias y alergias es fundamental para que puedas sostenerlo en
          el tiempo y.... soltarlo
        </Text>
        <Text
          style={{
            ...styles.text,
            ...regularText,
            color: theme.secundaryTextColor,
          }}
        >
          Los planes genéricos generan un vinculo amo-esclavo: lo sigues y todo
          esta bien; te saltas una comida y ya te mata la culpa; se desmorona
          todo tu progreso y lo abandonas por completo.
        </Text>
        <Text
          style={{
            ...styles.text,
            ...regularText,
            color: theme.secundaryTextColor,
          }}
        >
          Un plan personalizado se adelanta a esas circunstancias y te prepara
          para que puedas acomodarte y entrar de nuevo en sontonía.
        </Text>
        <Text
          style={{
            ...styles.text,
            ...regularText,
            color: theme.secundaryTextColor,
          }}
        >
          Al final, el objetivo es que, llegando el momento, la puedas dejar
          porque ya has aprendido a comer saludablemente y según tus
          requerimientos.
        </Text>
        <Text
          style={{
            ...styles.text,
            ...regularText,
            color: theme.secundaryTextColor,
          }}
        >
          Hay muchas variaciones de pasajes de Lorem Ipsum disponibles, pero la
          mayoría ha sufrido alguna alteración, mediante humor inyectado o
          palabras aleatorias que no parecen ni un poco creíbles. Si vas a
          utilizar un pasaje de Lorem Ipsum, debes asegurarte de que no haya
          nada vergonzoso escondido en medio del texto.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  topBar: {
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
  },
  centerContainer: { width: "92%", alignSelf: "center" },

  subTitle: { ...subTitleText, marginTop: 5 },
  containerTitle: {
    backgroundColor: secundaryColor,
    width: "100%",
    height: 100,
    borderRadius: 10,
    display: "flex",

    alignItems: "center",
    flexDirection: "row",
  },
  titleTop: {
    marginTop: 20,
    marginLeft: 25,
  },
  arrow: {
    marginLeft: 20,
    width: 24,
    height: 24,
  },
  questions: { marginLeft: "auto", marginTop: 25, marginRight: 20 },

  text: {
    marginTop: 5,
  },
});

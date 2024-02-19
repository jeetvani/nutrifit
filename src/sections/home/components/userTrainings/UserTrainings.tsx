import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../../redux/store";
import Training from "./components/Training";
import {
  mediumText,
  regularText,
  smallText,
  subTitleText,
} from "../../../../utils/constants";
import { useTheme } from "../../../../utils/theme";
import { useTranslation } from "react-i18next";

export default function UserTrainings() {
  const theme = useTheme();
  const { t } = useTranslation();
  const trainingsState = useAppSelector(
    (state) => state.trainings.userTrainings
  );
  const [trainings, setTrainings] = useState(trainingsState);

  useEffect(() => {
    setTrainings(trainingsState);
  }, [trainingsState]);

  return (
    <View style={{ width: "100%" }}>
      <Text
        style={{
          ...subTitleText,
          color: theme.primaryTextColor,
          marginTop: 15,
        }}
      >
        {t("UserTrainings:Tus_Entrenos")}
      </Text>
      {trainings.length != 0 ? (
        trainings.map((training) => <Training data={training} />)
      ) : (
        <View
          style={{
            height: 100,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ ...regularText, color: theme.primaryTextColor }}>
            {t("UserTrainings:No_estas_anotado_a_ningun_entrenamiento")}
          </Text>
          <Text style={{ ...smallText, color: theme.primaryTextColor }}>
            {t("UserTrainings:Revisa_los_entrenamientos")}
          </Text>
        </View>
      )}
    </View>
  );
}

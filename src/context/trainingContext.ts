import { createContext, useContext } from "react";

export const TrainingContext = createContext({});

export const useTraining = () => {
  const theme = useContext(TrainingContext);
  return theme;
};

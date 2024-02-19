import { createContext, useContext } from "react";

export const loads = {
  load: true,
  noLoad: false,
};

export const LoadContext = createContext(loads.noLoad);

export const useload = () => {
  const theme = useContext(LoadContext);
  return theme;
};

import { createContext } from "react";

export type AuthState = {
  name: string;
  last_name: string;
  user_name: string;
  sex: string;
  birth_day: string;
  height: string;
  weight: string;
  objetive: string;
  steps: string;
  training_days: string;
  level: string;
  place: string;
  email: string;
  password: string;
};

type AuthContextType = {
  newUser: AuthState;
  setUser: React.Dispatch<React.SetStateAction<AuthState>>;
};
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

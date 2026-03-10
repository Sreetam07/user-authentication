import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../types/authTypes";

export const saveUser = async (user: User): Promise<void> => {
  await AsyncStorage.setItem("user", JSON.stringify(user));
};

export const getUser = async (): Promise<User | null> => {
  const data = await AsyncStorage.getItem("user");
  return data ? (JSON.parse(data) as User) : null;
};

export const removeUser = async (): Promise<void> => {
  await AsyncStorage.removeItem("user");
};

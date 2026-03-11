import React, { createContext, useState, useEffect } from "react";
import { AuthContextType, User } from "../types/authTypes";
import { saveUser, getUser } from "../services/storage";

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const storedUser = await getUser();
    if (storedUser) {
      setUser(storedUser);
    }
  };

  const login = async (email: string, password: string) => {
    const storedUser = await getUser();

    if (!storedUser || storedUser.email !== email) {
      throw new Error("Invalid credentials");
    }

    setUser(storedUser);
  };

  const signup = async (name: string, email: string, password: string) => {
    const newUser = { name, email };
    await saveUser(newUser);
    setUser(newUser);
  };

  const logout = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

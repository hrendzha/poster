import React, { createContext, useContext, useState, ReactNode } from "react";

// Define types
interface User {
  id?: string;
  name?: string;
  email?: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// Create Context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface IProps {
  children: ReactNode;
}

// Provider component
export const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<User | null>({ name: "dev" });

  const login = (userData: User) => setUser(userData);
  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

// Custom hook for accessing the context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

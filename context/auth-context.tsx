"use client";
import { fetchUser } from "@/api/strapi";
import { IUser } from "@/interfaces/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextInterface {
  user: IUser | null;
  isAuth: boolean;
}

const AuthContext = createContext<AuthContextInterface>({
  user: null,
  isAuth: false,
});

interface AuthProviderProps {
  children: React.ReactNode;
  token?: string;
}

export const AuthProvider = ({ children, token }: AuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (token && !user) {
      fetchUser(token).then((data) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth: Boolean(token),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

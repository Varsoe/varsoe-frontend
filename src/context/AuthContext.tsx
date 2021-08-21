import React, { useState, createContext, useContext, PropsWithChildren } from 'react';

export type User = Record<string, unknown>;
export type AuthContextType = {
  user: User;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  isAuth: boolean;
  hasUser: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: {},
  hasUser: false,
  setUser: () => {},
  token: null,
  setToken: () => {},
  isAuth: false,
});
export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {}
export const AuthProvider = ({ children }: PropsWithChildren<AuthProviderProps>) => {
  const [user, setUser] = useState<User>({});
  const [token, setToken] = useState<string | null>(null);
  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, isAuth: !!token, hasUser: Object.keys(user).length > 0 }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import axios from 'axios';
import { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import fakeAuthProvider from './Auth';
interface User {
  name: string;
  email: string;
  password: string;
}
interface propChildren {
  children: React.ReactNode;
}
export interface AuthContextType {
  user: User | null;
  signIn: (user: User, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}
export const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider: React.FC<propChildren> = ({ children }) => {
  const [user, setUser] = useLocalStorage<User | null>('user', null);

  const signIn = (newUser: User | null, callback: VoidFunction) => {
    return fakeAuthProvider.signIn(() => {
      setUser(newUser);
      callback();
    });
  };
  let signOut = (callback: VoidFunction) => {
    return fakeAuthProvider.signOut(() => {
      setUser(null);
      callback();
    });
  };
  let value = { user, signIn, signOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;

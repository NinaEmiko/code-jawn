import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  userId: number;
  username: string;
  email: string;
}

interface UserContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (userData: User) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    console.log("Logging out...");
  
    setCurrentUser(null);
    setIsAuthenticated(false);
  };


  return (
    <UserContext.Provider value={{ currentUser, isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

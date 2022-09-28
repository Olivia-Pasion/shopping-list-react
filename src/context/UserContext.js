import { createContext, useContext, useState } from 'react';
import { getUser } from '../services/auth';

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUserContext };
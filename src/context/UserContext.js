import { createContext, useContext, useState } from 'react';

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = 
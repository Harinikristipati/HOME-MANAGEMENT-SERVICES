import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [memberCount, setMemberCount] = useState(0);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
    setMemberCount((prevCount) => prevCount + 1);
  };

  return (
    <UserContext.Provider value={{ users, memberCount, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

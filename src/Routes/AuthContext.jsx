import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <AuthContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </AuthContext.Provider>
  );
};

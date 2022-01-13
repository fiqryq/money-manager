import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("profile"));
    setUser(data);
  }, []);

  return <AppContext.Provider value={user}>{children}</AppContext.Provider>;
}

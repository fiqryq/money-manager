import { createContext, useContext, useState } from "react";

export const AppContext = createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const data = JSON.parse(localStorage.getItem("profile"));
  const [user] = useState(data);

  return <AppContext.Provider value={user}>{children}</AppContext.Provider>;
}

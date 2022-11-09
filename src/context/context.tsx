import React, { useReducer } from "react";
import { createContext, useState } from "react";
import { EventValuesContextType, IUserModel } from "../utils/types";

export const EventValues = createContext<EventValuesContextType>({
  mode: "true",
  screenSize: 0,
  isFetching: false,
  setScreenSize: () => {},
  setMode: () => {},
  toggleTheme: () => {},
  setIsFetching: () => {},
  setClients: () => {},
  clients: [],
  user: null,
  setUser: () => {},
});

export const EventValuesContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState("true");
  const [screenSize, setScreenSize] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [clients, setClients] = useState<any[]>([]);
  const [user, setUser] = useState<IUserModel | null>(null);

  const toggleTheme = (mode: string): void => {
    if (mode === "false") {
      setMode("true");
      localStorage.setItem("mode", "true");
    } else {
      setMode("false");
      localStorage.setItem("mode", "false");
    }
  };

  return (
    <EventValues.Provider
      value={{
        screenSize,
        clients,
        setClients,
        isFetching,
        setIsFetching,
        setScreenSize,
        toggleTheme,
        mode,
        setMode,
        setUser,
        user,
      }}
    >
      {children}
    </EventValues.Provider>
  );
};

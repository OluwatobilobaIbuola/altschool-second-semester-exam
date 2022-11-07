import { createContext, useState } from "react";
import { EventValuesContextType } from "../utils/types";

export const EventValues = createContext<EventValuesContextType>(null! || {});

export const EventValuesContext = ({ children }: { children: any }) => {
  const [mode, setMode] = useState("false");
  const [screenSize, setScreenSize] = useState(0);

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
      value={{ screenSize, setScreenSize, toggleTheme, mode, setMode }}
    >
      {children}
    </EventValues.Provider>
  );
};

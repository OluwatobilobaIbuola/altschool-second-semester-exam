import React, { useContext, useState } from "react";
import { EventValues } from "../context/context";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function ThemeMode() {
  const { toggleTheme, mode } = useContext(EventValues);
  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={(e) => {
        toggleTheme(mode);
      }}
      color="inherit"
    >
      {mode === "false" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}

export default ThemeMode;

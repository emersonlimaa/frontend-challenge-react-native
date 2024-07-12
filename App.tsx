import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>{<Routes />}</ThemeProvider>
    </NavigationContainer>
  );
}

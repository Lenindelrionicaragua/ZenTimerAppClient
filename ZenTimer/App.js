import React from "react";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { AppContainer } from "./styles/AppStyles";
import "@expo/metro-runtime";
import { registerRootComponent } from "expo";

export default function App() {
  return (
    <AppContainer testID="app-container">
      <LoginScreen />
    </AppContainer>
  );
}

import React from "react";
// import LoginScreen from "./screens/LoginScreen/LoginScreen";
// import SignupScreen from "./screens/SignupScreen/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";
import { AppContainer } from "./styles/AppStyles";
import "@expo/metro-runtime";
import { registerRootComponent } from "expo";

export default function App() {
  return (
    <AppContainer testID="app-container">
      <WelcomeScreen testID="welcome-screen" />
      {/* <SignupScreen testID="signup-screen" /> */}
      {/* <LoginScreen testID="login-screen" /> */}
    </AppContainer>
  );
}

registerRootComponent(App);

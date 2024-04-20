import React from "react";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
// import SignupScreen from "./screens/SignupScreen/SignupScreen";
// import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";
import { AppContainer } from "./styles/AppStyles";
// import "@expo/metro-runtime";
// import { registerRootComponent } from "expo";

export default function App() {
  return (
    <AppContainer testID="app-container">
      <LoginScreen testID="login-screen" />
      {/* <SignupScreen testID="signup-screen" /> */}
      {/* <WelcomeScreen testID="welcome-screen" /> */}
    </AppContainer>
  );
}

// registerRootComponent(App);

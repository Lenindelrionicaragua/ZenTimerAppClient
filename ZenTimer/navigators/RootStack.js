import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import LoginScreen from "./../screens/LoginScreen/LoginScreen";
import SignupScreen from "./../screens/SignupScreen/SignupScreen";
import WelcomeScreen from "./../screens/WelcomeScreen/WelcomeScreen";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          testID="login-screen"
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          testID="signup-screen"
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          testID="welcome-screen"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

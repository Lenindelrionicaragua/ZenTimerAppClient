import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import SignInForm from "../components/SignInForm";

export default function LoginScreen() {
  return (
    <View testID="login-container" style={styles.loginContainer}>
      <Image
        source={require("../assets/logoZenTimer.png")}
        testID="img"
        style={styles.image}
      />
      <Text testID="welcome-message" style={styles.welcomeMessage}>
        Welcome to ZenTimer! Manage your time with serenity.
        {"\n"}Log in and track your time.
      </Text>
      <SignInForm />
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: "center",
    textAlign: "justify",
    justifyContent: "center",
    backgroundColor: "black",
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 4,
    borderColor: "#ecc4d4",
    borderRadius: 100,
    padding: 3,
  },
  welcomeMessage: {
    color: "white",
    textAlign: "center",
    margin: 40,
  },
});

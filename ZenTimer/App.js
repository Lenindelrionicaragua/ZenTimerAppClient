import React from "react";
import { View, StyleSheet } from "react-native";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container} testID="app-container">
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
});

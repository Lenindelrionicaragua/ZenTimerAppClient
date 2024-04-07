import React from "react";
import { Image, View, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <View testID="login-container" style={styles.loginContainer}>
      <Image
        source={require("../assets/logoZenTimer.png")}
        testID="img"
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6c6c8c",
    width: "100vh",
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 100,
    padding: 3,
  },
});

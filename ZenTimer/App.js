import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return (
    <View testID="app-container" style={styles.appContainer}>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the root component takes up the entire screen
  },
  appContainer: {
    flex: 1,
    backgroundColor: "#6c6c8c",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

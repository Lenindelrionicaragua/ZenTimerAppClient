import React from "react";
import { render } from "@testing-library/react-native";
import RootStack from "../navigators/RootStack";

test("renders RootStack correctly", () => {
  const { getByTestId } = render(<RootStack />);
  const rootStackElement = getByTestId("root-stack");
  expect(rootStackElement).toBeTruthy();
});

test("RootStack renders correctly", async () => {
  // Render the RootStack component with renderer
  const rootInstance = renderer.create(<RootStack />).root;

  // Find elements by type
  const loginScreen = rootInstance.findByType(LoginScreen);
  const signupScreen = rootInstance.findByType(SignupScreen);
  const welcomeScreen = rootInstance.findByType(WelcomeScreen);

  // Expect elements to be present
  expect(loginScreen).toBeTruthy();
  expect(signupScreen).toBeTruthy();
  expect(welcomeScreen).toBeTruthy();
});

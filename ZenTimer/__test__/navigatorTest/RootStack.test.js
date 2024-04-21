import React from "react";
import renderer from "react-test-renderer";
import RootStack from "../../navigators/RootStack";

// Test to create a snapshot of the RootStack component
test("RootStack snapshot matches previous version", () => {
  // Create an instance of the RootStack component using the renderer
  const rootStackInstance = renderer.create(<RootStack />);
  // Convert the instance to its JSON representation
  const rootStackJson = rootStackInstance.toJSON();

  // Verify that the generated JSON matches the expected snapshot
  expect(rootStackJson).toMatchSnapshot();
});

// Test to verify the rendering of the RootStack component
test("RootStack renders correctly", async () => {
  // Render the RootStack component with the renderer
  const rootInstance = renderer.create(<RootStack />).root;

  // Find elements by type within the instance
  const loginScreen = rootInstance.findByType(LoginScreen);
  const signupScreen = rootInstance.findByType(SignupScreen);
  const welcomeScreen = rootInstance.findByType(WelcomeScreen);

  // Expect the elements to be present
  expect(loginScreen).toBeTruthy();
  expect(signupScreen).toBeTruthy();
  expect(welcomeScreen).toBeTruthy();
});

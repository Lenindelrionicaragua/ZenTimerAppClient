import React from "react";
import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import App from "../App";
import LoginScreen from "../screens/LoginScreen/LoginScreen";

// Should be a function
// Should render a View element with Id 'app-container'
// Should render the <LoginScreen/> component

describe("App", () => {
  it("should be a function", () => {
    expect(typeof App).toBe("function");
  });

  it("Should render a View element with the test ID 'app-container'", () => {
    const { getByTestId } = render(<App />);
    const containerElement = getByTestId("app-container");
    expect(containerElement).toBeTruthy();
  });

  test("Should render the LoginScreen component", () => {
    const loginScreenComponent = renderer.create(<App />);
    const instance = loginScreenComponent.root;
    const loginScreenInstance = instance.findByType(LoginScreen);
    expect(loginScreenInstance).toBeTruthy();
  });
});

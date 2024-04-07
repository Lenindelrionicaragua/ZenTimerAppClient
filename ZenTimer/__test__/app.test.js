import React from "react";
import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import App from "../App";
import LoginScreen from "../screens/LoginScreen";
import { StatusBar } from "react-native";

// should be a function
// should render a View element with Id 'app-container'
// should render the <LoginScreen/> component
// should render the <StatusBar/> component

describe("App", () => {
  it("should be a function", () => {
    expect(typeof App).toBe("function");
  });

  it("should render a view element named 'app-container", () => {
    const { getByTestId } = render(<App />);
    const containerElement = getByTestId("app-container");
    expect(containerElement).toBeTruthy();
  });

  test("should render the LoginScreen component", () => {
    const component = renderer.create(<App />);
    const instance = component.root;
    const loginScreenInstance = instance.findByType(LoginScreen);
    expect(loginScreenInstance).toBeTruthy();
  });

  test("should render the StatusBar component", () => {
    const component = renderer.create(<App />);
    const instance = component.root;
    const loginScreenInstance = instance.findByType(StatusBar);
    expect(loginScreenInstance).toBeTruthy();
  });
});

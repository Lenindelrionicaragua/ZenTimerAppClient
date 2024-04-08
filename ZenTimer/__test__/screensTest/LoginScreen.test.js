import React from "react";
import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import { act } from "react-test-renderer";

import LoginScreen from "../../screens/LoginScreen";
import SignInForm from "../../components/SignInForm";

// should be a function
// should render a View element with Id "login-container"
// should render a <Image> element with Id "img"
// should render a Text element with Id 'welcome-message'
// should render a signin component

describe("LoginScreen", () => {
  it("should be a function", () => {
    expect(typeof LoginScreen).toBe("function");
  });

  it("should render a view element name login-container", () => {
    const { getByTestId } = render(<LoginScreen />);
    const containerElement = getByTestId("login-container");
    expect(containerElement).toBeTruthy();
  });

  it("should render a <Image> element", () => {
    const { getByTestId } = render(<LoginScreen />);
    const imgElement = getByTestId("img");
    expect(imgElement).toBeTruthy();
  });

  it("should render a welcome message", async () => {
    const { getByTestId } = render(<LoginScreen />);
    const welcomeMessage = getByTestId("welcome-message");
    expect(welcomeMessage).toBeTruthy();
  });

  test("should render the Signin component", () => {
    const component = renderer.create(<LoginScreen />);
    const instance = component.root;
    const SignInFormInstance = instance.findByType(SignInForm);
    expect(SignInFormInstance).toBeTruthy();
  });
});

import React from "react";
import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import App from "../App";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignupScreen from "../screens/SignupScreen/SignupScreen";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import { AppContainer } from "../styles/appStyles";

// Rendering functions
const renderApp = () => render(<App />);
const renderAppWithRenderer = () => renderer.create(<App />);

let appRender;
let appRenderWithRenderer;

beforeEach(() => {
  appRender = renderApp();
  appRenderWithRenderer = renderAppWithRenderer();
});

//App.js
describe("App", () => {
  test("renders AppContainer correctly", () => {
    const appSnapshot = appRenderWithRenderer.toJSON();
    expect(appSnapshot).toMatchSnapshot();
  });

  test("render a View element with the test ID 'app-container'", () => {
    const { getByTestId } = appRender;
    const appContainerElement = getByTestId("app-container");
    expect(appContainerElement).toBeTruthy();
  });

  test("render the WelcomeScreen", () => {
    const appInstance = appRenderWithRenderer.root;
    const welcomeScreen = appInstance.findByType(WelcomeScreen);
    expect(welcomeScreen).toBeTruthy();
  });

  // test("render the SignupScreen component", () => {
  //   const appInstance = appRenderWithRenderer.root;
  //   const signupScreen = appInstance.findByType(SignupScreen);
  //   expect(signupScreen).toBeTruthy();
  // });

  // test("render the LoginScreen component", () => {
  //   const appInstance = appRenderWithRenderer.root;
  //   const loginScreen = appInstance.findByType(LoginScreen);
  //   expect(loginScreen).toBeTruthy();
  // });
});

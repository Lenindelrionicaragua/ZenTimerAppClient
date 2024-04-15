import React from "react";
import App from "../App";
import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { AppContainer } from "../styles/AppStyles";

// Rendering functions
const renderApp = () => render(<App />);
const renderAppWithRenderer = () => renderer.create(<App />);
const renderAppContainerWithRenderer = () => renderer.create(<AppContainer />);
const renderLoginScreenWithRenderer = () => renderer.create(<LoginScreen />);

//App.js
describe("App", () => {
  let appRender;
  let appRenderWithRenderer;
  let appContainerRenderWithRenderer;

  beforeEach(() => {
    appRender = renderApp();
    appRenderWithRenderer = renderAppWithRenderer();
    appContainerRenderWithRenderer = renderAppContainerWithRenderer();
  });

  test("Should renders AppContainer correctly", () => {
    const tree = appContainerRenderWithRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should render a View element with the test ID 'app-container'", () => {
    const { getByTestId } = appRender;
    const containerElement = getByTestId("app-container");
    expect(containerElement).toBeTruthy();
  });

  test("Should render the LoginScreen component", () => {
    const loginScreenComponent = appRenderWithRenderer;
    const instance = loginScreenComponent.root;
    const loginScreenInstance = instance.findByType(LoginScreen);
    expect(loginScreenInstance).toBeTruthy();
  });
});

// LoginScreen Component
describe("LoginScreen", () => {
  let loginScreenRenderWithRenderer;

  beforeEach(() => {
    loginScreenRenderWithRenderer = renderLoginScreenWithRenderer();
  });

  // should renders correctly
  test("Should renders correctly the LoginScreen Component", () => {
    const tree = loginScreenRenderWithRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

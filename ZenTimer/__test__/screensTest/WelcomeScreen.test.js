import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, act, waitFor } from "@testing-library/react-native";

import WelcomeScreen from "../../screens/WelcomeScreen/WelcomeScreen";

import { StatusBar } from "react-native";
import {
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  WelcomeContainer,
} from "../../screens/WelcomeScreen/WelcomeScreenStyles";

// Rendering Functions
const renderWelcomeScreen = () => render(<WelcomeScreen />);
const renderWelcomeScreenWithRenderer = () =>
  renderer.create(<WelcomeScreen />);

let welcomeScreenRender;
let welcomeScreenRenderWithRenderer;

beforeEach(() => {
  welcomeScreenRender = renderWelcomeScreen();
  welcomeScreenRenderWithRenderer = renderWelcomeScreenWithRenderer();
});

//SignupScreen
describe("WelcomeScreen", () => {
  test("Renders correctly the WelcomeScreen Component", () => {
    const WelcomeScreenSnapshot = welcomeScreenRenderWithRenderer.toJSON();
    expect(WelcomeScreenSnapshot).toMatchSnapshot();
  });

  test("Render StatusBar correctly", () => {
    const WelcomeScreenInstance = welcomeScreenRenderWithRenderer.root;
    const statusBar = WelcomeScreenInstance.findByType(StatusBar);
    expect(statusBar).toBeTruthy();
  });

  test("Render UI components correctly", () => {
    const { getByTestId } = welcomeScreenRender;
    expect(getByTestId("welcome-container")).toBeTruthy();
    expect(getByTestId("inner-container")).toBeTruthy();
    expect(getByTestId("welcome-title")).toBeTruthy();
    expect(getByTestId("user-name")).toBeTruthy();
  });

  test("PageTitle should render a string of letters, numbers, or spaces", () => {
    const { getByTestId } = welcomeScreenRender;
    const pageTitleComponent = getByTestId("welcome-title");
    const textContent = pageTitleComponent.props.children.toString();
    expect(textContent).toMatch("Welcome! Prix");
  });

  test("SubTitle should render a string of letters, numbers or spaces", () => {
    const { getByTestId } = welcomeScreenRender;
    const subTitleComponent = getByTestId("user-name");
    const textContent = subTitleComponent.props.children.toString();
    expect(textContent).toMatch("Zen User");
  });
});

// WelcomeContainer Integration Tests
describe("WelcomeContainer Integration Tests", () => {
  let welcomeComponent;

  beforeEach(() => {
    const WelcomeScreenInstance = welcomeScreenRenderWithRenderer.root;
    welcomeComponent = WelcomeScreenInstance.findByType(WelcomeContainer);
  });

  test("Render a WelcomeContainer component", () => {
    expect(welcomeComponent).toBeTruthy();
  });

  // Login StyledButton
  describe("StyledButton", () => {
    test("Render StyledButton", () => {
      const { getByTestId } = welcomeScreenRender;
      const styledButtonElement = getByTestId("login-styled-button");
      expect(styledButtonElement).toBeTruthy();
    });
  });
});

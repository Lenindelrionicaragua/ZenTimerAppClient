import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import { Fontisto } from "@expo/vector-icons";

// import { act } from "react-test-renderer";

import LoginScreen, {
  MyTextInput,
} from "../../screens/LoginScreen/LoginScreen";

import { Formik } from "formik";
import { StatusBar } from "react-native";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledButton,
  ButtonText,
} from "../../screens/LoginScreen/LoginScreenStyles";
import { Colors } from "../../styles/AppStyles";

// Colors
const { white, orange, grey, yellow, lightGrey, black } = Colors;

/// UI Tests

// LoginScreen Should be a function.
// Should render a StatusBar component/
// Should render a StyledContainer component.
// Should render an InnerContainer component.
// Should render a PageLogo component.
// The PageLogo component must have a valid image source.
// The PageLogo component should render an image.
// Should render a PageTitle component.
// Should render a TitlePage component.
// The PageTitle component should render a string: "ZenTimer".
// Should render a SubTitle component.
// The PageTitle component should render a string: "Account Login".

describe("LoginScreen", () => {
  it("LoginScreen Should be a function", () => {
    expect(typeof LoginScreen).toBe("function");
  });

  test("StatusBar renders in LoginScreen", async () => {
    const statusBarInLoginScreen = renderer.create(<LoginScreen />);
    const instance = statusBarInLoginScreen.root;
    const statusBarInstance = await instance.findByType(StatusBar);
    expect(statusBarInstance).toBeTruthy();
  });

  test("Should render a StyledContainer component", async () => {
    const loginScreenComponent = renderer.create(<LoginScreen />);
    const instance = loginScreenComponent.root;
    const styledContainerComponent = await instance.findByType(StyledContainer);

    expect(styledContainerComponent).toBeTruthy();
  });

  test("Should render a InnerContainer component", async () => {
    const loginScreenComponent = renderer.create(<LoginScreen />);
    const instance = loginScreenComponent.root;
    const innerContainerComponent = await instance.findByType(InnerContainer);
    expect(innerContainerComponent).toBeTruthy();
  });

  test("Should render a PageLogo component", async () => {
    const loginScreenComponent = renderer.create(<LoginScreen />);
    const instance = loginScreenComponent.root;
    const pageLogoComponent = await instance.findByType(PageLogo);
    expect(pageLogoComponent).toBeTruthy();
  });

  test("The PageLogo must have a valid image source", async () => {
    const loginScreenComponent = renderer.create(<LoginScreen />);
    const instance = loginScreenComponent.root;
    const pageLogoComponent = await instance.findByType(PageLogo);
    expect(pageLogoComponent.props.source).toBeTruthy();
  });

  it("Should renders the image of PageLogo  correctly", () => {
    const tree = renderer.create(<PageLogo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should render a PageTitle component", async () => {
    const loginScreenComponent = renderer.create(<LoginScreen />);
    const instance = loginScreenComponent.root;
    const pageTitleComponent = await instance.findByType(PageTitle);
    expect(pageTitleComponent).toBeTruthy();
  });

  test("PageTitle should render a string of letters, numbers, or spaces", async () => {
    const loginScreenComponent = renderer.create(<LoginScreen />);
    const instance = loginScreenComponent.root;
    const pageTitleComponent = await instance.findByType(PageTitle);
    const textContent = pageTitleComponent.props.children.toString();
    expect(textContent).toMatch(/^[a-zA-Z0-9\s]*$/);
  });

  test("Should render a SubTitle component", async () => {
    const loginScreenComponent = renderer.create(<LoginScreen />);
    const instance = loginScreenComponent.root;
    const subTitleComponent = await instance.findByType(SubTitle);
    expect(subTitleComponent).toBeTruthy();
  });

  test("SubTitle should render a string of letters, numbers or spaces", async () => {
    const loginScreenComponent = renderer.create(<LoginScreen />);
    const instance = loginScreenComponent.root;
    const subTitleComponent = await instance.findByType(SubTitle);
    const textContent = subTitleComponent.props.children.toString();
    expect(textContent).toMatch(/^[a-zA-Z0-9\s]*$/);
  });
});

/// Form Area ///

// Should render the Formik component.
// Formik component should have initialValues.
// Formik component should have function as a child.
// MyTextInput Should be a function
// MyTextInput function Should renders correctly the email-input
// MyTextInput function Should renders correctly the password-input
// Correctly updates from state in response to onChange and onBluer events
// Should render a style button
// Should render a Fontisto Icon
// Should render a button text
// Should render a MsgBox

describe("Formik Integration Tests", () => {
  const handleSubmit = jest.fn();

  // Formik Component

  test("Should render a Formik component", async () => {
    const loginScreenComponent = renderer.create(<LoginScreen />);
    const instance = loginScreenComponent.root;
    const formikComponent = await instance.findByType(Formik);
    expect(formikComponent).toBeTruthy();
  });

  test("Formik component should have initialValues", async () => {
    const loginScreenComponent = renderer.create(<LoginScreen />);
    const instance = loginScreenComponent.root;
    const formikComponent = await instance.findByType(Formik);
    expect(formikComponent.props.initialValues).toEqual({
      email: "",
      password: "",
    });
  });

  test("Formik component should have a function as a child", async () => {
    const loginScreenComponent = renderer.create(<LoginScreen />);
    const instance = loginScreenComponent.root;
    const formikComponent = await instance.findByType(Formik);

    const hasFunctionAsChild =
      typeof formikComponent.props.children === "function";
    expect(hasFunctionAsChild).toBe(true);
  });

  // MyTextInput

  test("MyTextInput Should be a function", () => {
    expect(typeof MyTextInput).toBe("function");
  });

  test("MyTextInput function Should renders correctly the email-input", () => {
    const { getByTestId } = render(<LoginScreen />);
    const emailInput = getByTestId("email-input");
    expect(emailInput).toBeTruthy();
  });

  test("MyTextInput function Should renders correctly the password-input", () => {
    const { getByTestId } = render(<LoginScreen />);
    const passwordInput = getByTestId("password-input");
    expect(passwordInput).toBeTruthy();
  });

  test("correctly updates form state on onChangeText and onBlur", () => {
    const { getByTestId } = render(<LoginScreen />);

    // Simulate a change in the email input field and verify if the state updates correctly
    fireEvent.changeText(getByTestId("email-input"), "serenity@gmail.com");
    expect(getByTestId("email-input").props.value).toBe("serenity@gmail.com");

    // Simulate a blur event on the email input field and verify if the state updates correctly
    fireEvent(getByTestId("email-input"), "blur");

    // Simulate a change in the password input field and verify if the state updates correctly
    fireEvent.changeText(getByTestId("password-input"), "password123");
    expect(getByTestId("password-input").props.value).toBe("password123");

    // Simulate a blur event on the password input field and verify if the state updates correctly
    fireEvent(getByTestId("password-input"), "blur");
  });

  // Login StyledButton

  test("should render StyledButton", () => {
    const { getByTestId } = render(<LoginScreen />);
    const styledButtonElement = getByTestId("login-styled-button");
    expect(styledButtonElement).toBeTruthy();
  });

  // MsgBox

  test("Should render a MsgBox", () => {
    const { getByTestId } = render(<LoginScreen />);
    const msgBoxElement = getByTestId("msg-box");
    expect(msgBoxElement).toBeTruthy();
  });

  test("MsgBox should render a string of letters, numbers or spaces", async () => {
    const { getByTestId } = render(<LoginScreen />);
    const msgBoxElement = getByTestId("msg-box");
    const textContent = msgBoxElement.props.children.toString();
    expect(textContent).toMatch(/^[a-zA-Z0-9.\s]*$/);
  });

  // Login ButtonText

  test("should render the login-button-text", () => {
    const { getByTestId } = render(<LoginScreen />);
    const buttonTextElement = getByTestId("login-button-text");
    expect(buttonTextElement).toBeTruthy();
  });

  test("login-button-text should render a string of letters, numbers or spaces", async () => {
    const { getByTestId } = render(<LoginScreen />);
    const buttonTextElement = getByTestId("login-button-text");
    const textContent = buttonTextElement.props.children.toString("Login");
    expect(textContent).toMatch("Login");
  });

  test("should render a Line element", () => {
    const { getByTestId } = render(<LoginScreen />);
    const lineElement = getByTestId("line");
    expect(lineElement).toBeTruthy();
  });

  // Google StyledButton

  test("should render a StyleButton to sign in with google", () => {
    const { getByTestId } = render(<LoginScreen />);
    const googleStyledButton = getByTestId("google-styled-button");
    expect(googleStyledButton).toBeTruthy();
  });

  // Google ButtonText

  test("StyledButton should render a google-button-text", () => {
    const { getByTestId } = render(<LoginScreen />);
    const buttonTextGoogle = getByTestId("google-button-text");
    expect(buttonTextGoogle).toBeTruthy();
  });

  // Google Icon

  test("StyledButton should have an Fontisto component as Child", () => {
    const loginScreenComponent = renderer.create(<LoginScreen />);
    const instance = loginScreenComponent.root;
    const styledButtonComponent = instance.findByProps({
      testID: "google-styled-button",
    });

    expect(styledButtonComponent).toBeTruthy();

    const children = styledButtonComponent.props.children;

    let hasFontistoAsAChild = false;

    React.Children.forEach(children, (child) => {
      if (child && child.type === Fontisto) {
        hasFontistoAsAChild = true;
      }
    });
    expect(hasFontistoAsAChild).toBe(true);
  });

  test("StyledButton should render the Google Icon", () => {
    const { getByTestId } = render(<LoginScreen />);
    const googleIconElement = getByTestId("google-icon");
    expect(googleIconElement).toBeTruthy();
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import renderer from "react-test-renderer";
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

/// Login Screen

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
// Should render a button text

describe("Form Input Events", () => {
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

  test("should render StyleButton", () => {
    const { getByTestId } = render(<LoginScreen />);
    const styleButtonElement = getByTestId("style-button");
    expect(styleButtonElement).toBeTruthy();
  });

  test("should render ButtonText", () => {
    const { getByTestId } = render(<LoginScreen />);
    const buttonTextElement = getByTestId("button-text");
    expect(buttonTextElement).toBeTruthy();
  });
});

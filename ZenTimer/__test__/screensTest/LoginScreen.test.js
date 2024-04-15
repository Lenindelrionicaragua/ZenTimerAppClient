import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import { Fontisto } from "@expo/vector-icons";

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
} from "../../screens/LoginScreen/LoginScreenStyles";

// Rendering Functions
const renderLoginScreen = () => render(<LoginScreen />);
const renderLoginScreenWithRenderer = () => renderer.create(<LoginScreen />);

let loginScreenRender;
let loginScreenRenderWithRenderer;

beforeEach(() => {
  loginScreenRender = renderLoginScreen();
  loginScreenRenderWithRenderer = renderLoginScreenWithRenderer();
});

//LoginScreen
describe("LoginScreen", () => {
  test("Should render StatusBar correctly", () => {
    const statusBarInLoginScreen = loginScreenRenderWithRenderer;
    const instance = statusBarInLoginScreen.root;
    const statusBarInstance = instance.findByType(StatusBar);
    expect(statusBarInstance).toBeTruthy();
  });

  test("Should render UI components correctly", () => {
    const { getByTestId } = loginScreenRender;

    expect(getByTestId("styled-container")).toBeTruthy();
    expect(getByTestId("inner-container")).toBeTruthy();
    expect(getByTestId("page-logo")).toBeTruthy();
    expect(getByTestId("page-title")).toBeTruthy();
    expect(getByTestId("sub-title")).toBeTruthy();
  });

  test("The PageLogo must have a valid image source", () => {
    const { getByTestId } = loginScreenRender;
    const pageLogoComponent = getByTestId("page-logo");
    expect(pageLogoComponent.props.source).toBeTruthy();
  });

  test("PageTitle should render a string of letters, numbers, or spaces", () => {
    const { getByTestId } = loginScreenRender;
    const pageTitleComponent = getByTestId("page-title");
    const textContent = pageTitleComponent.props.children.toString();
    expect(textContent).toMatch("ZenTimer");
  });

  test("SubTitle should render a string of letters, numbers or spaces", () => {
    const { getByTestId } = loginScreenRender;
    const subTitleComponent = getByTestId("sub-title");
    const textContent = subTitleComponent.props.children.toString();
    expect(textContent).toMatch("Account Login");
  });
});

// PageLogo
describe("PageLogo", () => {
  it("Should renders the image of PageLogo  correctly", () => {
    const tree = renderer.create(<PageLogo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// Formik Integration Tests
describe("Formik Integration Tests", () => {
  test("Should render a Formik component", () => {
    const loginScreenComponent = loginScreenRenderWithRenderer;
    const instance = loginScreenComponent.root;
    const formikComponent = instance.findByType(Formik);
    expect(formikComponent).toBeTruthy();
  });

  test("Should have initialValues", () => {
    const loginScreenComponent = loginScreenRenderWithRenderer;
    const instance = loginScreenComponent.root;
    const formikComponent = instance.findByType(Formik);
    expect(formikComponent.props.initialValues).toEqual({
      email: "",
      password: "",
    });
  });

  test("Should have a function as a child", () => {
    const loginScreenComponent = loginScreenRenderWithRenderer;
    const instance = loginScreenComponent.root;
    const formikComponent = instance.findByType(Formik);
    expect(typeof formikComponent.props.children).toBe("function");
  });

  // MyTextInput
  describe("MyTextInput", () => {
    test("Should renders correctly the email-input", () => {
      const { getByTestId } = loginScreenRender;
      const emailInput = getByTestId("email-input");
      expect(emailInput).toBeTruthy();
    });

    test("Should renders correctly the password-input", () => {
      const { getByTestId } = loginScreenRender;
      const passwordInput = getByTestId("password-input");
      expect(passwordInput).toBeTruthy();
    });

    test("Correctly updates form state on onChangeText and onBlur", () => {
      const { getByTestId } = loginScreenRender;

      act(() => {
        fireEvent.changeText(getByTestId("email-input"), "serenity@gmail.com");
      });
      expect(getByTestId("email-input").props.value).toBe("serenity@gmail.com");

      act(() => {
        fireEvent(getByTestId("email-input"), "blur");
      });

      act(() => {
        fireEvent.changeText(getByTestId("password-input"), "password123");
      });
      expect(getByTestId("password-input").props.value).toBe("password123");

      act(() => {
        fireEvent(getByTestId("password-input"), "blur");
      });
    });
  });

  // Login StyledButton
  describe("StyledButton", () => {
    test("should render StyledButton", () => {
      const { getByTestId } = loginScreenRender;
      const styledButtonElement = getByTestId("login-styled-button");
      expect(styledButtonElement).toBeTruthy();
    });
  });

  // MsgBox
  describe("MsgBox", () => {
    test("Should render a MsgBox", () => {
      const { getByTestId } = loginScreenRender;
      const msgBoxElement = getByTestId("msg-box");
      expect(msgBoxElement).toBeTruthy();
    });

    test("MsgBox should render a string of letters, numbers or spaces", async () => {
      const { getByTestId } = loginScreenRender;
      const msgBoxElement = getByTestId("msg-box");
      const textContent = msgBoxElement.props.children.toString();
      expect(textContent).toMatch(/^[a-zA-Z0-9.\s]*$/);
    });
  });

  describe("Google StyledButton", () => {
    // Google StyledButton

    test("should render correctly", () => {
      const { getByTestId } = loginScreenRender;
      const googleStyledButton = getByTestId("google-styled-button");
      expect(googleStyledButton).toBeTruthy();
    });

    test("Should render the Google Icon", () => {
      const { getByTestId } = loginScreenRender;
      const googleIconElement = getByTestId("google-icon");
      expect(googleIconElement).toBeTruthy();
    });

    test("StyledButton should have an Fontisto component as Child", () => {
      const { getByTestId } = loginScreenRender;
      const styledButtonComponent = getByTestId("google-styled-button");
      const children = styledButtonComponent.props.children;

      let hasFontistoAsAChild = false;

      React.Children.forEach(children, (child) => {
        if (child && child.type === Fontisto) {
          hasFontistoAsAChild = true;
        }
      });
      expect(hasFontistoAsAChild).toBe(true);
    });

    test("Should render a google-button-text", () => {
      const { getByTestId } = loginScreenRender;
      const buttonTextGoogle = getByTestId("google-button-text");
      expect(buttonTextGoogle).toBeTruthy();
    });
  });

  describe("ExtraView", () => {
    test("Should render correctly", () => {
      const { getByTestId } = loginScreenRender;
      const extraViewElement = getByTestId("extra-view");
      expect(extraViewElement).toBeTruthy();
    });
  });

  describe("ExtraText", () => {
    test("Should render correctly", () => {
      const { getByTestId } = loginScreenRender;
      const extraTextElement = getByTestId("extra-text");
      expect(extraTextElement).toBeTruthy();
    });

    test("ExtraText should render a text", () => {
      const { getByTestId } = loginScreenRender;
      const extraTextElement = getByTestId("extra-text");
      const textContent = extraTextElement.props.children;
      expect(textContent).toBe("Dont you have an account already?");
    });
  });

  describe("TextLink", () => {
    test("Should render correctly", () => {
      const { getByTestId } = loginScreenRender;
      const textLinkElement = getByTestId("text-link");
      expect(typeof textLinkElement.props).toBe("object");
    });

    test("TextLinkContent should render the correct text", () => {
      const { getByTestId } = loginScreenRender;
      const textLinkContent = getByTestId("text-link-content");
      const LinkContent = textLinkContent.props.children;
      expect(LinkContent).toBe("Signup");
    });
  });
});

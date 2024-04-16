import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import { Fontisto } from "@expo/vector-icons";

import SignupScreen, {
  MyTextInput,
} from "../../screens/SignupScreen/SignupScreen";

import { Formik } from "formik";
import { StatusBar } from "react-native";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
} from "../../screens/SignupScreen/SignupScreenStyles";

// Rendering Functions
const renderSignupScreen = () => render(<SignupScreen />);
const renderSignupScreenWithRenderer = () => renderer.create(<SignupScreen />);

let signupScreenRender;
let signupScreenRenderWithRenderer;

beforeEach(() => {
  signupScreenRender = renderSignupScreen();
  signupScreenRenderWithRenderer = renderSignupScreenWithRenderer();
});

//SignupScreen
describe("SignupScreen", () => {
  test("Renders correctly the SignupScreen Component", () => {
    const signupScreenSnapshot = signupScreenRenderWithRenderer.toJSON();
    expect(signupScreenSnapshot).toMatchSnapshot();
  });

  test("Render StatusBar correctly", () => {
    const signupScreenInstance = signupScreenRenderWithRenderer.root;
    const statusBar = signupScreenInstance.findByType(StatusBar);
    expect(statusBar).toBeTruthy();
  });

  test("Render UI components correctly", () => {
    const { getByTestId } = signupScreenRender;

    expect(getByTestId("styled-container")).toBeTruthy();
    expect(getByTestId("inner-container")).toBeTruthy();
    expect(getByTestId("page-logo")).toBeTruthy();
    expect(getByTestId("page-title")).toBeTruthy();
    expect(getByTestId("sub-title")).toBeTruthy();
  });

  test("The PageLogo must have a valid image source", () => {
    const { getByTestId } = signupScreenRender;
    const pageLogoComponent = getByTestId("page-logo");
    expect(pageLogoComponent.props.source).toBeTruthy();
  });

  test("PageTitle should render a string of letters, numbers, or spaces", () => {
    const { getByTestId } = signupScreenRender;
    const pageTitleComponent = getByTestId("page-title");
    const textContent = pageTitleComponent.props.children.toString();
    expect(textContent).toMatch("ZenTimer");
  });

  test("SubTitle should render a string of letters, numbers or spaces", () => {
    const { getByTestId } = signupScreenRender;
    const subTitleComponent = getByTestId("sub-title");
    const textContent = subTitleComponent.props.children.toString();
    expect(textContent).toMatch("Account Signup");
  });
});

// PageLogo
describe("PageLogo", () => {
  it("Renders the PageLogo component correctly", () => {
    const pageLogoSnapshot = renderer.create(<PageLogo />).toJSON();
    expect(pageLogoSnapshot).toMatchSnapshot();
  });
});

// Formik Integration Tests
describe("Formik Integration Tests", () => {
  let formikComponent;

  beforeEach(() => {
    const signupScreenInstance = signupScreenRenderWithRenderer.root;
    formikComponent = signupScreenInstance.findByType(Formik);
  });

  test("Render a Formik component", () => {
    expect(formikComponent).toBeTruthy();
  });

  test("Should have initialValues", () => {
    expect(formikComponent.props.initialValues).toEqual({
      email: "",
      password: "",
    });
  });

  test("Should have a function as a child", () => {
    expect(typeof formikComponent.props.children).toBe("function");
  });

  // MyTextInput
  describe("MyTextInput", () => {
    let emailInput;
    let passwordInput;

    beforeEach(() => {
      const { getByTestId } = signupScreenRender;
      emailInput = getByTestId("email-input");
      passwordInput = getByTestId("password-input");
    });

    test("Renders correctly the email-input", () => {
      expect(emailInput).toBeTruthy();
    });

    test("Renders correctly the password-input", () => {
      expect(passwordInput).toBeTruthy();
    });

    test("Correctly updates form state on onChangeText and onBlur", () => {
      const { getByTestId } = signupScreenRender;

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
    test("Render StyledButton", () => {
      const { getByTestId } = signupScreenRender;
      const styledButtonElement = getByTestId("login-styled-button");
      expect(styledButtonElement).toBeTruthy();
    });
  });

  // MsgBox
  describe("MsgBox", () => {
    test("Render a MsgBox", () => {
      const { getByTestId } = signupScreenRender;
      const msgBoxElement = getByTestId("msg-box");
      expect(msgBoxElement).toBeTruthy();
    });

    test("MsgBox should render a string of letters, numbers or spaces", async () => {
      const { getByTestId } = signupScreenRender;
      const msgBoxElement = getByTestId("msg-box");
      const textContent = msgBoxElement.props.children.toString();
      expect(textContent).toMatch(/^[a-zA-Z0-9.\s]*$/);
    });
  });

  describe("Google StyledButton", () => {
    // Google StyledButton

    test("Render correctly", () => {
      const { getByTestId } = signupScreenRender;
      const googleStyledButton = getByTestId("google-styled-button");
      expect(googleStyledButton).toBeTruthy();
    });

    test("Render the Google Icon", () => {
      const { getByTestId } = signupScreenRender;
      const googleIconElement = getByTestId("google-icon");
      expect(googleIconElement).toBeTruthy();
    });

    test("StyledButton should have an Fontisto component as Child", () => {
      const { getByTestId } = signupScreenRender;
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

    test("Render a google-button-text", () => {
      const { getByTestId } = signupScreenRender;
      const buttonTextGoogle = getByTestId("google-button-text");
      expect(buttonTextGoogle).toBeTruthy();
    });
  });

  describe("ExtraView", () => {
    test("Render correctly", () => {
      const { getByTestId } = signupScreenRender;
      const extraViewElement = getByTestId("extra-view");
      expect(extraViewElement).toBeTruthy();
    });
  });

  describe("ExtraText", () => {
    test("Render correctly", () => {
      const { getByTestId } = signupScreenRender;
      const extraTextElement = getByTestId("extra-text");
      expect(extraTextElement).toBeTruthy();
    });

    test("Render a text", () => {
      const { getByTestId } = signupScreenRender;
      const extraTextElement = getByTestId("extra-text");
      const textContent = extraTextElement.props.children;
      expect(textContent).toBe("Dont you have an account already?");
    });
  });

  describe("TextLink", () => {
    test("Render correctly", () => {
      const { getByTestId } = signupScreenRender;
      const textLinkElement = getByTestId("text-link");
      expect(typeof textLinkElement.props).toBe("object");
    });

    test("Render the correct text", () => {
      const { getByTestId } = signupScreenRender;
      const textLinkContent = getByTestId("text-link-content");
      const LinkContent = textLinkContent.props.children;
      expect(LinkContent).toBe("Signup");
    });
  });
});

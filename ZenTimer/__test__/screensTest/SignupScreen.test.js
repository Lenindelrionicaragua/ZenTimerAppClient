import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, act, waitFor } from "@testing-library/react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

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
    expect(getByTestId("page-title")).toBeTruthy();
    expect(getByTestId("sub-title")).toBeTruthy();
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
      fullName: "",
      email: "",
      dateOfBirth: "",
      password: "",
      confirmPassword: "",
    });
  });

  test("Should have a function as a child", () => {
    expect(typeof formikComponent.props.children).toBe("function");
  });

  //MyTextInput
  describe("MyTextInput", () => {
    let fullName;
    let emailInput;
    let dateOfBirth;
    let passwordInput;
    let confirmPasswordInput;

    const renderForm = () => {
      const { getByTestId } = signupScreenRender;
      fullName = getByTestId("full-name");
      emailInput = getByTestId("email-input");
      dateOfBirth = getByTestId("date-of-birth");
      passwordInput = getByTestId("password-input");
      confirmPasswordInput = getByTestId("confirm-password-input");
    };

    beforeEach(() => {
      renderForm();
    });

    describe("Rendering", () => {
      test("Renders correctly the full-name", () => {
        expect(fullName).toBeTruthy();
      });

      test("Renders correctly the email-input", () => {
        expect(emailInput).toBeTruthy();
      });

      test("Renders correctly the date-of-birth", () => {
        expect(dateOfBirth).toBeTruthy();
      });

      test("Renders correctly the password-input", () => {
        expect(passwordInput).toBeTruthy();
      });

      test("Renders correctly the confirm-password-input", () => {
        expect(confirmPasswordInput).toBeTruthy();
      });
    });

    describe("Form State Update", () => {
      let dateOfBirth;

      const renderForm = () => {
        const { getByTestId } = signupScreenRender;
        dateOfBirth = getByTestId("date-of-birth");
      };

      beforeEach(() => {
        renderForm();
      });

      beforeEach(() => {
        renderForm();
      });

      test("Correctly updates form state on onChangeText and onBlur", () => {
        act(() => {
          fireEvent.changeText(fullName, "Zen User");
          fireEvent(fullName, "blur");

          fireEvent.changeText(emailInput, "serenity@gmail.com");
          fireEvent(emailInput, "blur");

          fireEvent.changeText(dateOfBirth, "");
          fireEvent(dateOfBirth, "blur");

          fireEvent.changeText(passwordInput, "password123");
          fireEvent(passwordInput, "blur");

          fireEvent.changeText(confirmPasswordInput, "password123");
          fireEvent(confirmPasswordInput, "blur");
        });

        expect(fullName.props.value).toBe("Zen User");
        expect(emailInput.props.value).toBe("serenity@gmail.com");
        expect(dateOfBirth.props.value).toBe("");
        expect(passwordInput.props.value).toBe("password123");
        expect(confirmPasswordInput.props.value).toBe("password123");
      });
    });
  });

  describe("DateTimePicker", () => {
    let dateOfBirth;

    const renderForm = () => {
      const { getByTestId } = signupScreenRender;
      dateOfBirth = getByTestId("date-of-birth");
    };

    beforeEach(() => {
      renderForm();
    });

    test("Renders correctly the date-of-birth input field", () => {
      expect(dateOfBirth).toBeTruthy();
    });

    test("Show DateTimePicker after clicking on the date-of-birth input field", async () => {
      fireEvent.press(dateOfBirth);

      await waitFor(() => {
        const dateTimePicker =
          signupScreenRender.queryByTestId("date-time-picker");
        expect(dateTimePicker).toBeTruthy();
      });
    });

    test("Change date in DateTimePicker", async () => {
      fireEvent.press(dateOfBirth);

      await waitFor(() => {
        const dateTimePicker =
          signupScreenRender.queryByTestId("date-time-picker");
        expect(dateTimePicker).toBeTruthy();

        fireEvent(dateTimePicker, "onChange", {
          nativeEvent: { timestamp: "Tue Feb 01 2022" },
        });
      });

      await waitFor(() => {
        expect(dateOfBirth.props.value).toBe("Tue Feb 01 2022");
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

    test("Render the correct text", () => {
      const { getByTestId } = signupScreenRender;
      const extraTextElement = getByTestId("extra-text");
      const textContent = extraTextElement.props.children;
      expect(textContent).toBe("Already have an account?");
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
      expect(LinkContent).toBe("Login");
    });
  });
});

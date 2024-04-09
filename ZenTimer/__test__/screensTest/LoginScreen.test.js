import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import renderer from "react-test-renderer";

import LoginScreen from "../../screens/LoginScreen";
import { Formik } from "formik";
import { StatusBar } from "react-native";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
} from "../../components/styles";

// Should be a function.
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
// Should render the Formik component.
// Formik component should have initialValues.
// onSubmit property on Formik component should send values to console

describe("LoginScreen", () => {
  it("Should be a function", () => {
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
});

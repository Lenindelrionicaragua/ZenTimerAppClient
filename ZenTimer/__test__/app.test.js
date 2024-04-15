import React from "react";
import App from "../App";
import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { AppContainer } from "../styles/AppStyles";

const renderApp = () => {
  return render(<App />);
};

describe("App", () => {
  // Should renders correctly AppContainer Element
  // Should render a View element with Id 'app-container'
  let appRenderResult;

  beforeEach(() => {
    appRenderResult = renderApp();
  });

  test("should renders correctly", () => {
    const tree = renderer.create(<AppContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should render a View element with the test ID 'app-container'", () => {
    const { getByTestId } = appRenderResult;
    const containerElement = getByTestId("app-container");
    expect(containerElement).toBeTruthy();
  });

  //LoginScreen

  test("Should render the LoginScreen component", () => {
    const loginScreenComponent = renderer.create(<App />);
    const instance = loginScreenComponent.root;
    const loginScreenInstance = instance.findByType(LoginScreen);
    expect(loginScreenInstance).toBeTruthy();
  });
});

describe("LoginScreen", () => {
  test("Should renders correctly the LoginScreen Component", () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

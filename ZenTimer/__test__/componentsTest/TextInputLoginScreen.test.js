import React from "react";
import { render } from "@testing-library/react-native";
import TextInputLoginScreen from "../../component/TextInputLoginScreen";

describe("TextInputLoginScreen", () => {
  test("Renders correctly", () => {
    const { getByTestId } = render(
      <TextInputLoginScreen
        label="Email"
        icon="mail"
        onChangeText={() => {}}
        value=""
        isPassword={false}
        hidePassword={false}
        setHidePassword={() => {}}
      />
    );
    expect(getByTestId("textInputLoginScreen")).toBeTruthy();
  });

  test("Renders label and icon correctly", () => {
    const { getByText, getByTestId } = render(
      <TextInputLoginScreen
        label="Email"
        icon="mail"
        onChangeText={() => {}}
        value=""
        isPassword={false}
        hidePassword={false}
        setHidePassword={() => {}}
      />
    );
    expect(getByText("Email")).toBeTruthy();
    expect(getByTestId("octicons-icon")).toBeTruthy();
  });
});

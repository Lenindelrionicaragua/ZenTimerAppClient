import { render } from "@testing-library/react-native";
import KeyboardAvoider from "../../component/KeyboardAvoider/KeyboardAvoider";

describe("KeyboardAvoider", () => {
  let KeyboardAvoiderRender;

  beforeEach(() => {
    KeyboardAvoiderRender = render(<KeyboardAvoider />);
  });

  test("Render KeyboardAvoidingView", () => {
    const keyboardAvoiderComponent = KeyboardAvoiderRender.getByTestId(
      "keyboard-avoiding-view"
    );
    expect(keyboardAvoiderComponent).toBeTruthy();
  });

  test("Render ScrollView", () => {
    const scrollView = KeyboardAvoiderRender.getByTestId("scroll-view");
    expect(scrollView).toBeTruthy();
  });

  test("Render TouchableWithoutFeedback", () => {
    const touchableWithoutFeedback = KeyboardAvoiderRender.getByTestId(
      "touchable-without-feedback"
    );
    expect(touchableWithoutFeedback).toBeTruthy();
  });
});

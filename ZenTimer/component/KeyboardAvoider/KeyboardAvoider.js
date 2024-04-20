import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
  Keyboard,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const styles = {
  keyboardAvoider: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
};

const KeyboardAvoider = ({ children }) => {
  const shouldRenderKeyboardAvoider = Platform.OS !== "web";

  return shouldRenderKeyboardAvoider ? (
    <KeyboardAvoidingView
      style={styles.keyboardAvoider}
      behavior={Platform.OS === "ios" ? "padding" : null}
      enabled={Platform.OS !== "android"}
      testID="keyboard-avoiding-view"
    >
      <KeyboardAwareScrollView testID="scroll-view">
        <Pressable onPress={Keyboard.dismiss} testID="pressable">
          {children}
        </Pressable>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  ) : (
    <>{children}</>
  );
};

export default KeyboardAvoider;

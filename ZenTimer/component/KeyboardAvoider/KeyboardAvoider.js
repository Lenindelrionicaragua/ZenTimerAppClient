import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";

const KeyboardAvoider = ({ children }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} testID="keyboard-avoiding-view">
      <TouchableWithoutFeedback
        testID="touchable-without-feedback"
        onPress={Keyboard.dismiss}
      >
        <View style={{ flex: 1 }}>
          <ScrollView testID="scroll-view">
            <View>{children}</View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoider;

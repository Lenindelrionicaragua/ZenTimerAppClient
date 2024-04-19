import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Octicons, Feather } from "@expo/vector-icons";
import {
  StyledInputLabel,
  StyledTextInput,
  LeftIcon,
  RightIcon,
} from "../screens/LoginScreen/LoginScreenStyles";
import { Colors } from "../styles/AppStyles";

const { lightGrey, black } = Colors;

const TextInputSignupScreen = (props) => {
  const {
    label,
    icon,
    isPassword,
    hidePassword,
    setHidePassword,
    isDate,
    showDatePicker,
    ...textInputProps
  } = props;

  return (
    <View testID="text-input-signup-screen">
      <LeftIcon testID="left-icon">
        <Octicons name={icon} size={30} color={black} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...textInputProps} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...textInputProps} />
        </TouchableOpacity>
      )}
      {isPassword && (
        <RightIcon
          onPress={() => setHidePassword(!hidePassword)}
          testID="right-icon"
        >
          <Feather
            name={hidePassword ? "eye" : "eye-off"}
            size={25}
            color={lightGrey}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default TextInputSignupScreen;

import React from "react";
import { View } from "react-native";
import { Octicons, Feather } from "@expo/vector-icons";
import {
  StyledInputLabel,
  StyledTextInput,
} from "../screens/LoginScreen/LoginScreenStyles";

const TextInputLoginScreen = (props) => {
  const {
    label,
    icon,
    isPassword,
    hidePassword,
    setHidePassword,
    ...textInputProps
  } = props;

  return (
    <View>
      <Octicons name={icon} size={30} color="black" />
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...textInputProps} />
      {isPassword && (
        <Feather
          name={hidePassword ? "eye" : "eye-off"}
          size={25}
          color="lightgrey"
          onPress={() => setHidePassword(!hidePassword)}
        />
      )}
    </View>
  );
};

export default TextInputLoginScreen;

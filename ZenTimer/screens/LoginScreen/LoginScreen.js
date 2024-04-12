import React, { useState } from "react";
import { StatusBar, View } from "react-native";
// icons
import { Octicons, Feather } from "@expo/vector-icons";
// formik
import { Formik } from "formik";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
} from "./LoginScreenStyles";
import { Colors } from "../../styles/AppStyles";

// Colors
const { white, orange, grey, yellow, lightGrey, black } = Colors;

const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo
          resizeMode="cover"
          source={require("./../../assets/logoZenTimer.png")}
        />
        <PageTitle>ZenTimer</PageTitle>
        <SubTitle>Account Login</SubTitle>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="serenity@gmail.com"
                placeholderTextColor={lightGrey}
                onChangeText={handleChange("email")}
                onblur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
                testID="email-input"
              />
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * * *"
                placeholderTextColor={lightGrey}
                onChangeText={handleChange("password")}
                onblur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                testID="password-input"
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
            </StyledFormArea>
          )}
        </Formik>
        <StyledButton testID="style-button" />
        <ButtonText testID="button-text" />
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = (props) => {
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
      <LeftIcon>
        <Octicons name={icon} size={30} color={black} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...textInputProps} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
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

export default LoginScreen;
export { MyTextInput };

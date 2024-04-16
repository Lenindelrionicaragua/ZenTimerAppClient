import React, { useState } from "react";
import { StatusBar, View } from "react-native";
// icons
import { Octicons, Feather, Fontisto } from "@expo/vector-icons";
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
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "./SignupScreenStyles";
import { Colors } from "../../styles/AppStyles";

// Colors
const { white, orange, grey, yellow, lightGrey, black } = Colors;

const SignupScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer testID="styled-container">
      <StatusBar style="dark" />
      <InnerContainer testID="inner-container">
        <PageTitle testID="page-title">ZenTimer</PageTitle>
        <SubTitle testID="sub-title">Account Signup</SubTitle>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            dateOfBirth: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Full Name"
                icon="person"
                placeholder="Mark Twain"
                placeholderTextColor={lightGrey}
                onChangeText={handleChange("fullName")}
                onblur={handleBlur("fullName")}
                value={values.fullName}
                testID="full-name"
              />

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
                label="Date of Birth"
                icon="calendar"
                placeholder="YYYY - MM - DD"
                placeholderTextColor={lightGrey}
                onChangeText={handleChange("dateOfBirth")}
                onblur={handleBlur("dateOfBirth")}
                value={values.dateOfBirth}
                testID="date-of-birth"
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

              <MyTextInput
                label="Confirm Password"
                icon="lock"
                placeholder="* * * * * * *"
                placeholderTextColor={lightGrey}
                onChangeText={handleChange("confirmPassword")}
                onblur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                testID="confirm-password-input"
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox testID="msg-box">...</MsgBox>
              <StyledButton testID="login-styled-button" onPress={handleSubmit}>
                <ButtonText testID="login-button-text">Login</ButtonText>
              </StyledButton>
              <Line testID="line" />
              <ExtraView testID="extra-view">
                <ExtraText testID="extra-text">
                  Already have an account?
                </ExtraText>
                <TextLink testID="text-link">
                  <TextLinkContent testID="text-link-content">
                    Login
                  </TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
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

export default SignupScreen;
export { MyTextInput };

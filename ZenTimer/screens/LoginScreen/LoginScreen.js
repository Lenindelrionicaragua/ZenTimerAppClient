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
} from "./LoginScreenStyles";
import { Colors } from "../../styles/AppStyles";

// Colors
const { white, orange, grey, yellow, lightGrey, black } = Colors;

const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer testID="styled-container">
      <StatusBar style="light" />
      <InnerContainer testID="inner-container">
        <PageLogo
          resizeMode="cover"
          source={require("./../../assets/logoZenTimer.png")}
          testID="page-logo"
        />
        <PageTitle testID="page-title">ZenTimer</PageTitle>
        <SubTitle testID="sub-title">Account Login</SubTitle>
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
              <MsgBox testID="msg-box">...</MsgBox>
              <StyledButton testID="login-styled-button" onPress={handleSubmit}>
                <ButtonText testID="login-button-text">Login</ButtonText>
              </StyledButton>
              <Line testID="line" />
              <StyledButton
                google={true}
                onPress={handleSubmit}
                testID="google-styled-button"
              >
                <Fontisto
                  name="google"
                  color={grey}
                  size={20}
                  testID="google-icon"
                />
                <ButtonText google={true} testID="google-button-text">
                  Sign in with Google
                </ButtonText>
              </StyledButton>
              <ExtraView testID="extra-view">
                <ExtraText testID="extra-text">
                  Dont you have an account already?
                </ExtraText>
                <TextLink testID="text-link">
                  <TextLinkContent testID="text-link-content">
                    Signup
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

export default LoginScreen;
export { MyTextInput };

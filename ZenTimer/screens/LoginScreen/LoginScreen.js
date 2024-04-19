import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Formik } from "formik";
import { Fontisto } from "@expo/vector-icons";
import { Colors } from "../../styles/AppStyles";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  FooterView,
  FooterText,
  SignupLink,
  SignupLinkContent,
} from "./LoginScreenStyles";
import TextInputLoginScreen from "../../component/TextInputLoginScreen";

const { grey, lightGrey, black } = Colors;

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
              <TextInputLoginScreen
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
              <TextInputLoginScreen
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
              <FooterView testID="footer-view">
                <FooterText testID="footer-text">
                  Dont you have an account already?
                </FooterText>
                <SignupLink testID="signup-link">
                  <SignupLinkContent testID="signup-link-content">
                    Signup
                  </SignupLinkContent>
                </SignupLink>
              </FooterView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

export default LoginScreen;

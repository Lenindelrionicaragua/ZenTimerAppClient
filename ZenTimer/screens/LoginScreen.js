import React from "react";
import { StatusBar } from "react-native";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
} from "../components/styles";
import { Formik } from "formik";

const LoginScreen = () => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo
          resizeMode="cover"
          source={require("./../assets/logoZenTimer.png")}
        />
        <PageTitle>ZenTimer</PageTitle>
        <SubTitle>Account Login</SubTitle>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {/* Aquí puedes agregar tu formulario */}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

export default LoginScreen;

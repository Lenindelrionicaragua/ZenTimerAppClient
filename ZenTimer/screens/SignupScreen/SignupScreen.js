import React, { useState } from "react";
import { StatusBar, View, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Octicons, Feather, Fontisto } from "@expo/vector-icons";
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
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));
  const [userBirthDay, setUserBirthDay] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setUserBirthDay(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <StyledContainer testID="styled-container">
      <StatusBar style="dark" />
      <InnerContainer testID="inner-container">
        <PageTitle testID="page-title">ZenTimer</PageTitle>
        <SubTitle testID="sub-title">Account Signup</SubTitle>

        {show && (
          <DateTimePicker
            testID="date-time-picker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

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
                value={userBirthDay ? userBirthDay.toDateString() : ""}
                testID="date-of-birth"
                isDate={true}
                editable={false}
                showDatePicker={showDatePicker}
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
    isDate,
    showDatePicker,
    ...textInputProps
  } = props;

  return (
    <View>
      <LeftIcon>
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

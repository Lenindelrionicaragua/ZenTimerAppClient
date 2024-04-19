import React from "react";
import { StatusBar } from "react-native";

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
} from "./WelcomeScreenStyles";

const WelcomeScreen = () => {
  return (
    <StyledContainer testID="styled-container">
      <StatusBar style="light" />
      <InnerContainer testID="inner-container">
        <WelcomeImage
          resizeMode="cover"
          source={require("./../../assets/ZenTimer6.png")}
          testID="welcome-image"
        />

        <WelcomeContainer testID="welcome-container">
          <PageTitle welcome={true} testID="welcome-title">
            Welcome!
          </PageTitle>
          <SubTitle welcome={true} testID="user-name">
            Zen User
          </SubTitle>
          <SubTitle welcome={true} testID="user-email">
            serenity@gmail.com
          </SubTitle>
          <StyledFormArea>
            <Avatar
              resizeMode="cover"
              source={require("./../../assets/logoZenTimer.png")}
              testID="avatar-image"
            />
            <Line testID="line" />
            <StyledButton testID="logout-styled-button">
              <ButtonText testID="logout-button-text">Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </StyledContainer>
  );
};

export default WelcomeScreen;

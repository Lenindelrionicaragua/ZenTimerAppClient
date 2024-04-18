import styled from "styled-components/native";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Colors } from "../../styles/AppStyles";

const StatusBarHeight = Constants.statusBarHeight;

const { white, orange, grey, yellow, lightGrey, black } = Colors;

export const StyledContainer = styled(View)`
  flex: 1;
  padding: 15px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${orange};
`;

export const InnerContainer = styled(View)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const Avatar = styled(Image)`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${orange};
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const WelcomeImage = styled(Image)`
  height: 50%;
  width: 100%;
`;

export const PageTitle = styled(Text)`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${black};
  padding: 10px;

  ${(props) =>
    props.welcome &&
    `
    font-size: 35px;
  `}
`;

export const SubTitle = styled(Text)`
  font-size: 10px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${grey};

  ${(props) =>
    props.welcome &&
    `
    margin-bottom: 5px;
    font-weight: normal;
  `}
`;

export const StyledFormArea = styled(View)`
  width: 90%;
`;

export const StyledButton = styled(TouchableOpacity)`
  padding: 15px;
  background-color: ${black};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;

  ${(props) =>
    props.google == true &&
    `
    background-color: ${orange};
    flex-direction: row;
    justify-content: center;
  `}
`;

export const ButtonText = styled(Text)`
  color: ${white};
  font-size: 16px;

  ${(props) =>
    props.google == true &&
    `
    padding: 25px;
    color: ${black}
  `}
`;

export const Line = styled(View)`
  height: 1px;
  width: 100%;
  background-color: ${orange};
  margin-vertical: 10px;
`;
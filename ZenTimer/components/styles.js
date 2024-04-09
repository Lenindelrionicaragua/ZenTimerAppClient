import styled from "styled-components/native";
import { View, Image, Text } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

// colors

export const colors = {
  primary: "#040c0c",
  secondary: "#ecc4d4",
  tertiary: "#6c6c8c",
  green: "#3cbc9c",
  brown: "#644c24",
  lightBrown: "#dcc49c",
};

const { primary, secondary, tertiary, green, brown, lightBrown } = colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  overflow: hidden;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${lightBrown};
  padding: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 10px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

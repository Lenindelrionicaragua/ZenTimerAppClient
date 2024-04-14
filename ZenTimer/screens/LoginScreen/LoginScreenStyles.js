import styled from "styled-components/native";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Colors } from "../../styles/AppStyles";

const StatusBarHeight = Constants.statusBarHeight;

const { white, orange, grey, yellow, lightGrey, black } = Colors;

export const StyledContainer = styled(View)`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${lightGrey};
`;

export const InnerContainer = styled(View)`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  overflow: hidden;
`;

export const PageTitle = styled(Text)`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${black};
  padding: 10px;
`;

export const SubTitle = styled(Text)`
  font-size: 10px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${grey};
`;

export const StyledFormArea = styled(View)`
  width: 90%;
`;

export const StyledTextInput = styled(TextInput)`
  background-color: ${orange};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${grey};
`;

export const StyledInputLabel = styled(Text)`
  color: ${grey};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled(View)`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled(TouchableOpacity)`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
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

export const MsgBox = styled(Text)`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled(View)`
  height: 1px;
  width: 100%;
  background-color: ${orange};
  margin-vertical: 10px;
`;

export const ExtraView = styled(View)`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled(Text)`
  justify-content: center;
  align-content: center;
  color: ${grey};
  font-size: 15px;
`;

export const TextLink = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled(Text)`
  color: ${yellow};
  font-size: 15px;
`;

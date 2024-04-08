import styled from "styled-components";
import { View } from "react-native";
import Constants from "expo-constants";
// colors

export const color = {
  primary: "#040c0c",
  secondary: "#ecc4d4",
  tertiary: "#6c6c8c",
  green: "#3cbc9c",
  brown: "#644c24",
  lightBrown: "#dcc49c",
};

const { primary, secondary, tertiary, green, brown, lightBrown } = colors;

export const styledContainer = styled.View`
  flex: 1;
  padding: 25px;
  background-color: $(primary);
`;

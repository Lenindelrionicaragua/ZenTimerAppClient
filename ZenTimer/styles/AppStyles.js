import styled from "styled-components/native";
import { View } from "react-native";

// colors

export const Colors = {
  white: "#ffe1a8" /* styledContainer(background), buttonText: BLANCO */,
  orange: "#ffc500" /* styleTextInput(background): ORANGE */,
  grey: "#1a1204" /* subtitle, styleTextInput, styleInput: GRIS/BROWN*/,
  yellow: "#ffc554" /* ORANGE 2*/,
  lightGrey: "#f9f7f3" /* Gris claro */,
  black: "#000000" /* pageTitle, styledButton: NEGRO*/,
};

const { white, orange, grey, yellow, lightGrey, black } = Colors;

export const AppContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

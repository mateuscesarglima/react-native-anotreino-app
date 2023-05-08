import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #ddd;
  height: ${RFPercentage(60)}px;
  width: ${RFPercentage(40)}px;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: ${RFValue(60)}px;
  overflow: hidden;
`;
export const Header = styled.View`
  background-color: black;
  height: ${RFPercentage(25)}px;
`;
export const Main = styled.View``;
export const Footer = styled.View``;

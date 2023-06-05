import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View``;

export const WelcomeText = styled.Text`
  margin-top: ${getStatusBarHeight() + RFPercentage(5)}px;
  font-size: ${RFValue(30)}px;
  align-self: center;
  font-weight: bold;
  color: #fff;
`;

export const ImageContainer = styled.View`
  align-items: center;
  margin-top: 50px;
`;

export const AnotreinoLogoImage = styled.Image`
  width: ${RFPercentage(40)}px;
  height: ${RFPercentage(15)}px;
`;

export const BoasVindasImage = styled.Image`
  width: ${RFPercentage(40)}px;
  height: ${RFPercentage(20)}px;
  object-fit: contain;
`;

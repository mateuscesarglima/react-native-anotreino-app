import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const TitleText = styled.Text`
  align-self: center;
  margin-top: ${getStatusBarHeight() + RFPercentage(5)}px;
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.tertiary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const DescriptionText = styled.Text`
  text-align: center;
  margin-top: 30px;
  font-size: 25px;
  color: #fff;
  text-align: left;
  letter-spacing: 1px;
  font-weight: 500;
`;

export const ImageContainer = styled.View`
  align-items: center;
  margin-top: 50px;
`;

export const AnotreinoLogoImage = styled.Image`
  width: 100%;
  height: 300px;
`;

export const BoasVindasImage = styled.Image`
  width: ${RFPercentage(40)}px;
  height: ${RFPercentage(15)}px;
`;

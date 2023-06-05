import { RectButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const TitleText = styled.Text`
  align-self: center;
  margin-top: ${getStatusBarHeight() + RFPercentage(10)}px;
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.tertiary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const EnterButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-top: 20px;
  width: 200px;
  padding: 10px 20px;
  border-radius: 10px;
  align-self: center;
`;

export const EnterButtonText = styled.Text`
  align-self: center;
  font-size: ${RFValue(15)}px;
  font-weight: bold;
  color: #fff;
`;

export const RegisterButton = styled(RectButton)`
  background-color: #74b816;
  width: 200px;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 10px;
  align-self: center;
`;
export const RegisterButtonText = styled.Text`
  align-self: center;
  font-size: ${RFValue(15)}px;
  font-weight: bold;
  color: #fff;
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

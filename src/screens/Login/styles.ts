import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 25px;
  padding-top: 200px;
  background-color: #ddd;
`;
export const LogoBox = styled.View`
  align-items: center;
`;

export const LogoImg = styled.Image`
  width: ${RFPercentage(40)}px;
  height: ${RFPercentage(15)}px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 50px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled(TouchableOpacity)``;

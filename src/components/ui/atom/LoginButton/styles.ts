import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;

export const Button = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 15px 50px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.white};
`;

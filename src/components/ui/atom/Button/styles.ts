import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Button = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  width: 150px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.white};
`;

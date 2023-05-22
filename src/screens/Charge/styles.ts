import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-end;
  padding: 20px 20px;
  align-items: center;
`;

export const Icon = styled(Feather)``;

export const Title = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const ChartContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const AddNewChargeButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  width: 80%;
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
`;

export const AddNewChargeButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(18)}px;
`;

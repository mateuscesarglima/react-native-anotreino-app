import { RectButton } from "react-native-gesture-handler";

import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
`;

export const Header = styled.View`
  width: 100%;
  padding: 20px 30px;
  justify-content: center;
`;

export const Content = styled.View`
  padding: 0px 30px;
`;
export const ContentDescription = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
  font-size: ${RFValue(15)}px;
`;
export const ChangeChargeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;
export const LessButton = styled.TouchableOpacity``;
export const ChargeValue = styled.TextInput`
  background-color: #ddd;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8;
  font-size: ${RFValue(18)}px;
`;
export const MoreButton = styled.TouchableOpacity``;
export const Icon = styled(Feather)``;
export const ConfirmButton = styled.TouchableOpacity`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0px 20px;
  border-radius: 8px;
`;
export const ConfirmButtonText = styled.Text`
  padding: 15px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

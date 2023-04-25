import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 40}px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: ${RFPercentage(8)}px;
`;

export const Icon = styled(Feather)`
  color: #fff;
`;

export const HeaderText = styled.Text`
  font-size: 30px;
  margin: 0 auto;
  color: #fff;
  font-weight: bold;
`;

export const Main = styled.View`
  padding: ${RFValue(10)}px;
`;

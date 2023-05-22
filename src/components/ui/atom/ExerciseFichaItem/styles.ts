import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  background-color: #ddd;
  padding: 15px 20px;
  border-radius: 10px;
  margin-right: 30px;
`;
export const MainBox = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;
export const Img = styled.Text``;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(15)}px;
`;
export const Icon = styled(Feather)``;
export const Description = styled.Text`
  width: 250px;
  align-items: center;
  justify-content: center;
`;
export const Main = styled.View`
  gap: 5px;
`;
export const Footer = styled.View`
  margin-top: 10px;
  justify-content: space-around;
  flex-direction: row;
  gap: 150px;
`;
export const LeftSide = styled.Text`
  font-weight: bold;
`;
export const RightSide = styled.Text`
  font-weight: bold;
`;

export const SaibaMaisButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
export const SaibaMaisText = styled.Text`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

export const WeightButton = styled.TouchableOpacity``;

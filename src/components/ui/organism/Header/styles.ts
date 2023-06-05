import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 40}px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  top: 70px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

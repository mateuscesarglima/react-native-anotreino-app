import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const EnterButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10px 20px;
  width: 80%;
  align-items: center;
  border-radius: 8px;
  position: absolute;
  bottom: 0;
  margin-bottom: ${getBottomSpace() + 20}px;
`;

export const EnterButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${RFValue(18)}px;
`;

export const SlideIndexes = styled.View`
  position: absolute;
  bottom: 0;
  margin-bottom: ${getBottomSpace() + 100}px;
`;

export const Footer = styled.View`
  align-items: center;
`;

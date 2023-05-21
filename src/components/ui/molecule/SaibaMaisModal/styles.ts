import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0px 20px;
`;

export const Header = styled.View`
  align-items: center;
  padding: 20px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-weight: bold;
`;

export const DescriptionContainer = styled.View`
  width: 100%;
  margin-top: 20px;
`;
export const Description = styled.Text`
  font-size: ${RFValue(18)}px;
`;

import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 10px;
`;

export const Error = styled(TextInput)`
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.attention};
`;

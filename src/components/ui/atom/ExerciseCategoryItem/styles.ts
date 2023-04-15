import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: #ddd;
  padding: 30px;
  margin: 10px;
  border-radius: 20px;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: ${RFValue(20)}px;
`;

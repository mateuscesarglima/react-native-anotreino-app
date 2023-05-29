import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  gap: 20px;
  background-color: #ddd;
  padding: 20px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${RFValue(25)}px;
`;
export const Input = styled.TextInput`
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  width: 250px;
`;
export const ButtonContainer = styled.View`
  flex-direction: row;
  gap: 20px;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  font-size: 20px;
`;
export const CancelButton = styled.TouchableOpacity`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
`;
export const ApplyButton = styled.TouchableOpacity`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
`;

export const ApplyButtonText = styled.Text``;

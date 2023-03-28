import { TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
export const Container = styled.View`
  flex: 1;
`;

export const BackButton = styled(TouchableOpacity)`
  margin-top: ${RFPercentage(8)}px;
  padding: 0px 5px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 50px;
  font-size: ${RFValue(30)}px;
  text-align: center;
`;

export const Icon = styled(Feather)``;

export const Form = styled.View`
  justify-content: center;
  height: ${RFPercentage(60)}px;
  padding: 0px 20px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
`;

export const Button = styled(TouchableOpacity)``;

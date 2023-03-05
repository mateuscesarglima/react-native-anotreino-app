import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  font-size: ${RFValue(15)}px;
  background-color: #fff;
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 5px #ddd;
`;

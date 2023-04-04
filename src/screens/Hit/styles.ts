import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: ${getStatusBarHeight() + 20}px;
`;
export const Title = styled.Text`
  font-size: 30px;
`;

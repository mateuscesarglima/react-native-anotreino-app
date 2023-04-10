import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View``;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 15}px;
  position: relative;
  flex-direction: row;
`;

export const BackButton = styled.TouchableOpacity``;

export const Icon = styled(Feather)``;
export const Title = styled.Text`
  margin: 0 auto;
`;

export const Main = styled.View``;

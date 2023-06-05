import { RectButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

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
  font-size: 25px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Main = styled.View``;

export const DescriptionContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 0px 15px;
`;
export const DescriptionTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
`;
export const Description = styled.Text`
  text-align: center;
  margin-top: 10px;
  line-height: 23px;
  color: #495057;
`;
export const ExerciseTypeContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const CardItem = styled(RectButton)`
  background-color: #ddd;
  width: 80%;
  height: 100px;
  border-radius: 10px;
  padding: 10px;
  justify-content: flex-end;
`;

export const HitText = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const ExerciseType = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #495057;
`;

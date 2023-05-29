import { RectButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f1f3f5;
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

export const Title = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`;

export const Content = styled.View`
  width: 100%;
  padding: 20px 15px;
  background-color: #fff;
`;

export const ContentTitle = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
`;

export const Description = styled.Text`
  margin-top: 15px;
  font-size: ${RFValue(12)}px;
  color: #868e96;
  letter-spacing: 1px;
`;

export const NoteInputWrapper = styled.View`
  margin-top: 20px;
  border: 1px solid #495057;
  padding: 15px;
  border-radius: 5px;
`;

export const NoteInput = styled.TextInput`
  height: 100px;
`;

interface SaveNoteButtonTextProps {
  enabled: boolean;
}

export const SaveNoteButton = styled(RectButton)<SaveNoteButtonTextProps>`
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme, enabled }) =>
    enabled ? theme.colors.primary : "#DDD"};
  margin-top: 20px;
  border-radius: 5px;
`;

export const SaveNoteButtonText = styled.Text<SaveNoteButtonTextProps>`
  font-size: ${RFValue(15)}px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ enabled }) => (enabled ? "#FFF" : "#868e96")};
`;

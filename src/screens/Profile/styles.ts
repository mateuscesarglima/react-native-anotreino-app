import { ButtonPrimary } from "@Components/ui/atom/Button";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TextInputMask } from "react-native-masked-text";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";


export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const Icon = styled(Ionicons)`
  color: #fff;
  align-self: flex-end;
  font-size: 38px;
`;

export const Exit = styled.Text`
  font-size: 35px;
  color: black;
  align-self: flex-end;
  margin-left: 350px;
  margin-top: 10px;
`;

export const ExitContainer = styled.TouchableOpacity`
  position: absolute;
  align-self: flex-end;
  margin-top: 30px;
  margin-right: 10px;
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 40}px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

export const TitleTopo = styled.Text`
  font-size: 25px;
  color: white;
  align-self: center;
`;

export const NomeAluno = styled.Text`
  font-size: 22px;
  margin-bottom: 5px;
  color: white;
  align-self: flex-start;
  margin-left: 20px;
`;

export const PesoAlturaContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PesoColumn = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  margin-top: 20px;

`;

export const AlturaColumn = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  margin-top: 20px;

`;

export const PesoAlturaLabel = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const InputPeso = styled(TextInputMask).attrs({
  type: "custom",
  options: {
    mask: "999.90",
  },
})`
  width: 115px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  font-size: 40px;
  text-align: center;
`;

export const InputAltura = styled(TextInputMask).attrs({
  type: "custom",
  options: {
    mask: "9.90",
  },
})`
  width: 115px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  font-size: 40px;
  text-align: center;
`;

export const AlterarButton = styled(ButtonPrimary)`
  margin-top: 10px;
`;

export const IMCLabel = styled.Text`
  font-size: 25px;
  margin-top: 10px;
  align-self: center;
`;

export const AnamneseContainerPai = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

export const AnamneseContainerEsq = styled.View`
  flex-direction: column;
  padding-left: 15px;
`;

export const AnamneseContainerDir = styled.View`
  flex-direction: column;
  padding-left: 50px;
`;

export const Title = styled.Text`
  font-size: 50px;
`;

export const Field = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  width: 120px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
`;

export const ApplyButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 15px;
  border-radius: 8px;
`;

export const ApplyButtonText = styled.Text`
  color: #fff;
  font-size: ${RFValue(15)}px;
  font-weight: bold;
`;

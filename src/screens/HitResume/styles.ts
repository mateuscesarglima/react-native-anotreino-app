import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.View``;
export const ResumeHitText = styled.Text`
  align-self: center;
  margin-top: 30px;
  font-size: ${RFValue(18)}px;
  letter-spacing: 0.5px;
  font-weight: bold;
`;

export const TableContainer = styled.View``;
export const TableHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;
export const TableHeaderText = styled.Text`
  font-weight: 500;
  color: #495057;
`;

export const TableBody = styled.View`
  margin-top: 10px;
`;
export const TableRowItemWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 8px 0px;
`;

interface TableRowItemProps {
  color?: string;
}

export const TableRowItem = styled.Text`
  text-align: center;
  width: 120px;
  font-weight: 600;
`;

export const TableRowItemEsforcoText = styled(TableRowItem)<TableRowItemProps>`
  color: ${({ color }) => {
    if (color === undefined) {
      return "#f08c00";
    } else {
      return color;
    }
  }};
`;

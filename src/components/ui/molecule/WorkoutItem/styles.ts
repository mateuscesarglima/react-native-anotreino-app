import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const WorkoutItemContainer = styled.TouchableOpacity`
  background-color: #ddd;
  width: 300px;
  padding: 15px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const ItemName = styled.Text`
  font-size: 25px;
  text-align: center;
`;

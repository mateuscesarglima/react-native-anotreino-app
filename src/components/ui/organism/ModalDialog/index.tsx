import * as React from "react";
import { View } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import { useTheme } from "styled-components";

interface IModalDialog {
  visible: boolean;
  handleShowModalDialog: (fichaId?: string) => void;
  handleRemoveFicha: (fichaId: string) => void;
  idFichaSelecionada: string;
}

export const ModalDialog = ({
  handleShowModalDialog,
  visible,
  handleRemoveFicha,
  idFichaSelecionada,
}: IModalDialog) => {
  const theme = useTheme();
  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={handleShowModalDialog}>
          <Dialog.Title>Deseja excluir a ficha?</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">Esta ação não poderá ser desfeita</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                handleRemoveFicha(idFichaSelecionada);
                handleShowModalDialog();
              }}
              textColor={theme.colors.primary}
              labelStyle={{ fontSize: 18 }}
            >
              Sim
            </Button>
            <Button
              onPress={() => handleShowModalDialog()}
              textColor={theme.colors.primary}
              labelStyle={{ fontSize: 18 }}
            >
              Não
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

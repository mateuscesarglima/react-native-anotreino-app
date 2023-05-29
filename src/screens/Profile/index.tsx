import { useAuth } from "@Context/auth";
import React from "react";
import { ScrollView } from "react-native";
import {
  AnamneseContainer,
  AnamneseContainerPai,
  Container,
  ExitContainer,
  Field,
  IMCLabel,
  Icon,
  Input,
  InputAltura,
  InputPeso,
  Label,
  NomeAluno,
  PesoAlturaColumn,
  PesoAlturaContainer,
  PesoAlturaLabel,
  TitleTopo,
  Header,
  AnamneseContainerEsq,
  AnamneseContainerDir,
  PesoColumn,
  AlturaColumn
} from "./styles";

export const Profile = () => {
  const { signOut } = useAuth();
  const [weight, setWeight] = React.useState("");
  const [height, setHeight] = React.useState("");

  const [bust, setBust] = React.useState("");
  const [leftArm, setLeftArm] = React.useState("");
  const [rightArm, setRightArm] = React.useState("");
  const [abdomen, setAbdomen] = React.useState("");
  const [waist, setWaist] = React.useState("");
  const [hip, setHip] = React.useState("");
  const [saddlebags, setSaddlebags] = React.useState("");
  const [leftThigh, setLeftThigh] = React.useState("");
  const [rightThigh, setRightThigh] = React.useState("");
  const [leftCalf, setLeftCalf] = React.useState("");
  const [rightCalf, setRightCalf] = React.useState("");

  const calcularIMC = () => {
    const pesoFloat = parseFloat(weight);
    const alturaFloat = parseFloat(height);
    if (pesoFloat && alturaFloat) {
      const imc = pesoFloat / (alturaFloat * alturaFloat);
      let descricao = "";
      if (imc < 18.5) {
        descricao = "Abaixo do peso";
      } else if (imc < 25) {
        descricao = "Peso normal";
      } else if (imc < 30) {
        descricao = "Sobrepeso";
      } else {
        descricao = "Obeso";
      }
      return `IMC: ${imc.toFixed(2)} - ${descricao}`;
    }
    return "";
  };

  return (
    <Container>
      <Header>
        <TitleTopo>Perfil</TitleTopo>
        <ExitContainer onPress={signOut}>
          <Icon name="exit-outline" size={24} color="white" />
        </ExitContainer>
        <NomeAluno>email@email.com</NomeAluno>
      </Header>

      <ScrollView>
        <PesoAlturaContainer>
          <PesoColumn>
            <InputPeso
              value={weight}
              onChangeText={(text) => setWeight(text)}
              keyboardType="numeric"
            />
            <PesoAlturaLabel>Peso</PesoAlturaLabel>
          </PesoColumn>
          <AlturaColumn>
            <InputAltura
              value={height}
              onChangeText={(text) => setHeight(text)}
              keyboardType="numeric"
            />
            <PesoAlturaLabel>Altura</PesoAlturaLabel>
          </AlturaColumn>
        </PesoAlturaContainer>
        <IMCLabel>{calcularIMC()}</IMCLabel>
        <AnamneseContainerPai>
          <AnamneseContainerEsq>
            <Field>
              <Label>Busto (cm)</Label>
              <Input
                value={bust}
                onChangeText={(text) => setBust(text)}
                keyboardType="numeric"
              />
            </Field>
            <Field>
              <Label>Braço Esq. (cm)</Label>
              <Input
                value={leftArm}
                onChangeText={(text) => setLeftArm(text)}
                keyboardType="numeric"
              />
            </Field>
            <Field>
              <Label>Braço Dir. (cm)</Label>
              <Input
                value={rightArm}
                onChangeText={(text) => setRightArm(text)}
                keyboardType="numeric"
              />
            </Field>
            <Field>
              <Label>Abdômen (cm)</Label>
              <Input
                value={abdomen}
                onChangeText={(text) => setAbdomen(text)}
                keyboardType="numeric"
              />
            </Field>
            <Field>
              <Label>Cintura (cm)</Label>
              <Input
                value={waist}
                onChangeText={(text) => setWaist(text)}
                keyboardType="numeric"
              />
            </Field>
            <Field>
              <Label>Quadril (cm)</Label>
              <Input
                value={hip}
                onChangeText={(text) => setHip(text)}
                keyboardType="numeric"
              />
            </Field>
          </AnamneseContainerEsq>
          <AnamneseContainerDir>
            <Field>
              <Label>Culote (cm)</Label>
              <Input
                value={saddlebags}
                onChangeText={(text) => setSaddlebags(text)}
                keyboardType="numeric"
              />
            </Field>
            <Field>
              <Label>Coxa Esq. (cm)</Label>
              <Input
                value={leftThigh}
                onChangeText={(text) => setLeftThigh(text)}
                keyboardType="numeric"
              />
            </Field>
            <Field>
              <Label>Coxa Dir. (cm)</Label>
              <Input
                value={rightThigh}
                onChangeText={(text) => setRightThigh(text)}
                keyboardType="numeric"
              />
            </Field>
            <Field>
              <Label>Panturrilha Esq. (cm)</Label>
              <Input
                value={leftCalf}
                onChangeText={(text) => setLeftCalf(text)}
                keyboardType="numeric"
              />
            </Field>
            <Field>
              <Label>Panturrilha Dir. (cm)</Label>
              <Input
                value={rightCalf}
                onChangeText={(text) => setRightCalf(text)}
                keyboardType="numeric"
              />
            </Field>
          </AnamneseContainerDir>
        </AnamneseContainerPai>
      </ScrollView>
    </Container>
  );
};

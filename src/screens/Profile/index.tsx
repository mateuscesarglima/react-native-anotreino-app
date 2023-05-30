import { useAuth } from "@Context/auth";
import React from "react";
import { ScrollView, View } from "react-native";
import {
  AlturaColumn,
  AnamneseContainerDir,
  AnamneseContainerEsq,
  AnamneseContainerPai,
  ApplyButton,
  ApplyButtonText,
  Container,
  ExitContainer,
  Field,
  Header,
  IMCLabel,
  Icon,
  Input,
  InputAltura,
  InputPeso,
  Label,
  NomeAluno,
  PesoAlturaContainer,
  PesoAlturaLabel,
  PesoColumn,
  TitleTopo,
} from "./styles";

export const Profile = () => {
  const { signOut, user, updateUserInfo } = useAuth();
  const { info } = user;
  const {
    abdomen,
    altura,
    peso,
    braco_dir,
    braco_esq,
    cintura,
    quadril,
    coxa_dir,
    coxa_esq,
    panturrilha_dir,
    panturrilha_esq,
  } = info;

  const [weight, setWeight] = React.useState(peso);
  const [height, setHeight] = React.useState(altura);

  const [bust, setBust] = React.useState("");
  const [leftArm, setLeftArm] = React.useState(braco_esq);

  const [rightArm, setRightArm] = React.useState(braco_dir);
  const [abs, setAbs] = React.useState(abdomen);
  const [waist, setWaist] = React.useState(cintura);
  const [hip, setHip] = React.useState(quadril);
  const [saddlebags, setSaddlebags] = React.useState("");
  const [leftThigh, setLeftThigh] = React.useState(coxa_esq);
  const [rightThigh, setRightThigh] = React.useState(coxa_dir);
  const [leftCalf, setLeftCalf] = React.useState(panturrilha_esq);
  const [rightCalf, setRightCalf] = React.useState(panturrilha_dir);

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

  const handleOnUpdate = () => {
    const payload = {
      peso: weight,
      altura: height,
      braco_dir: rightArm,
      braco_esq: leftArm,
      cintura: waist,
      quadril: hip,
      coxa_dir: rightThigh,
      coxa_esq: leftThigh,
      panturrilha_dir: rightCalf,
      panturrilha_esq: leftCalf,
      abdomen: abs,
    };
    updateUserInfo(payload);
  };

  return (
    <Container>
      <Header>
        <ExitContainer onPress={signOut}>
          <Icon name="exit-outline" size={35} color="white" />
        </ExitContainer>
        <TitleTopo>Perfil</TitleTopo>
        <NomeAluno>email@email.com</NomeAluno>
      </Header>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
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
                value={abs}
                onChangeText={(text) => setAbs(text)}
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
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <ApplyButton
            onPress={() => {
              handleOnUpdate();
            }}
          >
            <ApplyButtonText>Atualizar</ApplyButtonText>
          </ApplyButton>
        </View>
      </ScrollView>
    </Container>
  );
};

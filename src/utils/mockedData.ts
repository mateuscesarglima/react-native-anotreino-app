// import uuid from "react-native-uuid";

import { IExerciseCategory } from "@Interfaces/index";
import uuid from "react-native-uuid";
import { IExerciseType } from "../interfaces/index";

// export const ficha: IFicha[] = [
//   {
//     id: uuid.v4().toString(),
//     title: "Ficha A",
//     exercicios: [
//       {
//         id: uuid.v4().toString(),
//         name: "Tríceps Polia Barra V",
//         description:
//           "O Tríceps Pulley Corda é um exercício para tríceps que pode ser feito em uma academia com a ajuda de uma corda e um cabo. Ele ajuda a fortalecer os músculos do tríceps e melhorar a definição dos braços.",
//       },
//       {
//         id: uuid.v4().toString(),
//         name: "Tríceps Polia Barra V",
//         description:
//           "O Tríceps Pulley Corda é um exercício para tríceps que pode ser feito em uma academia com a ajuda de uma corda e um cabo. Ele ajuda a fortalecer os músculos do tríceps e melhorar a definição dos braços.",
//       },
//       {
//         id: uuid.v4().toString(),
//         name: "Tríceps Polia Barra V",
//         description:
//           "O Tríceps Pulley Corda é um exercício para tríceps que pode ser feito em uma academia com a ajuda de uma corda e um cabo. Ele ajuda a fortalecer os músculos do tríceps e melhorar a definição dos braços.",
//       },
//       {
//         id: uuid.v4().toString(),
//         name: "Tríceps Polia Barra V",
//         description:
//           "O Tríceps Pulley Corda é um exercício para tríceps que pode ser feito em uma academia com a ajuda de uma corda e um cabo. Ele ajuda a fortalecer os músculos do tríceps e melhorar a definição dos braços.",
//       },
//       {
//         id: uuid.v4().toString(),
//         name: "Tríceps Polia Barra V",
//         description:
//           "O Tríceps Pulley Corda é um exercício para tríceps que pode ser feito em uma academia com a ajuda de uma corda e um cabo. Ele ajuda a fortalecer os músculos do tríceps e melhorar a definição dos braços.",
//       },
//       {
//         id: uuid.v4().toString(),
//         name: "Tríceps Polia Barra V",
//         description:
//           "O Tríceps Pulley Corda é um exercício para tríceps que pode ser feito em uma academia com a ajuda de uma corda e um cabo. Ele ajuda a fortalecer os músculos do tríceps e melhorar a definição dos braços.",
//       },
//       {
//         id: uuid.v4().toString(),
//         name: "Tríceps Polia Barra V",
//         description:
//           "O Tríceps Pulley Corda é um exercício para tríceps que pode ser feito em uma academia com a ajuda de uma corda e um cabo. Ele ajuda a fortalecer os músculos do tríceps e melhorar a definição dos braços.",
//       },
//     ],
//   },
//   {
//     id: uuid.v4().toString(),
//     title: "Ficha B",
//     exercicios: [],
//   },
//   {
//     id: uuid.v4().toString(),
//     title: "Ficha C",
//     exercicios: [],
//   },
// ];

export const exerciseCategory: IExerciseCategory[] = [
  {
    key: "peitoral",
    label: "Peitoral",
  },
  {
    key: "costas",
    label: "Costas",
  },
  {
    key: "biceps",
    label: "Bíceps",
  },
  {
    key: "ombros",
    label: "Ombros",
  },
  {
    key: "abdomen",
    label: "Abdômen",
  },
  {
    key: "triceps",
    label: "Tríceps",
  },
  {
    key: "pernas",
    label: "Pernas",
  },
  {
    key: "antebraços",
    label: "Antebraços",
  },
];

// export type IExerciseCategoryData = typeof exerciseCategoryData;

export const exercisesSelectedData: IExerciseType = {
  peito: [
    {
      id: uuid.v4().toString(),
      name: "Supino reto",
      description:
        "Um exercício de treinamento de força realizado deitado em um banco plano, onde o praticante empurra uma barra carregada em direção ao peito.",
      videoId: "sqOw2Y6uDWQ",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Supino Inclinado c/ Halter",
      description:
        "Um exercício de treinamento de força realizado em um banco inclinado, onde o praticante segura halteres em cada mão e empurra-os para cima em direção ao peito.",
      videoId: "F4Q1g2z8MWM",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Supino Reto c/ Halter",
      description:
        "Um exercício de treinamento de força realizado deitado em um banco plano, onde o praticante segura halteres em cada mão e os empurra em direção ao peito.",
      videoId: "SWVO95XzxKg",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Crucifixo Polia",
      description:
        "Um exercício de treinamento de força realizado em uma máquina de polia, onde o praticante ajusta as alças de cada lado, estende os braços para os lados e, em seguida, os traz para a frente, cruzando-os na altura do peito.",
      videoId: "mNWyWEJNCDM",
      weight: 0,
    },
  ],
  costas: [
    {
      id: uuid.v4().toString(),
      name: "Remada Curvada no Smith",
      description:
        " Um exercício de treinamento de força realizado no Smith Machine, onde o praticante se inclina para a frente e puxa uma barra em direção ao abdômen, focando nos músculos das costas.",
      videoId: "qnHNjVcVKYo",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Remada Sentada com Triângulo",
      description:
        "Um exercício de treinamento de força realizado em uma máquina específica, onde o praticante senta-se e puxa um cabo com um triângulo preso, visando fortalecer os músculos das costas.",
      videoId: "WxkMoxuMSho",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Remada Curvada c/ Pegada Invertida",
      description:
        "Um exercício de treinamento de força realizado segurando uma barra com as palmas das mãos voltadas para o corpo, o praticante se inclina para a frente e puxa a barra em direção ao abdômen, trabalhando os músculos das costas.",
      videoId: "zaAGOp11wbc",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Puxada por Trás",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "Y09q8JO0IwM",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Puxada Pela Frente c/ Pegada Invertida",
      description:
        "Um exercício de treinamento de força realizado segurando uma barra com as palmas das mãos voltadas para o corpo, o praticante puxa a barra em direção ao peito, trabalhando os músculos das costas e dos braços.",
      videoId: "tqP-u6B9G2E",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Puxada Pela Frente c/ Pegada Aberta",
      description:
        "Um exercício de treinamento de força realizado segurando uma barra com as palmas das mãos voltadas para fora, o praticante puxa a barra em direção ao peito, visando fortalecer os músculos das costas e dos braços.",
      videoId: "sAAge4YxIAc",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Remada Unilateral com Haltere (Serrote) ",
      description:
        "Um exercício de treinamento de força realizado segurando um haltere com uma das mãos, o praticante se inclina para a frente e puxa o haltere em direção ao abdômen, alternando os lados, focando nos músculos das costas.",
      videoId: "EUisRaNkCd4",
      weight: 0,
    },
  ],
  biceps: [
    {
      id: uuid.v4().toString(),
      name: "Rosca Direta Barra W",
      description:
        "Um exercício de treinamento de força realizado segurando uma barra W com as palmas das mãos voltadas para cima, o praticante flexiona os cotovelos para levantar a barra em direção aos ombros, enfatizando os músculos dos braços (bíceps).",
      videoId: "nQrobsCv8X4",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca com Halteres ",
      description:
        "Um exercício de treinamento de força realizado segurando halteres em cada mão com as palmas das mãos voltadas para cima, o praticante flexiona os cotovelos para levantar os halteres em direção aos ombros, trabalhando os músculos dos braços (bíceps).",
      videoId: "k31LK_VASok",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca Concentrada",
      description:
        "Um exercício de treinamento de força realizado sentado, apoiando o braço em uma superfície, o praticante flexiona o cotovelo para levantar um haltere em direção ao ombro, concentrando a tensão nos músculos do bíceps.",
      videoId: "k31LK_VASok",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca Direta c/ Halteres (Sentado)",
      description:
        "Um exercício de treinamento de força realizado sentado, segurando halteres em cada mão com as palmas das mãos voltadas para cima, o praticante flexiona os cotovelos para levantar os halteres em direção aos ombros, focando nos músculos dos braços (bíceps).",
      videoId: "ghl0bfn-hA0",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca Direta no Cabo",
      description:
        "Um exercício de treinamento de força realizado segurando um cabo com as palmas das mãos voltadas para cima, o praticante flexiona os cotovelos para levantar o cabo em direção aos ombros, visando fortalecer os músculos dos braços (bíceps).",
      videoId: "2eeOSoAJdD4",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca Alternada Inclinada ",
      description:
        "Um exercício de treinamento de força realizado sentado em um banco inclinado, segurando halteres em cada mão com as palmas das mãos voltadas para cima, o praticante alterna a flexão dos cotovelos, levantando um haltere de cada vez em direção aos ombros, trabalhando os músculos dos braços (bíceps).",
      videoId: "mUEDnCGrNP4",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca Martelo com Halteres",
      description:
        "Um exercício de treinamento de força realizado segurando halteres em cada mão com as palmas das mãos voltadas para dentro, o praticante flexiona os cotovelos para levantar os halteres em direção aos ombros, focando nos músculos dos braços (bíceps) e antebraços.",
      videoId: "5vPGH1uTtbs",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca no cabo (Deitado)",
      description:
        "Um exercício de treinamento de força realizado deitado em um banco inclinado, segurando um cabo com as palmas das mãos voltadas para cima, o praticante flexiona os cotovelos para levantar o cabo em direção aos ombros, trabalhando os músculos dos braços (bíceps).",
      videoId: "5kjoCPNdXzE",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca no Crossover",
      description:
        "Um exercício de treinamento de força realizado em uma máquina crossover, segurando as alças com as palmas das mãos voltadas para cima, o praticante flexiona os cotovelos para levantar as alças em direção aos ombros, enfatizando os músculos dos braços (bíceps).",
      videoId: "_yNqCUTvUWc",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca Scott Unilateral",
      description:
        "Um exercício de treinamento de força realizado sentado em um banco Scott, segurando um haltere em uma das mãos, o praticante flexiona o cotovelo para levantar o haltere em direção ao ombro, trabalhando o músculo do bíceps de forma unilateral.",
      videoId: "ZyisfW7q3qs",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca Scott com Barra W",
      description:
        "Um exercício de treinamento de força realizado sentado em um banco Scott, segurando uma barra W com as palmas das mãos voltadas para cima, o praticante flexiona os cotovelos para levantar a barra em direção aos ombros, enfatizando os músculos dos braços (bíceps).",
      videoId: "Kh4G5N48EO8",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca Martelo no Scott c/ Halteres",
      description:
        " Um exercício de treinamento de força realizado sentado em um banco Scott, segurando halteres em cada mão com as palmas das mãos voltadas para dentro, o praticante flexiona os cot",
      videoId: "xDaBywsDams",
      weight: 0,
    },
  ],
  ombros: [
    {
      id: uuid.v4().toString(),
      name: "Crucifixo Invertido no Voador",
      description:
        "Um exercício de treinamento de força realizado em uma máquina de voador invertido, onde o praticante se posiciona de costas para o equipamento e realiza movimentos de abertura dos braços para trabalhar os músculos do peitoral e dos ombros.",
      videoId: "SNN6BftNts8",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Crucifixo Inverso na Roldana",
      description:
        "Um exercício de treinamento de força realizado utilizando uma roldana, onde o praticante segura as alças com as palmas das mãos voltadas para baixo e realiza movimentos de abertura dos braços para trabalhar os músculos do peitoral e dos ombros.",
      videoId: "3bF87yW4enQ",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Desenvolvimento de Ombros com Barra",
      description:
        "Um exercício de treinamento de força realizado em pé, segurando uma barra na altura dos ombros, o praticante empurra a barra para cima, estendendo os braços para trabalhar os músculos dos ombros.",
      videoId: "o2LfBH1I8r8",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Desenvolvimento de Ombros com Halteres",
      description:
        "Um exercício de treinamento de força realizado em pé, segurando halteres em cada mão na altura dos ombros, o praticante empurra os halteres para cima, estendendo os braços para trabalhar os músculos dos ombros.",
      videoId: "iQfHVeuVg",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Desenvolvimento Arnold",
      description:
        "Um exercício de treinamento de força inspirado por Arnold Schwarzenegger, onde o praticante realiza uma combinação de movimentos do desenvolvimento de ombros. Inicia-se com os halteres na altura dos ombros, com as palmas voltadas para o corpo, e à medida que os braços são estendidos, as palmas são giradas para fora para trabalhar diferentes partes dos músculos dos ombros.",
      videoId: "YghvTx_GI2c",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Desenvolvimento Arnold (Ombros)",
      description:
        "Um exercício de treinamento de força realizado em pé, segurando halteres em cada mão com as palmas voltadas para baixo, o praticante levanta os halteres em direção à frente, até a altura dos ombros, visando fortalecer os músculos dos ombros.",
      videoId: "YghvTx_GI2c",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Elevação Frontal com Halteres",
      description:
        "Um exercício de treinamento de força realizado em pé, segurando halteres em cada mão, o praticante levanta os halteres para a frente, mantendo os braços estendidos, visando fortalecer os músculos dos ombros.",
      videoId: "YghvTx_GI2c",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Elevação Lateral com Halteres",
      description:
        "Um exercício de treinamento de força realizado em pé, segurando halteres em cada mão, o praticante levanta os halteres para os lados, mantendo os braços estendidos, visando fortalecer os músculos dos ombros e dos deltoides.",
      videoId: "qDAoUOmdbi4",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Elevação Lateral na Roldana",
      description:
        "Um exercício de treinamento de força realizado utilizando uma roldana, onde o praticante segura as alças com as palmas das mãos voltadas para baixo e realiza movimentos de levantamento dos braços para os lados, visando fortalecer os músculos dos ombros e dos deltoides.",
      videoId: "5xAn7PeLeiQ",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Remada Alta com barras",
      description:
        "Um exercício de treinamento de força realizado em pé ou sentado, onde o praticante segura uma barra na altura da cintura e puxa a barra em direção ao peito, mantendo os cotovelos elevados, para trabalhar os músculos das costas e dos ombros.",
      videoId: "QZD6vq22qJg",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Remada Alta com Halteres",
      description:
        "Um exercício de treinamento de força realizado em pé ou sentado, segurando halteres em cada mão, onde o praticante puxa os halteres em direção ao peito, mantendo os cotovelos elevados, para trabalhar os músculos das costas e dos ombros.",
      videoId: "vW--lca6Knw",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Remada Alta com Halteres",
      description:
        "Um exercício de treinamento de força realizado em pé ou sentado, segurando halteres em cada mão, onde o praticante puxa os halteres em direção ao peito, mantendo os cotovelos elevados, para trabalhar os músculos das costas e dos ombros.",
      videoId: "vW--lca6Knw",
      weight: 0,
    },
  ],
  abdomem: [
    {
      id: uuid.v4().toString(),
      name: "Abdominal Oblíquo Prancha",
      description:
        "Um exercício de fortalecimento abdominal realizado na posição de prancha, onde o praticante apoia-se nos antebraços e mantém o corpo reto. O movimento envolve a contração dos músculos oblíquos para trabalhar a região lateral do abdômen.",
      videoId: "D0w-2g_-G-Q",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Abdominal Nas Barras Paralelas",
      description:
        "Um exercício de fortalecimento abdominal realizado utilizando barras paralelas, onde o praticante suspende as pernas no ar e levanta os joelhos em direção ao peito para trabalhar os músculos abdominais.",
      videoId: "OcjLM6Weh-0",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Abdominal Supra Cabo",
      description:
        "Um exercício de fortalecimento abdominal realizado com a utilização de um cabo de tração, onde o praticante segura as alças e puxa o cabo em direção ao corpo, envolvendo a contração dos músculos abdominais superiores.",
      videoId: "jqnwfqpvo9U",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Abdominal Supra na Bola",
      description:
        "Um exercício de fortalecimento abdominal realizado com a utilização de uma bola de estabilidade, onde o praticante se deita sobre a bola e executa movimentos de flexão do tronco para trabalhar os músculos abdominais superiores.",
      videoId: "DMduCHE7qTw",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Abdominal Supra na Prancha",
      description:
        "Um exercício de fortalecimento abdominal realizado na posição de prancha, onde o praticante apoia-se nas mãos e mantém o corpo reto. O movimento envolve a contração dos músculos abdominais superiores para estabilizar o tronco.",
      videoId: "HI-rCGd4fqU",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Abdominal Infra no Banco",
      description:
        "Um exercício de fortalecimento abdominal realizado com a utilização de um banco, onde o praticante se posiciona com as costas apoiadas no banco e as pernas suspensas. O movimento envolve a elevação das pernas em direção ao peito para trabalhar os músculos abdominais inferiores.",
      videoId: "fN1zziClTfE",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Abdominal Sentado na Máquina",
      description:
        "Um exercício de fortalecimento abdominal realizado em uma máquina específica para abdominais, onde o praticante se senta e executa movimentos de flexão do tronco, envolvendo a contração dos músculos abdominais.",
      videoId: "_g6RCj4cq4I",
      weight: 0,
    },
  ],
  triceps: [
    {
      id: uuid.v4().toString(),
      name: "Tríceps Polia Barra V",
      description:
        "Um exercício para tríceps realizado utilizando uma polia e uma barra em formato de V. O praticante segura a barra com as mãos e realiza movimentos de extensão dos braços, trabalhando os músculos tríceps.",
      videoId: "k4Rl9WksA5o",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Tríceps Barra Paralela",
      description:
        "Um exercício para tríceps realizado utilizando barras paralelas. O praticante suspende o corpo entre as barras e realiza movimentos de flexão e extensão dos braços, trabalhando os músculos tríceps.",
      videoId: "TB0HLYUXtos",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Tríceps Banco",
      description:
        "Um exercício para tríceps realizado utilizando um banco. O praticante se senta no banco e apoia as mãos no banco, realizando movimentos de flexão e extensão dos braços para trabalhar os músculos tríceps.",
      videoId: "6EFb3xwsigQ",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Tríceps Polia Francês Corda",
      description:
        "Um exercício para tríceps realizado utilizando uma polia e uma corda. O praticante segura a corda com as mãos e realiza movimentos de extensão dos braços acima da cabeça, trabalhando os músculos tríceps.",
      videoId: "Xn-fIQw08q4",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Tríceps com Corda na Roldana",
      description:
        "Um exercício para tríceps realizado utilizando uma corda e uma roldana. O praticante segura a corda com as mãos e realiza movimentos de extensão dos braços, puxando a corda para baixo, trabalhando os músculos tríceps.",
      videoId: "gbnLZto6b0s",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Tríceps Testa",
      description:
        "Um exercício para tríceps realizado deitado em um banco ou no chão. O praticante segura uma barra ou halteres com as mãos e realiza movimentos de flexão e extensão dos braços sobre a testa, trabalhando os músculos tríceps.",
      videoId: "oqob5MHbzBc",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Flexão de Braços no Solo com Mãos Próximas",
      description:
        "Um exercício para tríceps realizado no chão. O praticante assume a posição de flexão de braços com as mãos próximas uma da outra e realiza movimentos de flexão e extensão dos braços, trabalhando os músculos tríceps.",
      videoId: "z9Wlc5-f8H4",
      weight: 0,
    },
  ],
  pernas: [
    {
      id: uuid.v4().toString(),
      name: "Agachamento Afundo com Halteres",
      description:
        "Um exercício de agachamento realizado com halteres. O praticante dá um passo à frente e flexiona os joelhos, descendo o corpo em direção ao chão, e então retorna à posição inicial, trabalhando principalmente os músculos das pernas, como quadríceps, glúteos e isquiotibiais.",
      videoId: "6Zz_RG0EHFE",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Agachamento Smith",
      description:
        "Um exercício de agachamento realizado utilizando a máquina Smith, que possui uma barra fixa em um trilho. O praticante posiciona-se embaixo da barra, apoia-a nos ombros e realiza movimentos de flexão e extensão dos joelhos, trabalhando os músculos das pernas.",
      videoId: "mhu6HkDYvlw",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Agachamento no Hack",
      description:
        "Um exercício de agachamento realizado na máquina Hack, onde o praticante posiciona-se em pé e apoia os ombros em uma plataforma inclinada. Em seguida, flexiona os joelhos, descendo o corpo em direção ao chão, e retorna à posição inicial, trabalhando os músculos das pernas.",
      videoId: "JZCTozb47rM",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Elevação de Quadril",
      description:
        "Um exercício de fortalecimento dos músculos glúteos e isquiotibiais realizado no chão. O praticante deita-se de costas com os joelhos flexionados e eleva o quadril em direção ao teto, contraindo os músculos do glúteo e posterior da coxa.",
      videoId: "wNKb_CsSdg4",
      weight: 0,
    },
    {
      id: uuid.v4().toString(),
      name: "Cadeira Extensora",
      description:
        "Um exercício para a musculatura das coxas realizado na máquina de cadeira extensora. O praticante senta-se na máquina e estende as pernas contra uma carga resistente, trabalhando principalmente os músculos quadríceps.",
      videoId: "lmK4wsg8GAM",
      weight: 0,
    },
  ],
};

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
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "sqOw2Y6uDWQ",
    },
    {
      id: uuid.v4().toString(),
      name: "Supino Inclinado c/ Halter",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "F4Q1g2z8MWM",
    },
    {
      id: uuid.v4().toString(),
      name: "Supino Reto c/ Halter",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "SWVO95XzxKg",
    },
    {
      id: uuid.v4().toString(),
      name: "Crucifixo Polia",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "mNWyWEJNCDM",
    },
  ],
  costas: [
    {
      id: uuid.v4().toString(),
      name: "Remada Curvada no Smith",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "qnHNjVcVKYo",
    },
    {
      id: uuid.v4().toString(),
      name: "Remada Sentada com Triângulo",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "WxkMoxuMSho",
    },
    {
      id: uuid.v4().toString(),
      name: "Remada Curvada c/ Pegada Invertida",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "zaAGOp11wbc",
    },
    {
      id: uuid.v4().toString(),
      name: "Puxada por Trás",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "Y09q8JO0IwM",
    },
    {
      id: uuid.v4().toString(),
      name: "Puxada Pela Frente c/ Pegada Invertida",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "tqP-u6B9G2E",
    },
    {
      id: uuid.v4().toString(),
      name: "Puxada Pela Frente c/ Pegada Aberta",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "sAAge4YxIAc",
    },
    {
      id: uuid.v4().toString(),
      name: "Remada Unilateral com Haltere (Serrote) ",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "EUisRaNkCd4",
    },
  ],
  biceps: [
    {
      id: uuid.v4().toString(),
      name: "Rosca Direta Barra W",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "nQrobsCv8X4",
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca com Halteres ",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "k31LK_VASok",
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca Concentrada",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "k31LK_VASok",
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca Direta c/ Halteres (Sentado)",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "ghl0bfn-hA0",
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca Direta no Cabo",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "2eeOSoAJdD4",
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca Alternada Inclinada ",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "mUEDnCGrNP4",
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca Martelo com Halteres",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "5vPGH1uTtbs",
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca no cabo (Deitado)",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "5kjoCPNdXzE",
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca no Crossover",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "_yNqCUTvUWc",
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca Scott Unilateral",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "ZyisfW7q3qs",
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca Scott com Barra W",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "Kh4G5N48EO8",
    },
    {
      id: uuid.v4().toString(),
      name: "Rosca Martelo no Scott c/ Halteres",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "xDaBywsDams",
    },
  ],
  ombros: [
    {
      id: uuid.v4().toString(),
      name: "Crucifixo Invertido no Voador",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "SNN6BftNts8",
    },
    {
      id: uuid.v4().toString(),
      name: "Crucifixo Inverso na Roldana",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "3bF87yW4enQ",
    },
    {
      id: uuid.v4().toString(),
      name: "Desenvolvimento de Ombros com Barra",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "o2LfBH1I8r8",
    },
    {
      id: uuid.v4().toString(),
      name: "Desenvolvimento de Ombros com Halteres",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "iQfHVeuVg",
    },
    {
      id: uuid.v4().toString(),
      name: "Desenvolvimento Arnold",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "YghvTx_GI2c",
    },
    {
      id: uuid.v4().toString(),
      name: "Desenvolvimento Arnold (Ombros)",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "YghvTx_GI2c",
    },
    {
      id: uuid.v4().toString(),
      name: "Elevação Frontal com Halteres",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "YghvTx_GI2c",
    },
    {
      id: uuid.v4().toString(),
      name: "Elevação Lateral com Halteres",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "qDAoUOmdbi4",
    },
    {
      id: uuid.v4().toString(),
      name: "Elevação Lateral na Roldana",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "5xAn7PeLeiQ",
    },
    {
      id: uuid.v4().toString(),
      name: "Remada Alta com barras",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "QZD6vq22qJg",
    },
    {
      id: uuid.v4().toString(),
      name: "Remada Alta com Halteres",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "vW--lca6Knw",
    },
    {
      id: uuid.v4().toString(),
      name: "Remada Alta com Halteres",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "vW--lca6Knw",
    },
  ],
  abdomem: [
    {
      id: uuid.v4().toString(),
      name: "Abdominal Oblíquo Prancha",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "D0w-2g_-G-Q",
    },
    {
      id: uuid.v4().toString(),
      name: "Abdominal Nas Barras Paralelas",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "OcjLM6Weh-0",
    },
    {
      id: uuid.v4().toString(),
      name: "Abdominal Supra Cabo",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "jqnwfqpvo9U",
    },
    {
      id: uuid.v4().toString(),
      name: "Abdominal Supra Cabo",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "jqnwfqpvo9U",
    },
    {
      id: uuid.v4().toString(),
      name: "Abdominal Supra na Bola",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "DMduCHE7qTw",
    },
    {
      id: uuid.v4().toString(),
      name: "Abdominal Supra na Prancha",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "HI-rCGd4fqU",
    },
    {
      id: uuid.v4().toString(),
      name: "Abdominal Infra no Banco",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "fN1zziClTfE",
    },
    {
      id: uuid.v4().toString(),
      name: "Abdominal Sentado na Máquina",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "_g6RCj4cq4I",
    },
    {
      id: uuid.v4().toString(),
      name: "",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "fN1zziClTfE",
    },
  ],
  triceps: [
    {
      id: uuid.v4().toString(),
      name: "Tríceps Polia Barra V",
      description:
        "O Tríceps Pulley Corda é um exercício para tríceps que pode ser feito em uma academia com a ajuda de uma corda e um cabo. Ele ajuda a fortalecer os músculos do tríceps e melhorar a definição dos braços.",
      videoId: "k4Rl9WksA5o",
    },
    {
      id: uuid.v4().toString(),
      name: "Tríceps Polia Barra V",
      description:
        "O Tríceps Pulley Corda é um exercício para tríceps que pode ser feito em uma academia com a ajuda de uma corda e um cabo. Ele ajuda a fortalecer os músculos do tríceps e melhorar a definição dos braços.",
      videoId: "k4Rl9WksA5o",
    },
    {
      id: uuid.v4().toString(),
      name: "Tríceps Barra Paralela",
      description:
        "O Tríceps Pulley Corda é um exercício para tríceps que pode ser feito em uma academia com a ajuda de uma corda e um cabo. Ele ajuda a fortalecer os músculos do tríceps e melhorar a definição dos braços.",
      videoId: "TB0HLYUXtos",
    },
    {
      id: uuid.v4().toString(),
      name: "Tríceps Banco",
      description:
        "O Tríceps Pulley Corda é um exercício para tríceps que pode ser feito em uma academia com a ajuda de uma corda e um cabo. Ele ajuda a fortalecer os músculos do tríceps e melhorar a definição dos braços.",
      videoId: "6EFb3xwsigQ",
    },
    {
      id: uuid.v4().toString(),
      name: "Tríceps Polia Francês Corda",
      description:
        "O Tríceps Francês com Halteres é um exercício eficaz para desenvolver os músculos do tríceps. Ele é feito com halteres e ajuda a fortalecer e definir a parte de trás dos braços.",
      videoId: "Xn-fIQw08q4",
    },
    {
      id: uuid.v4().toString(),
      name: "Tríceps com Corda na Roldana",
      description: "Lorem ipsum",
      videoId: "gbnLZto6b0s",
    },
    {
      id: uuid.v4().toString(),
      name: "Tríceps Testa",
      description: "Lorem ipsum",
      videoId: "oqob5MHbzBc",
    },
    {
      id: uuid.v4().toString(),
      name: "Flexão de Braços no Solo com Mãos Próximas",
      description: "Lorem ipsum",
      videoId: "z9Wlc5-f8H4",
    },
  ],
  pernas: [
    {
      id: uuid.v4().toString(),
      name: "Agachamento Afundo com Halteres",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "6Zz_RG0EHFE",
    },
    {
      id: uuid.v4().toString(),
      name: "Agachamento Smith",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "mhu6HkDYvlw",
    },
    {
      id: uuid.v4().toString(),
      name: "Agachamento no Hack",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "JZCTozb47rM",
    },
    {
      id: uuid.v4().toString(),
      name: "Elevação de Quadril",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "wNKb_CsSdg4",
    },
    {
      id: uuid.v4().toString(),
      name: "Cadeira Extensora",
      description: "Lorem ipsum dolor, sit amet consectetur",
      videoId: "lmK4wsg8GAM",
    },
  ],
};

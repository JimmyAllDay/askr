import bg1 from "../../assets/images/bg1.jpg";
import bg2 from "../../assets/images/bg2.jpg";
import bg3 from "../../assets/images/bg3.jpg";

export const imagesArray = [bg1, bg2, bg3];

import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar4 from "../../assets/images/avatar4.png";

export const avatars = [avatar1, avatar2, avatar4];

export const initialQuestionsState = {
  questions: {
    N2X29qinbkkLxBEXLzT51: {
      questionId: "N2X29qinbkkLxBEXLzT51",
      dateAsked:
        "Fri Oct 15 2021 20:11:30 GMT+1100 (Australian Eastern Daylight Time)",
      asker: "James Marshall",
      askerId: 1,
      avatar: avatars[2],
      A: "Meditate",
      B: "Practice writing",
      answers: {},
      likes: [],
    },
    H4l3YteiblpYlTNXLzM76: {
      questionId: "H4l3YteiblpYlTNXLzM76",
      dateAsked:
        "Fri Oct 15 2021 20:12:30 GMT+1100 (Australian Eastern Daylight Time)",
      asker: "Hugh McKenzie",
      askerId: 2,
      avatar: avatars[1],
      A: "Eat beans",
      B: "Do a backflip",
      answers: {
        2: "B",
        3: "B",
      },
      likes: [3],
    },
    G6X3XqatibbLqBETLzK38: {
      questionId: "G6X3XqatibbLqBETLzK38",
      dateAsked:
        "Fri Oct 15 2021 20:13:30 GMT+1100 (Australian Eastern Daylight Time)",
      asker: "Gemma Nicholas",
      askerId: 3,
      avatar: avatars[0],
      A: "Go for a walk in the sun",
      B: "Eat nutritious food",
      answers: { 2: "B" },
      likes: [],
    },
    G6X3XqatibeLqQETLoK27: {
      questionId: "G6X3XqatibeLqQETLoK27",
      dateAsked:
        "Sun Mar 13 2022 10:02:30 GMT+1100 (Australian Eastern Daylight Time)",
      asker: "Nick Lawrentin",
      askerId: 4,
      avatar: avatars[2],
      A: "Play golf",
      B: "Go have a beer",
      answers: { 1: "B" },
      likes: [1, 5],
    },
  },
  ids: [
    "N2X29qinbkkLxBEXLzT51",
    "H4l3YteiblpYlTNXLzM76",
    "G6X3XqatibbLqBETLzK38",
    "G6X3XqatibeLqQETLoK27",
  ],
};

export const initialLoggedInState = {
  loggedIn: false,
  id: "",
  firstName: "",
  lastName: "",
  avatar: "",
};

export const initialUserState = {
  users: {
    1: {
      id: 1,
      firstName: "James",
      lastName: "Marshall",
      avatar: avatars[2],
    },
    2: {
      id: 2,
      firstName: "Hugh",
      lastName: "McKenzie",
      avatar: avatars[1],
    },
    3: {
      id: 3,
      firstName: "Gemma",
      lastName: "Nicholas",
      avatar: avatars[0],
    },
    4: {
      id: 4,
      firstName: "Nick",
      lastName: "Lawrentin",
      avatar: avatars[2],
    },
    5: {
      id: 5,
      firstName: "Guest",
      lastName: "User",
      avatar: avatars[1],
    },
  },
  ids: [1, 2, 3, 4, 5],
};

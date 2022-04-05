import bg1 from "../../assets/images/bg1.jpg";
import bg2 from "../../assets/images/bg2.jpg";
import bg3 from "../../assets/images/bg3.jpg";

export const imagesArray = [bg1, bg2, bg3];

import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar4 from "../../assets/images/avatar4.png";

export const initialQuestionState = {
  questions: {
    N2X29qinbkkLxBEXLzT51: {
      dateAsked:
        "Fri Oct 15 2021 20:11:30 GMT+1100 (Australian Eastern Daylight Time)",
      asker: "James Marshall",
      askerId: 1,
      avatar: avatar4,
      A: "Meditate",
      B: "Practice writing",
      answers: {},
      likes: [{ id: "1" }],
    },
    H4l3YteiblpYlTNXLzM76: {
      dateAsked:
        "Fri Oct 15 2021 20:12:30 GMT+1100 (Australian Eastern Daylight Time)",
      asker: "Hugh McKenzie",
      askerId: 2,
      avatar: avatar2,
      A: "Eat a bean",
      B: "Do a backflip",
      answers: {
        2: "B",
        3: "B",
      },
      likes: [],
    },
    G6X3XqatibbLqBETLzK38: {
      dateAsked:
        "Fri Oct 15 2021 20:13:30 GMT+1100 (Australian Eastern Daylight Time)",
      asker: "Gemma Nicholas",
      askerId: 3,
      avatar: avatar1,
      A: "Go for a walk in the sun",
      B: "Eat nutritious food",
      answers: { 2: "B" },
      likes: [],
    },
    G6X3XqatibeLqQETLoK27: {
      dateAsked:
        "Sun Mar 13 2022 10:02:30 GMT+1100 (Australian Eastern Daylight Time)",
      asker: "Nick Lawrentin",
      askerId: 4,
      avatar: avatar4,
      A: "Play golf",
      B: "Go have a beer",
      answers: { 1: "B" },
      likes: [{ id: "1" }],
    },
  },
  questionIds: [
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
      firstName: "James",
      lastName: "Marshall",
      avatar: avatar4,
      questionsAsked: 1,
      questionsAnswered: 0,
      likes: [{ id: "1" }],
    },
    2: {
      firstName: "Hugh",
      lastName: "McKenzie",
      avatar: avatar2,
      questionsAsked: 1,
      questionsAnswered: 2,
      likes: [],
    },
    3: {
      firstName: "Gemma",
      lastName: "Nicholas",
      avatar: avatar1,
      questionsAsked: 1,
      questionsAnswered: 1,
      likes: [],
    },
    4: {
      firstName: "Nick",
      lastName: "Lawrentin",
      avatar: avatar4,
      questionsAsked: 1,
      questionsAnswered: 0,
      likes: [{ id: "1" }],
    },
    5: {
      firstName: "Guest",
      lastName: "User",
      avatar: avatar2,
      questionsAsked: 0,
      questionsAnswered: 0,
      likes: [],
    },
  },
  userIds: [1, 2, 3, 4, 5],
};

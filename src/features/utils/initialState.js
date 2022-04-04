import bg1 from "../../assets/images/bg1.jpg";
import bg2 from "../../assets/images/bg2.jpg";
import bg3 from "../../assets/images/bg3.jpg";

export const imagesArray = [bg1, bg2, bg3];

import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar4 from "../../assets/images/avatar4.png";

//TODO: refactor all state to objects, including all associated functions and data structures
export const initialQuestionState = [
  {
    key: "N2X29qinbkkLxBEXLzT51",
    dateAsked:
      "Fri Oct 15 2021 20:11:30 GMT+1100 (Australian Eastern Daylight Time)",
    asker: "James Marshall",
    askerId: 1,
    avatar: avatar4,
    questionOptionA: "Meditate",
    questionOptionB: "Practice writing",
    answers: [{ id: "", answer: "" }],
    likes: [{ id: "1" }],
  },
  {
    key: "H4l3YteiblpYlTNXLzM76",
    dateAsked:
      "Fri Oct 15 2021 20:12:30 GMT+1100 (Australian Eastern Daylight Time)",
    asker: "Hugh McKenzie",
    askerId: 2,
    avatar: avatar2,
    questionOptionA: "Eat a bean",
    questionOptionB: "Do a backflip",
    answers: [
      { id: "2", answer: "Do a backflip" },
      { id: "3", answer: "Do a backflip" },
    ],
    likes: [],
  },
  {
    key: "G6X3XqatibbLqBETLzK38",
    dateAsked:
      "Fri Oct 15 2021 20:13:30 GMT+1100 (Australian Eastern Daylight Time)",
    asker: "Gemma Nicholas",
    askerId: 3,
    avatar: avatar1,
    questionOptionA: "Go for a walk in the sun",
    questionOptionB: "Eat nutritious food",
    answers: [{ id: "2", answer: "Eat nutritious food" }],
    likes: [],
  },
  {
    key: "G6X3XqatibeLqQETLoK27",
    dateAsked:
      "Sun Mar 13 2022 10:02:30 GMT+1100 (Australian Eastern Daylight Time)",
    asker: "Nick Lawrentin",
    askerId: 4,
    avatar: avatar4,
    questionOptionA: "Play golf",
    questionOptionB: "Go have a beer",
    answers: [{ id: "1", answer: "Go have a beer" }],
    likes: [{ id: "1" }],
  },
];

export const initialLoggedInState = {
  loggedIn: false,
  id: "",
  firstName: "",
  lastName: "",
  avatar: "",
};

export const initialUserState = {
  1: {
    id: "1",
    firstName: "James",
    lastName: "Marshall",
    avatar: avatar4,
    questionsAsked: 1,
    questionsAnswered: 0,
    totalLikes: [{ id: "1" }],
    totalPoints: 2,
  },
  2: {
    id: "2",
    firstName: "Hugh",
    lastName: "McKenzie",
    avatar: avatar2,
    questionsAsked: 1,
    questionsAnswered: 2,
    totalLikes: [],
    totalPoints: 3,
  },
  3: {
    id: "3",
    firstName: "Gemma",
    lastName: "Nicholas",
    avatar: avatar1,
    questionsAsked: 1,
    questionsAnswered: 1,
    totalLikes: [],
    totalPoints: 2,
  },
  4: {
    id: "4",
    firstName: "Nick",
    lastName: "Lawrentin",
    avatar: avatar4,
    questionsAsked: 1,
    questionsAnswered: 0,
    totalLikes: [{ id: "1" }],
    totalPoints: 2,
  },
  5: {
    id: "5",
    firstName: "Guest",
    lastName: "User",
    avatar: avatar2,
    questionsAsked: 0,
    questionsAnswered: 0,
    totalLikes: [],
    totalPoints: 0,
  },
};

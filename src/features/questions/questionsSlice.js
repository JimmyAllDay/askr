import { createSlice } from "@reduxjs/toolkit";
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar4 from "../../assets/images/avatar4.png";

const initialState = [
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

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    questionUpdated(state, action) {
      state.forEach((question) => {
        if (question.key === action.payload.key) {
          question.answers = action.payload.answers;
        }
      });
      return state;
    },
    questionAdded(state, action) {
      state.push(action.payload);
    },
    questionLikesUpdated(state, action) {
      //TODO: refactor
      return state.map((questionObj) => {
        if (questionObj.key === action.payload.key) {
          let newLikesArr = [];
          const checkLike = questionObj.likes.some(
            (like) => like.id === action.payload.like.id
          );
          if (checkLike) {
            newLikesArr = questionObj.likes.filter(
              (like) => like.id !== action.payload.like.id
            );
          } else {
            newLikesArr = [...questionObj.likes, action.payload.like];
          }
          return { ...questionObj, likes: [...newLikesArr] };
        } else {
          return questionObj;
        }
      });
    },
  },
});

export const { questionUpdated, questionAdded, questionLikesUpdated } =
  questionsSlice.actions;

export default questionsSlice.reducer;

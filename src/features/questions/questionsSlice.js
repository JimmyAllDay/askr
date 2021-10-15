import { createSlice } from "@reduxjs/toolkit";
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar4 from "../../assets/images/avatar4.png";

const initialState = [
  {
    key: "N2X29qinbkkLxBEXLzT51",
    dateAsked: "August 02, 21",
    asker: "James Marshall",
    avatar: avatar4,
    questionOptionA: "Meditate",
    questionOptionB: "Practice writing",
    answers: [{ id: "", answer: "" }],
  },
  {
    key: "H4l3YteiblpYlTNXLzM76",
    dateAsked: "August 22, 21",
    asker: "Hugh McKenzie",
    avatar: avatar2,
    questionOptionA: "Eat a bean",
    questionOptionB: "Do a backflip",
    answers: [
      { id: "2", answer: "Do a backflip" },
      { id: "3", answer: "Do a backflip" },
    ],
  },
  {
    key: "G6X3XqatibbLqBETLzK38",
    dateAsked: "October 04, 21",
    asker: "Gemma Nicholas",
    avatar: avatar1,
    questionOptionA: "Go for a walk in the sun",
    questionOptionB: "Eat nutritious food",
    answers: [{ id: "2", answer: "Eat nutritious food" }],
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
  },
});

export const { questionUpdated, questionAdded } = questionsSlice.actions;

export default questionsSlice.reducer;

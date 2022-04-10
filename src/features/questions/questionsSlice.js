import { createSlice } from "@reduxjs/toolkit";

import { initialQuestionsState } from "../utils/initialState";

const initialState = initialQuestionsState;

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    questionAdded(state, action) {
      return {
        ...state,
        questions: {
          ...state.questions,
          ...action.payload,
        },
      };
    },
    questionAnswered(state, action) {
      const { key, userId, answer } = action.payload;
      state.questions[key].answers[userId] = answer;
    },
    questionLikesUpdated(state, action) {
      const { key, like } = action.payload;
      const filterLikes = state.questions[key].likes.filter(
        (id) => id !== like
      );
      state.questions[key].likes.includes(like)
        ? (state.questions[key].likes = filterLikes)
        : state.questions[key].likes.push(like);
    },
  },
});

export const selectQuestions = ({ questions }) => questions.questions;
export const selectQuestionsArr = ({ questions }) =>
  Object.values(questions.questions);

export const { questionAdded, questionAnswered, questionLikesUpdated } =
  questionsSlice.actions;

export default questionsSlice.reducer;

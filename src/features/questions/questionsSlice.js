import { createSlice } from "@reduxjs/toolkit";

import { initialQuestionState } from "../utils/initialState";

const initialState = initialQuestionState;

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

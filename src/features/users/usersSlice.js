import { createSlice } from "@reduxjs/toolkit";

import { initialUserState } from "../utils/initialState";

const initialState = initialUserState;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectUsers = ({ users }) => users.users;

export const selectUsersArr = ({ users }) => Object.values(users.users);

export const getUserPointsArr = (state) =>
  Object.values(state.users.users).map((user) => {
    let [questions, answers, likes, totalPoints] = [0, 0, 0, 0];
    Object.values(state.questions.questions).forEach((question) => {
      if (question.askerId === user.id) {
        questions += 1;
        likes += question.likes.length;
      }
      if (question.answers[user.id]) {
        answers += 1;
      }
    });
    totalPoints = questions + answers + likes;
    return (user = { ...user, questions, answers, likes, totalPoints });
  });

export const { userUpdated, userLikesUpdated } = usersSlice.actions;

export default usersSlice.reducer;

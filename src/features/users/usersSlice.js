import { createSlice } from "@reduxjs/toolkit";
// import avatar4 from "../../assets/images/avatar4.png";
// import avatar1 from "../../assets/images/avatar1.png";
// import avatar2 from "../../assets/images/avatar2.png";

import { initialUserState } from "../utils/initialState";

const initialState = initialUserState;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded(state, action) {
      state.push(action.payload);
    },
    userUpdated(state, action) {
      //TODO: the below should be refactored
      state.forEach((user) => {
        if (user.id === action.payload.id) {
          user.questionsAsked = user.questionsAsked +=
            action.payload.questionsAsked;
          user.questionsAnswered = user.questionsAnswered +=
            action.payload.questionsAnswered;
          user.totalPoints = user.totalPoints += action.payload.totalPoints;
        }
      });
    },
    userLikesUpdated(state, action) {
      return state.map((userObj) => {
        if (userObj.id === action.payload.askerId) {
          let newLikesArr = [];
          const checkLike = userObj.totalLikes.some(
            (like) => like.id === action.payload.like.id
          );
          if (checkLike) {
            newLikesArr = userObj.totalLikes.filter(
              (like) => like.id !== action.payload.like.id
            );
          } else {
            newLikesArr = [...userObj.totalLikes, action.payload.like];
          }
          return { ...userObj, totalLikes: [...newLikesArr] };
        } else {
          return userObj;
        }
      });
    },
  },
});

export const { userAdded, userUpdated, userLikesUpdated } = usersSlice.actions;

export default usersSlice.reducer;

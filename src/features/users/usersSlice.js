import { createSlice } from "@reduxjs/toolkit";
import avatar4 from "../../assets/images/avatar4.png";
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";

const initialState = [
  {
    id: "1",
    firstName: "James",
    lastName: "Marshall",
    avatar: avatar4,
    questionsAsked: 1,
    questionsAnswered: 0,
    totalLikes: 1,
    totalPoints: 2,
  },
  {
    id: "2",
    firstName: "Hugh",
    lastName: "McKenzie",
    avatar: avatar2,
    questionsAsked: 1,
    questionsAnswered: 2,
    totalLikes: 0,
    totalPoints: 3,
  },
  {
    id: "3",
    firstName: "Gemma",
    lastName: "Nicholas",
    avatar: avatar1,
    questionsAsked: 1,
    questionsAnswered: 1,
    totalLikes: 0,
    totalPoints: 2,
  },
  {
    id: "4",
    firstName: "Nick",
    lastName: "Lawrentin",
    avatar: avatar4,
    questionsAsked: 1,
    questionsAnswered: 0,
    totalLikes: 1,
    totalPoints: 2,
  },
  {
    id: "5",
    firstName: "Guest",
    lastName: "User",
    avatar: avatar2,
    questionsAsked: 0,
    questionsAnswered: 0,
    totalLikes: 0,
    totalPoints: 0,
  },
];

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
    userLikesIncremented(state, action) {
      return state.map((user) =>
        user.id === action.payload.askerId
          ? {
              ...user,
              totalLikes: user.totalLikes + 1,
              totalPoints: user.totalPoints + 1,
            }
          : user
      );
    },
    userLikesDecremented(state, action) {
      const newUserArray = state.map((user) =>
        user.id === action.payload.askerId
          ? {
              ...user,
              totalLikes: user.totalLikes - 1,
              totalPoints: user.totalPoints - 1,
            }
          : user
      );
      return newUserArray;
    },
  },
});

export const {
  userAdded,
  userUpdated,
  userLikesIncremented,
  userLikesDecremented,
} = usersSlice.actions;

export default usersSlice.reducer;

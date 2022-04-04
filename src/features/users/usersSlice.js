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
    totalLikes: [{ id: "1" }],
    totalPoints: 2,
  },
  {
    id: "2",
    firstName: "Hugh",
    lastName: "McKenzie",
    avatar: avatar2,
    questionsAsked: 1,
    questionsAnswered: 2,
    totalLikes: [],
    totalPoints: 3,
  },
  {
    id: "3",
    firstName: "Gemma",
    lastName: "Nicholas",
    avatar: avatar1,
    questionsAsked: 1,
    questionsAnswered: 1,
    totalLikes: [],
    totalPoints: 2,
  },
  {
    id: "4",
    firstName: "Nick",
    lastName: "Lawrentin",
    avatar: avatar4,
    questionsAsked: 1,
    questionsAnswered: 0,
    totalLikes: [{ id: "1" }],
    totalPoints: 2,
  },
  {
    id: "5",
    firstName: "Guest",
    lastName: "User",
    avatar: avatar2,
    questionsAsked: 0,
    questionsAnswered: 0,
    totalLikes: [],
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

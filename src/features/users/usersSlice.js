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
    totalPoints: 1,
    totalLikes: 0,
  },
  {
    id: "2",
    firstName: "Hugh",
    lastName: "McKenzie",
    avatar: avatar2,
    questionsAsked: 1,
    questionsAnswered: 2,
    totalPoints: 3,
    totalLikes: 0,
  },
  {
    id: "3",
    firstName: "Gemma",
    lastName: "Nicholas",
    avatar: avatar1,
    questionsAsked: 1,
    questionsAnswered: 1,
    totalPoints: 2,
    totalLikes: 0,
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
      state.forEach((user) => {
        if (user.id == action.payload.id) {
          user.questionsAsked = user.questionsAsked +=
            action.payload.questionsAsked;
          user.questionsAnswered = user.questionsAnswered +=
            action.payload.questionsAnswered;
          user.totalPoints = user.totalPoints += action.payload.totalPoints;
        }
      });
    },
  },
});

export const { userAdded, userUpdated } = usersSlice.actions;

export default usersSlice.reducer;

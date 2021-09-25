import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 10, dateAsked: 'August 02, 21', user: "James Marshall", questionOptionA: "Meditate", questionOptionB: "Practice writing", answeredBy: null},
    {id: 11, dateAsked: 'August 22, 21', user: "Hugh McKenzie", questionOptionA: "Eat a bean", questionOptionB: "Do a backflip", answeredBy: {"Hugh McKenzie" : "Do a backflip", "Gemma Nicholas" : "Do a backflip" }},
    {id: 12, dateAsked: 'October 04, 21', user: "Gemma Nicholas", questionOptionA: "Go for a walk in the sun", questionOptionB: "Eat nutritious food", answeredBy: {"Hugh McKenzie" : "Eat nutritious food",}}
]

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        questionUpdated(state, action) {
            return state = [{...action.payload}]
        }
    }
  })


  export const { questionUpdated } = questionsSlice.actions

export default questionsSlice.reducer
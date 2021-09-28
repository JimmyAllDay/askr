import { createSlice } from "@reduxjs/toolkit";
import avatar1 from '../../assets/images/avatar1.png'
import avatar2 from '../../assets/images/avatar2.png'
import avatar4 from '../../assets/images/avatar4.png'


const initialState = [
    {id: 10, dateAsked: 'August 02, 21', user: "James Marshall", avatar: avatar4, questionOptionA: "Meditate", questionOptionB: "Practice writing", answeredBy: null},
    {id: 11, dateAsked: 'August 22, 21', user: "Hugh McKenzie", avatar: avatar2, questionOptionA: "Eat a bean", questionOptionB: "Do a backflip", answeredBy: {"Hugh McKenzie" : "Do a backflip", "Gemma Nicholas" : "Do a backflip" }},
    {id: 12, dateAsked: 'October 04, 21', user: "Gemma Nicholas", avatar: avatar1, questionOptionA: "Go for a walk in the sun", questionOptionB: "Eat nutritious food", answeredBy: {"Hugh McKenzie" : "Eat nutritious food",}}
]

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        questionUpdated(state, action) {
            return state = [{...action.payload}]
        },
        questionAdded(state, action) {
            state.push(action.payload)
        }
    }
  })


export const { questionUpdated, questionAdded } = questionsSlice.actions

export default questionsSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    links:['Homepage', 'Dashboard', 'Progress Report', 'Training'],
    category_array: ['NavBar', 'Body Section', 'Footer'],
    homepageMeanScore: null,
    dashboardMeanScore: null,
    progressReportMeanScore: null,
    trainingMeanScore: null

}

const scoreSlice = createSlice({
    name: 'scoreselections',
    initialState,
    reducers: {
        changehomepageMeanScore: (state, action) => {
            state.homepageMeanScore = action.payload
        }

    }
})


export const selectAllScores = (state) => state.scoreselections;
export const { changehomepageMeanScore} = scoreSlice.actions
export default scoreSlice.reducer
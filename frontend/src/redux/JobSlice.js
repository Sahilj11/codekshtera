import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs:[]
}

const jobSlice = createSlice({
    name:"jobs",
    initialState,
    reducers:{
        setJobs:(state,action)=>{
            state.jobs = action.payload
        },
        addJobs:(state,action)=>{
            state.jobs.push(action.payload)
        },
        deleteJobs:(state,action)=>
        {
            state.jobs = state.jobs.filter((job)=>job.id !== action.payload)
        }
        
    }
})

export const {setJobs,addJobs,deleteJobs} = jobSlice.actions
export default jobSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload); // Add the new job to the list
    },
    deleteJob: (state, action) => {
        state.jobs = state.jobs.filter((job) => job.id !== action.payload);  // Remove job by id
      },
  },
});

export const { setJobs, addJob,deleteJob } = jobSlice.actions;  // Use singular 'addJob'
export default jobSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

const puppySlice = createSlice({
  name: "puppy",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getPlayers.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
    builder.addMatcher(
      api.endpoints.addPlayer.matchFulfilled,
      (state, { payload }) => {
        state.push(payload.data.newPlayer);
        return state;
      }
    );
    builder.addMatcher(
      api.endpoints.deletePlayer.matchFulfilled,
      (state, { payload }) => {
        return state.filter((puppy) => puppy.id !== payload.data.id);
      }
    );
  },
});
export default puppySlice.reducer;
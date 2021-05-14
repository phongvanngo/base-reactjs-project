import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import theaterApi from "app/api/theaterApi";
import { startLoading, stopLoading } from "./loadingSlice";

const initialState = {
  listTheaterSystem: [],
};

export const fetchListTheaterSystem = createAsyncThunk(
  "theater/loginRequestStatus",
  async (payload, thunkApi) => {
    if (payload !== null) {
    }

    const { dispatch } = thunkApi;
    dispatch(startLoading());
    try {
      const response = await theaterApi.getListTheaterSystem();
      switch (response.status) {
        case 200:
          // dispatch(notify({ message: "Đăng nhập thành công", options: { variant: 'success' } }));
          dispatch(stopLoading());
          return response.data;
        case 401:
          throw new Error("Unauthorize");
        case 400:
          throw new Error("");
        default:
          throw new Error("Error");
      }
    } catch (error) {
      // dispatch(notify({ message: `${error}`, options: { variant: 'error' } }));
      dispatch(stopLoading());
      return null;
    }
  }
);

export const theaterSlice = createSlice({
  name: "theater",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListTheaterSystem.fulfilled, (state, action) => {
      const response_data = action.payload;
      if (response_data === null) return;

      state.listTheaterSystem = response_data.listTheaterSystem;
    });
  },
});

export const {} = theaterSlice.actions;

export default theaterSlice.reducer;

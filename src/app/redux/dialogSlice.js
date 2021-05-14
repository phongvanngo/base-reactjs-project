import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theaterSystemFormDialog: {
    isOpen: false,
    defaultData: null,
  },
  errorNotificationDialog: {
    isOpen: false,
    defaultData: { title: "" },
  },
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openTheaterSystemFormDialog: (state, action) => {
      state.theaterSystemFormDialog.defaultData = action.payload;
      state.theaterSystemFormDialog.isOpen = true;
    },
    closeTheaterSystemFormDialog: (state) => {
      state.theaterSystemFormDialog.isOpen = false;
      state.theaterSystemFormDialog.defaultData = null;
    },
    openErrorNofificationDialog: (state, action) => {
      state.errorNotificationDialog.defaultData = action.payload;
      state.errorNotificationDialog.isOpen = true;
    },
    closeErrorNotificationDialog: (state) => {
      state.errorNotificationDialog.isOpen = false;
      state.errorNotificationDialog.defaultData = { title: "" };
    },
  },
});

export const {
  openErrorNofificationDialog,
  closeErrorNotificationDialog,
  openTheaterSystemFormDialog,
  closeTheaterSystemFormDialog,
} = dialogSlice.actions;

export default dialogSlice.reducer;

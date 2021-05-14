import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theaterSystemFormDialog :
    {
        isOpen:true
    }
};



export const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        openTheaterSystemFormDialog :(state) =>{
            state.theaterSystemFormDialog.isOpen = true;
        },
        closeTheaterSystemFormDialog :(state) =>{
            state.theaterSystemFormDialog.isOpen = false;
        }
    },
});

export const { openTheaterSystemFormDialog,closeTheaterSystemFormDialog} = dialogSlice.actions;

export default dialogSlice.reducer;

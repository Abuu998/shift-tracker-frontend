import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteShift, getAllUsersShifts, startNewShift, startShift, endShift } from "../src/utilities/fetchData";


const initialState = {
    allShifts: [],
    error: {},
    isLoading: false
}

export const getAllShifts = createAsyncThunk(
    "shifts/getShifts",
    async (userId) => {
        const shifts = await getAllUsersShifts(userId);
        return shifts?.shifts
    }
)

export const deleteOneShift = createAsyncThunk(
    "shifts/deleteShift",
    async ({shiftId, userId}) => {
        await deleteShift(shiftId);
        const shifts = await getAllUsersShifts(userId);
        return shifts?.shifts
    }
)

export const startANewShift = createAsyncThunk(
    "shifts/startNewShift",
    async (userId) => {
        await startNewShift(userId)
        const shifts = await getAllUsersShifts(userId);
        return shifts?.shifts
    }
)

export const startAShift = createAsyncThunk(
    "shifts/startShift",
    async ({ shiftId, userId }) => {
        await startShift(shiftId)
        const shifts = await getAllUsersShifts(userId);
        return shifts?.shifts
    }
)

export const endAShift = createAsyncThunk(
    "shifts/endShift",
    async ({ shiftId, userId }) => {
        await endShift(shiftId)
        const shifts = await getAllUsersShifts(userId);
        return shifts?.shifts
    }
)

const shiftSlice = createSlice({
    name: "shifts",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllShifts.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getAllShifts.fulfilled, (state, action) => {
                state.isLoading = false
                state.allShifts = action.payload
            })
            .addCase(getAllShifts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
        
            // Start A NEW SHIFT
            .addCase(startANewShift.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(startANewShift.fulfilled, (state, action) => {
                state.isLoading = false
                state.allShifts = action.payload
            })
            .addCase(startANewShift.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            
            // START A SHIFT
            .addCase(startAShift.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(startAShift.fulfilled, (state, action) => {
                state.isLoading = false
                state.allShifts = action.payload
            })
            .addCase(startAShift.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            
            // END A SHIFT
            .addCase(endAShift.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(endAShift.fulfilled, (state, action) => {
                state.isLoading = false
                state.allShifts = action.payload
            })
            .addCase(endAShift.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            
            // delete
            .addCase(deleteOneShift.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(deleteOneShift.fulfilled, (state, action) => {
                state.isLoading = false
                state.allShifts = action.payload
            })
            .addCase(deleteOneShift.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export default shiftSlice.reducer
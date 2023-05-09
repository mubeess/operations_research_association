import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getChapters } from '../Network/chapter';

interface Chapter {
id: number;
name: string;
// add more properties here as needed
}

interface ChapterState {
chapters: Chapter[];
loading: boolean;
error?: string;
}

const initialState: ChapterState = {
chapters: [],
loading: false,
};

export const getChaptersThunk = createAsyncThunk('chapter/getChapters', getChapters);

const ChapterSlice = createSlice({
name: 'chapter',
initialState,

reducers: {},

extraReducers: (builder) => {
    builder
    .addCase(getChaptersThunk.pending, (state) => {
    state.loading = true;
    })

    .addCase(getChaptersThunk.fulfilled, (state, action: PayloadAction<Chapter[]>) => {
    state.loading = false;
    state.chapters = action.payload;
    })
    
    .addCase(getChaptersThunk.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message;
    });
},
});

export default ChapterSlice.reducer;

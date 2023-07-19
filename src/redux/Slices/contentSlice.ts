import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../../sanity/lib/client';
import { groq } from 'next-sanity';

// Define the return type for the async thunk
type FetchDataReturnType = any; // Replace 'any' with the actual return type of your API call

const initialState = {
    data: [],
    loading: false,
    error: "null",
};

const query = groq`
  *[_type == 'content']
  {
   _id,
   title
  }
`;


export const fetchData: AsyncThunk<FetchDataReturnType, void, {}> = createAsyncThunk(
    'content/fetchData',
    async () => {
        try {
            const data = await client.fetch(query); // Replace 'your-api-url' with the actual API URL
            return data;
        } catch (error) {
            throw error;
        }
    }
);

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = "null";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "";
            });
    },
});

export default contentSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "https://api.staging.sumize.io/api/todos";

export const ReadList = createAsyncThunk("ReadList", async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("An error occurred: \n", error);
    return error;
  }
});

const ReadSlice = createSlice({
  name: "Read from API",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ReadList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ReadList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(ReadList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default ReadSlice.reducer;

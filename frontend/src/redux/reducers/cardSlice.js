import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getCardThunk = createAsyncThunk("/products/get", async () => {
    const card = await axios.get("http://localhost:3000/products");
    return card.data
})

export const postCardThunk = createAsyncThunk("/products/post", async (data) => {
    await axios.post("http://localhost:3000/products", data)
    return data
})

export const deleteCardThunk = createAsyncThunk("/products/delete", async (id) => {
    await axios.delete(`http://localhost:3000/products/${id}`)
    return id
})

const cardSlice = createSlice({
    name: "card",
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder

            .addCase(getCardThunk.pending, (state, action) => {
                state.loading = true
            })

            .addCase(getCardThunk.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })

            .addCase(getCardThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            .addCase(postCardThunk.fulfilled, (state, action) => {
                state.loading = false
                state.data.push(action.payload)
            })

            .addCase(deleteCardThunk.fulfilled, (state, action) => {
                state.loading = false
                state.data = state.data.filter(item => item.id != action.payload)
            })
    }
})

export default cardSlice.reducer
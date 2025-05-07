import {configureStore} from "@reduxjs/toolkit";
import cardSlice from "./reducers/cardSlice.js";

export const store = configureStore({
        reducer: {
                card: cardSlice
        }
});
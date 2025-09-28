
import { configureStore } from "@reduxjs/toolkit";
import book_slice from "./slices/bookSlices"

export const store = configureStore({
    reducer: {
        books: book_slice
    }
})


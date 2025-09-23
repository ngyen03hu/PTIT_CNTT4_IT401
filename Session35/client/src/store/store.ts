import { configureStore } from "@reduxjs/toolkit";
import counter from "./slice/counterSlice"
import students from "./slice/studentSlice"
import int from "./slice/intListSlice"
import theme from "./slice/themeSlice";
import display from "./slice/displaySlice"
import menu from "./slice/menuSlice"
import language from "./slice/languageSlice"
import favoriteUsers from "./slice/favoriteUsersSlice"
import auth from "./slice/authSlice"
export const store = configureStore({
    reducer: {
        counter,
        students,
        int,
        theme,
        display,
        menu,
        language,
        favoriteUsers,
        auth,
    },
});
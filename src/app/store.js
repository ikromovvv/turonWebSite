import {configureStore} from "@reduxjs/toolkit";
import {alertSlice} from "features/alert";
import {oftenUsedSlice} from "entities/oftenUsed";


// import {timeTableSchool} from "pages/timeTable"


const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}


export const store = configureStore({
    reducer: {
        alertSlice,
        oftenUsedSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            stringMiddleware
        ),
    devTools: process.env.NODE_ENV !== "production",
})


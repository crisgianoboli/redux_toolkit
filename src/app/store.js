import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "../features/task/taskSlices";

export const store = configureStore({
    task: taskSlice
})

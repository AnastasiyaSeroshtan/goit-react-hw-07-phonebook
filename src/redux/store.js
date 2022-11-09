import { configureStore } from "@reduxjs/toolkit";
// import { tasksReducer } from "./tasksSlice";
// import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from "./contactsReducer";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filter: filterReducer,
  },
});
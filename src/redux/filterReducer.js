import { createSlice} from "@reduxjs/toolkit";

// const filterInitialState = '';

const filterSlice = createSlice({
  // Имя слайса
  name: "filter",
  // Начальное состояние редюсера слайса
  initialState: '',
  // Объект редюсеров
  reducers: {
    filterContacts(state, action) {
         return action.payload
    },
  },
});

// Генераторы экшенов
export const { filterContacts} = filterSlice.actions;
// Редюсер слайса
export const filterReducer = filterSlice.reducer;


// import { createSlice} from "@reduxjs/toolkit";

// const filterInitialState = '';

// const filterSlice = createSlice({
//   // Имя слайса
//   name: "filter",
//   // Начальное состояние редюсера слайса
//   initialState: filterInitialState,
//   // Объект редюсеров
//   reducers: {
//     filterContacts(state, action) {
//          return action.payload
//     },
//   },
// });

// // Генераторы экшенов
// export const { filterContacts} = filterSlice.actions;
// // Редюсер слайса
// export const filterReducer = filterSlice.reducer;
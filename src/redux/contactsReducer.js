// import { createSlice, nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "./operations";


const contactsSlice = createSlice({
  // Имя слайса
  name: "contacts",
  // Начальное состояние редюсера слайса
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  // Объект редюсеров
  extraReducers: {
       // Выполнится в момент старта HTTP-запроса
       [getContacts.pending](state) {
        state.isLoading = true;
       },
       // Выполнится если HTTP-запрос завершился успешно
       [getContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
       },
       // Выполнится если HTTP-запрос завершился с ошибкой
       [getContacts.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
       },
  },
});

// Генераторы экшенов
export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactsSlice.actions;
// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;



// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const contactsInitialState = [  ];

// const contactsSlice = createSlice({
//   // Имя слайса
//   name: "contacts",
//   // Начальное состояние редюсера слайса
//   initialState: {data: contactsInitialState},
//   // Объект редюсеров
//   reducers: {
//     addContacts: {
//         reducer(state, action){
//             const newData = state.data.map(item => item.name);
//             if(newData.includes(action.payload.name)) {
//                 window.alert(`${action.payload.name} is already in contacts`);
//                 return
//             }
//             state.data = [action.payload, ...state.data];
//         },
//         prepare({name, number}){
//             return{
//                 payload:{
//                     id: nanoid(),
//                     name,
//                     number,
//                 }
//             }
//         }
//     },
//     deleteContacts(state, action) {
//         state.data = state.data.filter(contact => contact.id !== action.payload);
//     },
//   },
// });

// // Генераторы экшенов
// export const { addContacts, deleteContacts } = contactsSlice.actions;
// // Редюсер слайса
// export const contactsReducer = contactsSlice.reducer;


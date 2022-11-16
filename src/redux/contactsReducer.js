import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const contactsInitialState = [  ];

const contactsSlice = createSlice({
  // Имя слайса
  name: "contacts",
  // Начальное состояние редюсера слайса
  initialState: {data: contactsInitialState},
  // Объект редюсеров
  reducers: {
    addContacts: {
        reducer(state, action){
            const newData = state.data.map(item => item.name);
            if(newData.includes(action.payload.name)) {
                window.alert(`${action.payload.name} is already in contacts`);
                return
            }
            state.data = [action.payload, ...state.data];
        },
        prepare({name, number}){
            return{
                payload:{
                    id: nanoid(),
                    name,
                    number,
                }
            }
        }
    },
    deleteContacts(state, action) {
        state.data = state.data.filter(contact => contact.id !== action.payload);
    },
  },
});

const persistConfig = {
    key: 'contacts',
    storage,
  };

export const persistContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

// Генераторы экшенов
export const { addContacts, deleteContacts } = contactsSlice.actions;
// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;


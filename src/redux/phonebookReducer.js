import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const contactsInitialState = [ ];
const filterInitialState = '';

const phonebookSlice = createSlice({
  // Имя слайса
  name: "phonebook",
  // Начальное состояние редюсера слайса
  initialState: {
    contacts: contactsInitialState,
    filter: filterInitialState,
  },
  // Объект редюсеров
  reducers: {
    addContacts: {
        reducer(state, action){
            const newData = state.contacts.map(item => item.name);
            if(newData.includes(action.payload.name)) {
                window.alert(`${action.payload.name} is already in contacts`);
                return
            }
            state.contacts = [action.payload, ...state.contacts];
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
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    filterContacts(state, action) {
        return action.payload
   },
  },
});

const persistConfig = {
    key: 'contacts',
    storage,
  };

export const persistPhonebookReducer = persistReducer(persistConfig, phonebookSlice.reducer);

// Генераторы экшенов
export const { addContacts, deleteContacts, filterContacts } = phonebookSlice.actions;



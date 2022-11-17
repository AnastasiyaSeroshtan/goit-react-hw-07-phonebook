import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchingInProgress, fetchingSuccess, fetchingError } from './contactsReducer';

axios.defaults.baseURL= 'https://6374ee9908104a9c5f8d9aeb.mockapi.io';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (phone, name, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", phone, name );
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
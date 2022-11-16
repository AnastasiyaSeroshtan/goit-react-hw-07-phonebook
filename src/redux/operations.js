import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchingInProgress, fetchingSuccess, fetchingError } from './contactsReducer';

axios.defaults.baseURL= 'https://6374ee9908104a9c5f8d9aeb.mockapi.io';

export const getContacts = createAsyncThunk(
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


//   export const getContacts = async dispatch => {
    //     // const dispatch = useDispatch();
    //  try {
    //       // Индикатор загрузки
    //       dispatch(fetchingInProgress());
    //       // HTTP-запрос
    //     const response = await axios.get('/contacts');
    //       // Обработка данных
    //       dispatch(fetchingSuccess(response.data));
       
    //  } catch (error) {
    //     // console.log(error);
    //     dispatch(fetchingError(error.message));
    //  }
    // };
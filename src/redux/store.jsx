import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice'; // імпортуємо редюсер для контактів

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = filterSlice.actions;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsSlice = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsSlice,
    filter: filterSlice.reducer, // Додаємо фільтр до кореневого редюсера
  },
});

export const persistor = persistStore(store);


// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(el => el.id !== action.payload)
//     },
//     addContact: (state, action) => {
//       state.contacts = [...state.contacts, action.payload]
//     },
//   }, 
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedContactsSlice = persistReducer(persistConfig, contactsSlice.reducer);

// export const { deleteContact, addContact } = persistedContactsSlice.actions;

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactsSlice,
//   },
// });

// export const persistor = persistStore(store);


import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    deleteContact: (state, action) => {
      state = state.filter(el => el.id !== action.payload)

    },
    addContact: (state, action) => {
      state = [...state, action.payload]
    },
  }, 
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsSlice = persistReducer(persistConfig, contactsSlice.reducer);

export const { deleteContact, addContact } = persistedContactsSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: persistedContactsSlice,
  },
});

export const persistor = persistStore(store);




// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     setFilter: (state, action) => action.payload,
//   },
// });

// export const { setFilter } = filterSlice.actions;

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedContactsSlice = persistReducer(persistConfig, contactsReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactsSlice,
//     filter: filterSlice.reducer,
//   },
// });

// export const persistor = persistStore(store);





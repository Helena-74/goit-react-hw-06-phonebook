// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     deleteContact: (state, action) => {
//       return state.filter((contact) => contact.id !== action.payload);
//     },
//     addContact: (state, action) => {
//       return [...state, action.payload];
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

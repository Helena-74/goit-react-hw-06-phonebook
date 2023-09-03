// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },


});




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





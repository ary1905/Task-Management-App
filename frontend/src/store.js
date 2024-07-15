import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(), // Add any custom middleware here
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode
  preloadedState: {}, // Your initial state
});

export default store;

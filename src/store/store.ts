import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './reducers';

export const store = configureStore({
	reducer: appReducer,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

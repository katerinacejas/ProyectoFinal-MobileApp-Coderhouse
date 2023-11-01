import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from '../features/LoginReducer'
import { autenticacion } from '../services/autenticacion';

const store = configureStore({
    reducer: {
        login: LoginReducer, 
        [autenticacion.reducerPath]: autenticacion.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(autenticacion.middleware),
});

export default store
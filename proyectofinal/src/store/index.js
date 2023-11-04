import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from '../features/LoginReducer'
import { autenticacion } from '../services/autenticacion';
import { cancionesApi } from '../services/cancionesApi';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
    reducer: {
        login: LoginReducer, 
        [autenticacion.reducerPath]: autenticacion.reducer,
        [cancionesApi.reducerPath]: cancionesApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(cancionesApi.middleware, autenticacion.middleware),
});

setupListeners(store.dispatch);

export default store
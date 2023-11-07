import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from '../features/LoginReducer'
import { autenticacion } from '../services/autenticacion';
import { cancionesApi } from '../services/cancionesApi';
import { usuariosApi } from '../services/usuariosApi';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
    reducer: {
        login: LoginReducer, 
        [autenticacion.reducerPath]: autenticacion.reducer,
        [cancionesApi.reducerPath]: cancionesApi.reducer,
        [usuariosApi.reducerPath]: usuariosApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(usuariosApi.middleware, cancionesApi.middleware, autenticacion.middleware),
});

setupListeners(store.dispatch);

export default store
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
    idToken: null,
    localId: null,
};

export const LoginReducer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsuario: (state, action) => {
            return {
                email: action.payload.email,
                idToken: action.payload.idToken,
                localId: action.payload.localId,
            }
        },
        clearUsuario: () => {
            return {
                email: null,
                token: null,
                localId: null,
            }
        },
    },
})

export const { setUsuario , clearUsuario } = LoginReducer.actions

export default LoginReducer.reducer
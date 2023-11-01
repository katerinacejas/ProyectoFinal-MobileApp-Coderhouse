import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    usario: null,
    token: null,
    localId: null,
};

export const LoginReducer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsuario: (state, action) => {
            console.log(action.payload.email)
            return {
                usuario: action.payload.email,
                token: action.payload.idToken,
                localId: action.payload.localId,
            }
        },
        clearUsuario: () => {
            return {
                usuario: null,
                token: null,
                localId: null,
            }
        },
    },
})

export const { setUsuario , clearUsuario } = LoginReducer.actions

export default LoginReducer.reducer
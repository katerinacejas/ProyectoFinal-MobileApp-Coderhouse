import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
    idToken: null,
    localId: null,
    nombrePersona: null,
    nombreUnicoPersona: null,
    imagen: null,
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
        setNombrePersona: (state, action) => {
            //console.log("EL NOMBRE EN EL REDUCER ES: ", action.payload)
            return {
                nombrePersona: action.payload,
            }
        },
        setNombreUnicoPersona: (state, action) => {
            //console.log("EL NOMBRE UNICO EN EL REDUCER ES: ", action.payload)
            return {
                nombreUnicoPersona: action.payload,
            }
        },
        setImagen: (state, action) => {
            return {
                ...state,
                imagen: action.payload,
            }
        },
    },
})

export const { setUsuario, clearUsuario, setNombrePersona, setImagen, setNombreUnicoPersona } = LoginReducer.actions

export default LoginReducer.reducer
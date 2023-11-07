import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    nombre: null,
    nombreUnico: null,
};

export const DatosGeneralesReducer = createSlice({
    name: 'datosGenerales',
    initialState,
    reducers: {
        setNombreUsuario: (state, action) => {
            return {
                nombre: action.payload.nombre
            }
        },
        setNombreUnicoUsuario: (state, action) => {
            return {
                nombreUnico: action.payload.nombreUnico
            }
        },
    },
})

export const { setNombreUsuario, setNombreUnicoUsuario } = DatosGeneralesReducer.actions

export default DatosGeneralesReducer.reducer
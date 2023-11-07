import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { baseDeDatosLink } from "../firebase"

export const usuariosApi = createApi({
    reducerPath: "usuariosApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseDeDatosLink }),
    endpoints: (builder) => ({
        postUsuario: builder.mutation({
            query: ({ ...usuario }) => ({
                url: `usuarios/${usuario.nombreUnico}.json`,
                method: 'POST',
                body: usuario,
            }),
        }),
        getTodosUsuarios: builder.query({
            query: () => `usuarios.json/`,
        }),
        getUsuario: builder.query({
            query: nombreUnico => `usuarios.json/${nombreUnico}.json`,
        }),
    })
})

export const { usePostUsuarioMutation, useGetTodosUsuariosQuery, useGetUsuarioQuery } = usuariosApi
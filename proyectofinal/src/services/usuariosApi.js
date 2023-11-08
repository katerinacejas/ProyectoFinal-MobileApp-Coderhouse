import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { baseDeDatosLink } from "../firebase"

export const usuariosApi = createApi({
    reducerPath: "usuariosApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseDeDatosLink }),
    endpoints: (builder) => ({
        postUsuario: builder.mutation({
            query: ({ ...usuario }) => ({
                url: `usuarios/${usuario.localId}.json`,
                method: 'POST',
                body: usuario,
            }),
        }),
        getTodosUsuarios: builder.query({
            query: () => `usuarios.json/`,
        }),
        getUsuario: builder.query({
            query: localId => `usuarios/${localId}.json/`,
        }),
        getFotoDePerfil: builder.query({
            // query: localId => `fotosDePerfil/${localId}.json`,
            query: () => "image.json",
        }),
        postFotoDePerfil: builder.mutation({
            query: (imagen) => ({
                url: "image.json",
                method: "PUT",
                body: imagen
            })
            // query: ({ imagen, localId }) => ({
            //     url: `fotosDePerfil/${localId}.json`,
            //     method: 'POST',
            //     body: imagen,
            // }),
        }),
        postEko: builder.mutation({
            query: (eko) => ({
                url: `ekos/${eko.localId}.json/`,
                method: "POST",
                body: eko.infoCancionAEkear
            })
        }),
        getEkos: builder.query({
            query: () => "ekos.json",
        }),
    })
})

export const { useGetEkosQuery, usePostEkoMutation, usePostUsuarioMutation, useGetTodosUsuariosQuery, useGetUsuarioQuery, useGetFotoDePerfilQuery, usePostFotoDePerfilMutation } = usuariosApi
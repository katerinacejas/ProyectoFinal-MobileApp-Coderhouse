import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { baseDeDatosLink } from "../firebase"

export const cancionesApi = createApi({
    reducerPath: "cancionesApi",
    baseQuery: fetchBaseQuery({baseUrl: baseDeDatosLink}),
    endpoints: (builder) => ({
        getCanciones: builder.query({
            query: () => `infoCancion.json`,
        }),
        getUnaCancion: builder.query({
            query: (id) => `infoCancion/${id}.json/`,
        }),
    }),
})

export const { useGetCancionesQuery, useGetUnaCancionQuery } = cancionesApi
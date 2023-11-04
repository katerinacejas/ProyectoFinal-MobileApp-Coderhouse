import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { baseDeDatosLink } from "../firebase"

export const cancionesApi = createApi({
    reducerPath: "cancionesApi",
    baseQuery: fetchBaseQuery({baseUrl: baseDeDatosLink}),
    endpoints: (builder) => ({
        getCanciones: builder.query({
            query: () => `infoCancion.json`,
        }),
    }),
})

export const { useGetCancionesQuery } = cancionesApi
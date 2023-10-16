import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { apiKey, autenticacionUrl } from "../firebase"

export const autenticacion = createApi({
    reducerPath: "autenticacion",
    baseQuery: fetchBaseQuery({baseUrl: autenticacionUrl}),
    endpoints: (builder) => ({
        
    })
})
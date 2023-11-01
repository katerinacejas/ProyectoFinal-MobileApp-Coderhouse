import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { apiKey, autenticacionUrl } from "../firebase"

export const autenticacion = createApi({
    reducerPath: "autenticacion",
    baseQuery: fetchBaseQuery({baseUrl: autenticacionUrl}),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: ({...auth}) => ({
                url: `accounts:signUp?key=${apiKey}`,
                method: 'POST',
                body: auth,
            }),
        }),
        login: builder.mutation({
            query: ({...auth}) => ({
                url: `accounts:signInWithPassword?key=${apiKey}`,
                method: 'POST',
                body: auth,
            }),
        }),
    }),
})

export const { useSignUpMutation, useLoginMutation } = autenticacion
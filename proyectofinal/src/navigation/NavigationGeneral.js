import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import BottomTabNavigator from './BottomTabNavigator'
import AutenticacionStackNavigator from './AutenticacionStackNavigator'
import { setUsuario } from '../features/LoginReducer'
import { useDispatch } from 'react-redux'
import { fetchSession } from '../db'

const NavigationGeneral = () => {
    const { email } = useSelector(state => state.login)
    const dispatch = useDispatch();

    useEffect(() => {
        ; (async () => {
            try {
                const session = await fetchSession()
                if(session.rows.length) {
                    const usuario = session.rows._array[0]
                    dispatch(setUsuario(usuario))
                }
            } catch (error) {
                console.log(error.message)
            }
        })()
    }, [])

    return (email ? (
        <BottomTabNavigator />
    ) : (
        <AutenticacionStackNavigator />
    )
    )
}

export default NavigationGeneral
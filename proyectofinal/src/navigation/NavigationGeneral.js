import React from 'react'
import { useSelector } from 'react-redux'
import BottomTabNavigator from './BottomTabNavigator'
import AutenticacionStackNavigator from './AutenticacionStackNavigator'

const NavigationGeneral = () => {
    const { usuario, localId } = useSelector(state => state.login)

	return (usuario ? (
            <BottomTabNavigator/>
        ) : (
            <AutenticacionStackNavigator />
        )
	)
}

export default NavigationGeneral
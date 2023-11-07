import { Perfil } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../constants/colors'
import Header from '../components/Header/Header'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { useDispatch } from 'react-redux'
import { clearUsuario } from '../features/LoginReducer'
import { deleteSession } from '../db'

const Stack = createNativeStackNavigator()

const HeaderPerfil = () => {
    return (
        <Header pantalla={"Perfil"}></Header>
    )
}

const PerfilNavigator = () => {
    const dispatch = useDispatch()

    const cerrarSesion = () => {
        dispatch(clearUsuario())
        deleteSession()
    }

    return (
        <Stack.Navigator
            initialRouteName="PerfilStack"
            screenOptions={() => ({
                headerShown: true,
            })}
        >
            <Stack.Screen
                name="PerfilStack"
                component={Perfil}
                options={({ navigation }) => ({
                    headerTitle: HeaderPerfil,
                    headerStyle: { backgroundColor: colors.negro },
                    unmountOnBlur: true,
                    headerLeft: () => (
                        <TouchableOpacity>
                            <Ionicons
                                name="chevron-back"
                                size={24}
                                color="white"
                                onPress={() => navigation.navigate('Home')} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity>
                            <AntDesign
                                name="logout"
                                size={24}
                                color="white"
                                onPress={cerrarSesion} />
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack.Navigator>
    )
}
export default PerfilNavigator
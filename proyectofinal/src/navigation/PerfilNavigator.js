import { Perfil } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const PerfilNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="PerfilStack"
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Stack.Screen
                name="PerfilStack"
                component={Perfil}
            />
        </Stack.Navigator>
    )
}
export default PerfilNavigator
import { Buscar } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const BuscarNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="BuscarStack"
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Stack.Screen
                name="BuscarStack"
                component={Buscar}
            />
        </Stack.Navigator>
    )
}
export default BuscarNavigator
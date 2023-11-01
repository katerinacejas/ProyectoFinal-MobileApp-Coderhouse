import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, Register } from '../screens'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

function AutenticacionStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AutenticacionStackNavigator
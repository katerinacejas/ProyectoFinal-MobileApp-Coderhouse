import { Ekear } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const EkearNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="EkearStack"
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Stack.Screen
                name="EkearStack"
                component={Ekear}
            />
        </Stack.Navigator>
    )
}
export default EkearNavigator
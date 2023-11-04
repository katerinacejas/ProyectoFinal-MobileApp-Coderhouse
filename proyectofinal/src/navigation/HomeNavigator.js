import { Home } from '../screens/'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../constants/colors'
import Header from '../components/Header/Header'

const Stack = createNativeStackNavigator()

const HeaderHome = () => {
    return (
        <Header pantalla={"Home"}></Header>
    )
}

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="HomeStack"
            screenOptions={() => ({
                headerShown: true,
            })}
        >
            <Stack.Screen
                name="HomeStack"
                component={Home}
                options={{
                    unmountOnBlur: true,
                    headerTitle: HeaderHome,
                    headerStyle: { backgroundColor: colors.negro }
                }}
            />
        </Stack.Navigator>
    )
}
export default HomeNavigator
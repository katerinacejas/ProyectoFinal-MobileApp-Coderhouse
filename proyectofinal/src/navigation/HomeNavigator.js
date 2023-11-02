import { Home } from '../screens/'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../constants/colors'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'

const Stack = createNativeStackNavigator()

const HeaderHome = () => {
    return (
        <Image style={styles.logo} source={require('../logoPeque.png')} />
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
                    headerTitle: HeaderHome,
                    headerStyle: { backgroundColor: colors.negro }
                }}
            />
        </Stack.Navigator>
    )
}
export default HomeNavigator

const styles = StyleSheet.create({
    logo: {
        height: 40, 
        width: '100%', 
        resizeMode: 'contain',
        left: -15,
    },
})
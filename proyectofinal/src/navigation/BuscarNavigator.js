import { Buscar } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header/Header'
import { colors } from '../constants/colors'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator()

const HeaderBuscar = () => {
    return (
        <Header pantalla={"Buscar"}></Header>
    )
}

const BuscarNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="BuscarStack"
            screenOptions={() => ({
                headerShown: true,
            })}
        >
            <Stack.Screen
                name="BuscarStack"
                component={Buscar}
                options={({ navigation }) => ({
                    headerTitle: HeaderBuscar,
                    headerStyle: { backgroundColor: colors.negro },
                    unmountOnBlur: true,
                    headerLeft: () => (
                        <TouchableOpacity>
                            <Ionicons 
                                name="chevron-back" 
                                size={24} 
                                color="white" 
                                onPress={() => navigation.navigate('Home')}/>
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack.Navigator>
    )
}
export default BuscarNavigator
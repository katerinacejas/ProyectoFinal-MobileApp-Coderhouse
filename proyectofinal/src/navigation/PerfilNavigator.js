import { Perfil } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../constants/colors'
import Header from '../components/Header/Header'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator()

const HeaderPerfil = () => {
    return (
        <Header pantalla={"Perfil"}></Header>
    )
}

const PerfilNavigator = () => {
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
                                onPress={() => navigation.navigate('Home')}/>
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack.Navigator>
    )
}
export default PerfilNavigator
import { Ekear } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../constants/colors'
import Header from '../components/Header/Header'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator()

const HeaderEkear = () => {
    return (
        <Header pantalla={"Ekear"}></Header>
    )
}

const EkearNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="EkearStack"
            screenOptions={() => ({
                headerShown: true,
            })}
        >
            <Stack.Screen
                name="EkearStack"
                component={Ekear}
                options={({ navigation }) => ({
                    headerTitle: HeaderEkear,
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
export default EkearNavigator
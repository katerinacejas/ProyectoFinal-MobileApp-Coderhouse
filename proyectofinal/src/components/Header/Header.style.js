import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    logoHome: {
        height: 40,
        resizeMode: 'contain',
        width: '100%',
        left: -15,
    },
    logo: {
        height: 40,
        resizeMode: 'contain',
        width: 40,
        marginLeft: 15,
    },
    viewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    tituloPantalla: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10, 
        color: colors.turquesa,
    },
})
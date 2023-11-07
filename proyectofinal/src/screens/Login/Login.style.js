import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { sizes } from '../../constants/sizes'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.negro,
    },
    input: {
        width: '80%',
        borderWidth: 2,
        borderColor: colors.violeta,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        fontSize: sizes.inputs,
        backgroundColor: colors.blanco,
        paddingRight: 45,
    },
    button: {
        backgroundColor: colors.turquesa,
        padding: 10,
        borderRadius: 10,
        shadowColor: colors.blanco,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 15,
    },
    buttonText: {
        color: colors.negro,
        fontSize: sizes.botones,
        textAlign: 'center',
    },
    logo: {
        width: '60%', 
        height: 200, 
        resizeMode: 'contain', 
        marginTop: '30%',
    },
    textoNoTenesCuenta: {
        fontSize: sizes.inputs,
        color: colors.blanco,
        paddingTop: '50%',
        fontFamily: 'meriendaRegular',
    },
    contraseniaView: {
        flexDirection: 'row',
    },
    iconoOjo: {
        position: 'absolute',
        right: 15,
        top: '50%', 
        transform: [{ translateY: -15 }],
    }
})
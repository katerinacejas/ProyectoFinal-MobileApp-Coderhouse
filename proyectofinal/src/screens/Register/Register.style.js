import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { sizes } from '../../constants/sizes'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
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
    botonRegistrarse: {
        backgroundColor: colors.turquesa,
        padding: 10,
        borderRadius: 10,
        shadowColor: colors.blanco,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 10,
    },
    textoBoton: {
        color: colors.negro,
        fontSize: sizes.botones,
        textAlign: 'center',
    },
    logo: {
        width: '60%', 
        height: 200, 
        resizeMode: 'contain', 
        marginTop: '20%',
    },
    textoTenesCuenta: {
        fontSize: sizes.inputs,
        color: colors.blanco,
        marginTop: '5%',
        fontFamily: 'meriendaRegular',
        
    },
    botonTenesCuenta: {
        backgroundColor: colors.turquesa,
        padding: 10,
        borderRadius: 10,
        shadowColor: colors.blanco,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 10,
    },
    viewTenesCuenta:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
    },
    contraseniaView: {
        flexDirection: 'row',
    },
    iconoOjo: {
        position: 'absolute',
        right: 15,
        top: '50%', 
        transform: [{ translateY: -15 }],
    },
    textoAdvertencia:{
        fontSize: sizes.advertencias,
        color: colors.advertencia,
        marginTop: 5,
        padding: 15,
    },
})
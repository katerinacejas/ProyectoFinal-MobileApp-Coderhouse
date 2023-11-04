import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { sizes } from '../../constants/sizes'

export default styles = StyleSheet.create({
    viewGeneral: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.fondoClaro,
    },
    viewBusqueda: {
        backgroundColor: colors.fondoClaro,
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    barraBusqueda: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 10,
        width: '100%',
        borderRadius: 20,
        backgroundColor: colors.blanco,
        borderColor: colors.violeta,
        fontSize: sizes.inputs,
        borderWidth: 1,
        paddingRight: 45,
    },
    iconoLupa: {
        position: 'absolute',
        right: 45,
        top: '50%', 
        transform: [{ translateY: -15 }],
    },


    containerGeneral: {
        width: '100%',
        backgroundColor: colors.fondoClaro,
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.violeta,
        borderRadius: 10,
        margin: 8,
        backgroundColor: colors.blanco,
        alignItems: 'center',

    },
    perfil: {   
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    username: {
        fontSize: 16,
        color: colors.turquesa,
    },
    usuarioArroba: {
        color: colors.negro,
        fontSize: 16,
    },
    portadaMusica: {
        aspectRatio: 1,
        resizeMode: 'cover',
        borderRadius: 10,
        height: 50,
    },
})
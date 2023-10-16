import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { sizes } from '../../constants/sizes'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.fondoClaro,
        padding: 20,
    },
    perfilContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    perfilImagenContainer: {
        width: 135,
        height: 135,
        borderRadius: 50,
        overflow: 'hidden',
    },
    perfilImagen: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    infoUsuarioContainer: {
        flex: 1,
        marginLeft: 20,
    },
    nombre: {
        fontSize: 20,
        fontFamily: 'meriendaRegular',
        color: colors.turquesa,
    },
    usuario: {
        fontSize: 16,
        color: colors.negro,
    },
    biografia: {
        marginTop: 10,
        color: colors.negro,
    },
    separacion: {
        height: 2, 
        backgroundColor: colors.violeta, 
        marginTop: 20,
    },
    containerGeneral: {
        flex: 1,
        backgroundColor: colors.fondoClaro,
    },
    containerEkos: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.violeta,
        borderRadius: 10,
        margin: 10,
        backgroundColor: colors.blanco,
    },
    leftContainer: {
        flex: 1,
    },
    rightContainer: {
        flex: 2,
    },
    perfil: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icono: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    username: {
        fontFamily: 'meriendaRegular',
        fontSize: 16,
        color: colors.turquesa,
    },
    usuarioArroba: {
        color: colors.negro,
        opacity: 0.7,
    },
    textoPosteo: {
        fontSize: 18,
        lineHeight: 24,
        marginBottom: 10,
        color: colors.negro,
    },
    portadaMusica: {
        aspectRatio: 1,
        resizeMode: 'cover',
        borderRadius: 10,
        height: 120,
    },
})
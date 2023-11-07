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
    },
    perfilImagenContainer: {
        width: 80,
        height: 80,
        borderRadius: 50,

    },
    perfilImagen: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 50,
    },
    nombre: {
        fontSize: 20,
        color: colors.violeta,
    },
    usuario: {
        fontSize: 18,
        color: colors.negro,
    },
    biografia: {
        fontSize: 16,
        marginTop: 15,
        color: colors.negro,
    },
    separacion: {
        height: 2, 
        backgroundColor: colors.turquesa, 
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
        borderColor: colors.turquesa,
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
        fontSize: 16,
        color: colors.violeta,
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
    nombresYEditar:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    nombres: {
        marginRight: 30,
    },
    editar: {
        padding: 5,
        borderRadius: 50,
        backgroundColor: colors.blanco,
        borderColor: colors.violeta,
        borderWidth: 1,
    },
    infoUsuarioContainer: {
        flex: 1,
        marginLeft: 20,
    },
})
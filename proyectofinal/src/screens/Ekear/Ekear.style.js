import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { sizes } from '../../constants/sizes'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.fondoClaro,
        padding: 16,
    },
    ekoContainer: {
        flexDirection: 'row',
    },
    imagenDePerfil: {
        width: 60,
        height: 60,
        borderRadius: 25,
    },
    ekoContenido: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'center',
    },
    nombreUnico: {
        fontSize: 18,
    },
    nombre: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.violeta,
    },
    input: {
        fontSize: 18,
        marginTop: 15,
        backgroundColor: colors.blanco,
        height: '40%',
        textAlignVertical:'top',
        borderRadius: 15,
        padding: 15,
        borderColor: colors.turquesa,
        borderWidth: 1,
    },
    botonSeleccionarCancion: {
        backgroundColor: colors.turquesa,
        padding: 10,
        borderRadius: 10,
        shadowColor: colors.blanco,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 15,
        alignSelf: 'center', 
        maxWidth: 200, 
    },
    textoBoton: {
        color: colors.negro,
        fontSize: sizes.botones,
        textAlign: 'center',
    },
    botonEkear: {
        backgroundColor: colors.turquesa,
        padding: 10,
        borderRadius: 10,
        shadowColor: colors.blanco,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 35,
        alignSelf: 'flex-end', 
        maxWidth: 200, 
    },
    containerCancion: {
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
    portadaMusica: {
        aspectRatio: 1,
        resizeMode: 'contain',
        borderRadius: 10,
        maxHeight: 50,
    },
    usuarioArroba: {
        color: colors.negro,
        fontSize: 16,
    },
    perfil: {   
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    containerGeneralCancion: {
        width: '100%',
        backgroundColor: colors.fondoClaro,
        flex: 1,
    },
    viewGeneral: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.fondoClaro,
    },
})
import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { sizes } from '../../constants/sizes'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
    },
    ekoContainer: {
        flexDirection: 'row',
    },
    imagenDePerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    ekoContenido: {
        flex: 1,
        marginLeft: 12,
    },
    nombreUnico: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        fontSize: 18,
        marginTop: 8,
    },
})
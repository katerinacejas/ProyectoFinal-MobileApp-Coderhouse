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
})
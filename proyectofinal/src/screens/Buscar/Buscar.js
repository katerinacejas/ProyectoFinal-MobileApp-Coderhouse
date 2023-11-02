import React, { useState } from 'react'
import { TextInput, View, TouchableOpacity } from 'react-native'
import styles from './Buscar.style'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors'

const Buscar = () => {

    const [usuarioABuscar, setUsuarioABuscar] = useState('')

    const BuscarUsuario = () => {
    }

    return (
        <View style={styles.viewGeneral}>
            <View style={styles.viewBusqueda}>
                <TextInput
                    style={styles.barraBusqueda}
                    placeholder="@ buscar"
                    value={usuarioABuscar}
                    onChangeText={setUsuarioABuscar}
                />
                <TouchableOpacity style={styles.iconoLupa}>
                    <Ionicons
                        name="search"
                        size={25}
                        color={colors.negro}
                        onPress={BuscarUsuario}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Buscar
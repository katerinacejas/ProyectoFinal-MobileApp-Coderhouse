import { TextInput, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors'
import styles from './BarraBusqueda.style'

const BarraBusqueda = ({ buscar }) => {
    const [cancionABuscar, setCancionABuscar] = useState('')

    useEffect(() => {
        buscar(cancionABuscar)
    }, [cancionABuscar])

    return (
        <View style={styles.viewBusqueda}>
            <TextInput
                style={styles.barraBusqueda}
                placeholder="Estoy escuchando..."
                value={cancionABuscar}
                onChangeText={setCancionABuscar}
            />
            <TouchableOpacity style={styles.iconoLupa}>
                <Ionicons
                    name="search"
                    size={25}
                    color={colors.negro}
                />
            </TouchableOpacity>
        </View>
    )
}

export default BarraBusqueda
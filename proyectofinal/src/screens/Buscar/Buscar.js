import React, { useState } from 'react'
import { TextInput, View, TouchableOpacity, FlatList, Image, Text } from 'react-native'
import styles from './Buscar.style'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors'
import { useGetCancionesQuery } from '../../services/cancionesApi';

const Buscar = () => {

    const [usuarioABuscar, setUsuarioABuscar] = useState('')

    const BuscarUsuario = () => {
    }

    const { data, isLoading, error } = useGetCancionesQuery();


    const renderUsuarios = ({ item }) => (
        <View style={styles.container}>
            <Image source={{ uri: item.urlPortada }} style={styles.portadaMusica} />
            <View style={styles.perfil}>
                <Text style={styles.usuarioArroba}>{item.canción}</Text>
                <Text style={styles.usuarioArroba}>{item.autor}</Text>
            </View>
        </View>
    )

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
            <View style={styles.containerGeneral}>
                <Text style={styles.textoProximamente}>¡Proximamente!</Text>
            </View>


        </View>
    )
}
export default Buscar
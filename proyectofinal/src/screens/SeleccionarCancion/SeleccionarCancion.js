import React, { useState } from 'react'
import { TextInput, View, TouchableOpacity, FlatList, Image, Text } from 'react-native'
import styles from './SeleccionarCancion.style'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors'
import { useGetCancionesQuery } from '../../services/cancionesApi';

const SeleccionarCancion = () => {

    const [cancionABuscar, setCancionABuscar] = useState('')

    const BuscarCancion = () => {
    }

    const { data, isLoading, error } = useGetCancionesQuery();


    const renderCanciones = ({ item }) => (
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
                    placeholder="Estoy escuchando..."
                    value={cancionABuscar}
                    onChangeText={setCancionABuscar}
                />
                <TouchableOpacity style={styles.iconoLupa}>
                    <Ionicons
                        name="search"
                        size={25}
                        color={colors.negro}
                        onPress={BuscarCancion}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.containerGeneral}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    renderItem={renderCanciones}
                />
            </View>
        </View>
    )
}
export default SeleccionarCancion
import React, { useState } from 'react'
import { TextInput, View, TouchableOpacity, FlatList } from 'react-native'
import styles from './Buscar.style'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors'

const Buscar = () => {

    const [usuarioABuscar, setUsuarioABuscar] = useState('')

    const BuscarUsuario = () => {
    }

    const renderEkos = ({ item }) => (
        <View style={styles.container}>
            <View style={styles.rightContainer}>
                <View style={styles.perfil}>
                    <Image source={item.icono} style={styles.icono} />
                    <View>
                        <Text style={styles.username}>{item.nombre}</Text>
                        <Text style={styles.usuarioArroba}>{item.usuario}</Text>
                    </View>
                </View>
                <Text style={styles.textoPosteo}>¡Está escuchando {item.cancion} de {item.autor}!</Text>
                <Text style={styles.textoMomento}> {item.momento} </Text>
            </View>
            <View style={styles.leftContainer}>
                <Image source={item.portada} style={styles.portadaMusica} />
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
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={renderEkos}
                />
            </View>


        </View>
    )
}
export default Buscar
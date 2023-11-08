import styles from './Ekear.style'
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { View, Image, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useGetCancionesQuery } from '../../services/cancionesApi';
import BarraBusqueda from '../../components/BarraBusqueda/BarraBusqueda';
import { Ionicons } from '@expo/vector-icons';
import { usePostEkoMutation } from '../../services/usuariosApi';

const Ekear = () => {
    const localIdUsuario = useSelector(state => state.login.localId)

    const [cancionABuscar, setCancionABuscar] = useState('')
    const { data, isLoading } = useGetCancionesQuery();
    const [infoCanciones, setInfoCanciones] = useState([])
    const [cancionSeleccionada, setCancionSeleccionada] = useState(null);
    const [infoCancionAEkear, setInfoCancionAEkear] = useState([])

    const [triggerEkear, result] = usePostEkoMutation()

    useEffect(() => {
        if (!isLoading) {
            const dataArr = Object.values(data)
            setInfoCanciones(dataArr)
            const cancionesFiltradas = dataArr.filter(infoCancion =>
                infoCancion.canción.includes(cancionABuscar)
            )
            setInfoCanciones(cancionesFiltradas)
        }
    }, [isLoading, cancionABuscar])

    const seleccionarCancion = async (id) => {
        console.log("el id que llega por parametro en seleccionar cancion es: ", id)
        setCancionSeleccionada(id)
        const dataArr = Object.values(data)
        const cancionElegida = dataArr.filter(infoCancion =>
            infoCancion.id === id
        )
        if (cancionElegida) {
            console.log("cancionElegida ", cancionElegida)
            setInfoCancionAEkear(cancionElegida)
            console.log("infoCancionAEkear ", infoCancionAEkear)
        }

    }

    const ekear = async () => {
        await triggerEkear({
            infoCancionAEkear,
            localId: localIdUsuario,
        });
        console.log("ya ekee ", infoCancionAEkear)
        setCancionSeleccionada(null)
        Alert.alert('Ekeado!');
    }

    const deseleccionarCancion = (id) => {
        if (cancionSeleccionada === id) {
            setCancionSeleccionada(null)
            console.log("el id deseleccionado guardado en eko es", id)
        }
    }

    const renderCanciones = ({ item }) => (
        <View style={[styles.containerRenderCanciones, {
            opacity: cancionSeleccionada === null || cancionSeleccionada === item.id ? 1 : 0.5,
        }]}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => seleccionarCancion(item.id)}>
                    <Image source={{ uri: item.urlPortada }} style={styles.portadaMusica} />
                </TouchableOpacity>
                <View style={styles.perfil}>
                    <Text style={styles.usuarioArroba}>{item.canción}</Text>
                    <Text style={styles.usuarioArroba}>{item.autor}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.iconDeseleccionar}
                onPress={() => deseleccionarCancion(item.id)}>
                <Ionicons
                    name="close-circle-outline"
                    size={24}
                    color="black" />
            </TouchableOpacity>
        </View>
    )

    return (
        <>
            <View style={styles.viewGeneral}>
                <BarraBusqueda buscar={setCancionABuscar}></BarraBusqueda>
                <View style={styles.containerGeneral}>
                    {!isLoading && (
                        <FlatList
                            data={infoCanciones}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            renderItem={renderCanciones}
                        />
                    )}
                </View>
                <TouchableOpacity style={styles.botonEkear}>
                    <Text
                        style={styles.textoBoton}
                        onPress={ekear}>
                        Ekear!
                    </Text>
                </TouchableOpacity>
            </View>
            {/* <TextInput
                style={styles.input}
                placeholder="¿Qué estas escuchando?"
                multiline
                value={eko.texto}
                maxLength={256}
                onChangeText={(texto) => setEko(texto)}
            /> */}
            {/* <View style={styles.container}> */}
            {/* <TouchableOpacity style={styles.botonSeleccionarCancion}>
                    <MaterialCommunityIcons
                        name="music-circle-outline"
                        size={24}
                        color="black"
                        onPress={seleccionarCancion} />
                </TouchableOpacity> */}

            {/* <View style={styles.containerCancion}> */}
            {/* <Image source={{ uri: urlPortadaElegida }} style={styles.portadaMusica} /> */}
            {/* <Image source={require('../../logoPeque.png')} style={styles.portadaMusica} />
                    <View style={styles.infoCancion}>
                        <Text style={styles.tituloAutor}>cancion elegida</Text>
                        <Text style={styles.tituloAutor}>autor elegido</Text>
                    </View>
                </View> */}
            {/* </View> */}
        </>
    )
}
export default Ekear
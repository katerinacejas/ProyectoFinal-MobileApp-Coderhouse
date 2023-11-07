import styles from './Ekear.style'
import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { useGetCancionesQuery } from '../../services/cancionesApi';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Ekear = () => {
    const [eko, setEko] = useState({
        texto: '',
        infoDeLaCancion: {
            cancion: '',
            portada: '',
            autor: '',
        },
        momento: '',
        usuario: '',
    });

    const { data, isLoading, error } = useGetCancionesQuery();

    const seleccionarCancion = () => {
        return //navegar a la pantalla seleccionar cancion
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.ekoContainer}>
                    <Image
                        source={require('../../data/usuario.png')}
                        style={styles.imagenDePerfil}
                    />
                    <View style={styles.ekoContenido}>
                        <Text style={styles.nombre}>TuNombreDeUsuario</Text>
                        <Text style={styles.nombreUnico}>@nombreUnico</Text>
                    </View>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="¿Qué estas escuchando?"
                    multiline
                    value={eko.texto}
                    maxLength={256}
                    onChangeText={(texto) => setEko(texto)}
                />
            </View>
            <TouchableOpacity style={styles.botonSeleccionarCancion}>
                <MaterialCommunityIcons
                    name="music-circle-outline"
                    size={24}
                    color="black"
                    onPress={seleccionarCancion} />
            </TouchableOpacity>
            <View style={styles.viewGeneral}>
                <View style={styles.containerGeneralCancion}>
                    <View style={styles.containerCancion}>
                        {/* <Image source={{ uri: urlPortadaElegida }} style={styles.portadaMusica} /> */}
                        <Image source={require('../../logoPeque.png')} style={styles.portadaMusica} />
                        <View style={styles.perfil}>
                            <Text style={styles.usuarioArroba}>cancion elegida</Text>
                            <Text style={styles.usuarioArroba}>autor elegido</Text>
                        </View>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.botonEkear}>
                <Text
                    style={styles.textoBoton}
                    onPress={seleccionarCancion}>
                    Ekear!
                </Text>
            </TouchableOpacity>
        </>
    )
}
export default Ekear
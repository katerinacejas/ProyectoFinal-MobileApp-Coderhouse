import styles from './Ekear.style'
import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { useGetCancionesQuery } from '../../services/cancionesApi';

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
            <TouchableOpacity style={styles.botonSeleccionarCancion}>
                <Text
                    style={styles.textoBoton}
                    onPress={seleccionarCancion}>
                    Seleccionar Canción
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonEkear}>
                <Text
                    style={styles.textoBoton}
                    onPress={seleccionarCancion}>
                    Ekear!
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default Ekear
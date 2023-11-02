import styles from './Ekear.style'
import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';


const Ekear = () => {
    const [eko, setEko] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.ekoContainer}>
                <Image
                    source={require('../../data/usuario.png')}
                    style={styles.imagenDePerfil}
                />
                <View style={styles.ekoContenido}>
                    <Text style={styles.nombreUnico}>TuNombreDeUsuario</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="¿Qué estas escuchando?"
                        multiline
                        value={eko}
                        onChangeText={(text) => setEko(text)}
                    />
                </View>
            </View>
        </View>
    );
}
export default Ekear
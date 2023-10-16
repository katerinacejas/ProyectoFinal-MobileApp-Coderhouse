import React from 'react'
import { Image, Text, View, TextInput, FlatList } from 'react-native'
import styles from './Perfil.style'
import data from '../../data/miPerfil'
import dataEkos from '../../data/ekos'

const Perfil = () => {

    const renderEkos = ({ item }) => (
        <View style={styles.containerEkos}>
            <View style={styles.rightContainer}>
                <View style={styles.perfil}>
                    <Image source={item.icono} style={styles.icono} />
                    <View>
                        <Text style={styles.username}>{data.nombre}</Text>
                        <Text style={styles.usuarioArroba}>{data.usuario}</Text>
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
        <>
            <View style={styles.container}>
                <View style={styles.perfilContainer}>
                    <View style={styles.perfilImagenContainer}>
                        <Image
                            source={require('../../data/usuario.png')}
                            style={styles.perfilImagen}
                        />
                    </View>
                    <View style={styles.infoUsuarioContainer}>
                        <Text style={styles.nombre}> {data.nombre} </Text>
                        <Text style={styles.usuario}> {data.usuario} </Text>
                        <Text style={styles.biografia}> {data.biografia} </Text>
                    </View>
                </View>

                {/* linea de separacion entre el perfil y los posteos */}
                <View style={styles.separacion}></View>
            </View>
            <View style={styles.containerGeneral}>
                <FlatList
                    data={dataEkos}
                    keyExtractor={item => item.id}
                    renderItem={renderEkos}
                />
            </View>
        </>
    )
}
export default Perfil
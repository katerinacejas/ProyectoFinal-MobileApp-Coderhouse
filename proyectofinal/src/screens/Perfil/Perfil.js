import { Image, Text, View, FlatList, RefreshControl, TouchableOpacity } from 'react-native'
import styles from './Perfil.style'
import dataEkos from '../../data/ekos'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { FontAwesome } from '@expo/vector-icons';
import { usePostFotoDePerfilMutation } from '../../services/usuariosApi'
import { setImagen } from '../../features/LoginReducer'
import { useGetFotoDePerfilQuery } from '../../services/usuariosApi'
import { useGetEkosQuery } from '../../services/usuariosApi'

const Perfil = () => {
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const email = useSelector(state => state.login.email)
    const localId = useSelector(state => state.login.localId)
    const imagen = useSelector(state => state.login.imagen)
    const { data, isLoading, error, refetch } = useGetFotoDePerfilQuery();
    const [triggerGuardarFotoDePerfil, result] = usePostFotoDePerfilMutation()
    const dispatch = useDispatch()

    const { dataEkos } = useGetEkosQuery(localId);
    const dataArr = Object.values(dataEkos)

    const tomarFoto = async () => {
        const verificacionPermisos = await ImagePicker.requestCameraPermissionsAsync()
        if (verificacionPermisos) {
            let foto = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1, 1],
                base64: true,
                quality: 0.3,
            })
            if (!foto.canceled) {
                // dispatch(setImagen(`data:image/jpeg;base64,${foto.assets[0].base64}`))
                // triggerGuardarFotoDePerfil({ imagen: imagen, localId: localId})

                await triggerGuardarFotoDePerfil({
                    imagen: `data:image/jpg;base64,${foto.assets[0].base64}`,
                    localId: localId,
                });
                refetch();
            }
        }

    }

    const renderEkos = ({ item }) => {
        console.log(item)
        const autor = item[0].autor;
        const cancion = item[0].canción;
        const urlPortada = item[0].urlPortada;
        console.log(autor)
        return (
            <View style={styles.container}>
                <View style={styles.rightContainer}>
                    <View style={styles.perfil}>
                        <Text style={styles.username}> {email}</Text>
                    </View>
                    <Text style={styles.textoPosteo}>¡Está escuchando {cancion} de {autor}!</Text>
                </View>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: urlPortada }} style={styles.portadaMusica} />
                </View>
            </View>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.perfilContainer}>
                    <View style={styles.perfilImagenContainer}>
                        <Image
                            style={styles.perfilImagen}
                            source={{
                                uri: data ? data.imagen : 'https://firebasestorage.googleapis.com/v0/b/ekoloomcoderhouse.appspot.com/o/usuario.png?alt=media',
                            }}
                        />
                    </View>
                    <View style={styles.infoUsuarioContainer}>
                        <View style={styles.nombresYEditar}>
                            <View style={styles.nombres}>
                                <Text style={styles.nombre}> {email} </Text>
                            </View>
                            <TouchableOpacity
                                style={styles.editar}
                                onPress={tomarFoto} >
                                <FontAwesome name="camera" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.separacion}></View>
            </View>

            <View style={styles.containerGeneral}>
            <FlatList
                data={dataArr}
                keyExtractor={item => item.canción}
                renderItem={renderEkos}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
        </>
    )
}
export default Perfil
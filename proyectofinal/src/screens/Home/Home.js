import React, { useState, useEffect } from 'react';
import { Image, Text, View, FlatList, RefreshControl } from 'react-native'
import styles from './Home.style'
import { useGetEkosQuery } from '../../services/usuariosApi'
import { useSelector } from 'react-redux'

const Home = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const localId = useSelector(state => state.login.localId)
    const { data, isLoading } = useGetEkosQuery(localId);

    const [dataArr, setDataArr] = useState([])

    const email = useSelector(state => state.login.email)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const renderEkos = ({ item }) => {
        console.log(item)
        const autor = item[0].autor;
        const cancion = item[0].canción;
        const urlPortada = item[0].urlPortada;
        console.log(autor)
        return (
            <View key={cancion} style={styles.container}>
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

    useEffect(() => {
        if (data) {
            setDataArr(Object.values(data))
            console.log("LA DATA ASI COMO LA TRAIGO DE LA BASE ------------------------------------------",data)
        }
    }, [data])

    return (
        <View style={styles.containerGeneral}>
            <FlatList
                data={dataArr}
                //keyExtractor={item => item.canción}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderEkos}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
    )
}
export default Home
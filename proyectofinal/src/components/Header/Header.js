import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './Header.style'

const Header = ({ pantalla }) => {
    if (pantalla === 'Home') {
        return (
            <Image
                style={styles.logoHome}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/ekoloomcoderhouse.appspot.com/o/logoPeque.png?alt=media' }}
            />
        )
    }
    if (pantalla === 'Perfil'){
        return (
            <View style={styles.viewHeader}>
                <Image
                    style={styles.logo}
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/ekoloomcoderhouse.appspot.com/o/logoPeque.png?alt=media' }}
                />
                <Text style={styles.tituloPantalla}> Mi Perfil </Text>
            </View>
        )
    }
    if (pantalla === 'Buscar'){
        return (
            <View style={styles.viewHeader}>
                <Image
                    style={styles.logo}
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/ekoloomcoderhouse.appspot.com/o/logoPeque.png?alt=media' }}
                />
                <Text style={styles.tituloPantalla}> Conectar </Text>
            </View>
        )
    }
    if (pantalla === 'Ekear'){
        return (
            <View style={styles.viewHeader}>
                <Image
                    style={styles.logo}
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/ekoloomcoderhouse.appspot.com/o/logoPeque.png?alt=media' }}
                />
                <Text style={styles.tituloPantalla}> Ekear! </Text>
            </View>
        )
    }
}

export default Header


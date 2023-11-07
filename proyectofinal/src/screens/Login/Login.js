import React, { useState, useRef } from 'react'
import { Image, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import styles from './Login.style'
import { useDispatch } from 'react-redux'
import { Octicons } from '@expo/vector-icons'
import { useLoginMutation } from '../../services/autenticacion'
import { setUsuario } from '../../features/LoginReducer'
import { insertSession } from '../../db'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [contrasenia, setContrasenia] = useState('')

    const [mostrarContrasenia, setMostrarContrasenia] = useState(false)

    const [triggerLogin] = useLoginMutation()
    const dispatch = useDispatch();

    const funcionIniciarSesion = () => {
        if (email === "" || contrasenia === "") {
            return
        }
        console.log(email, contrasenia)

        triggerLogin({
            email: email,
            password: contrasenia,
        })
        .unwrap()
        .then(result => {
            dispatch(setUsuario(result))
            console.log("llegue hasta aca en login post dispatch")
            insertSession({
                localId: result.localId,
                email: result.email,
                token: result.idToken,
            })
            console.log("llegue hasta aca post insert session")
        })
        .catch(error => console.log(error.message))
    }

    const funcionIrARegistrarse = () => {
        setEmail("")
        setContrasenia("")
        navigation.navigate('Register')
    }

    const inputRef2 = useRef(null);

    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <Image
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/ekoloomcoderhouse.appspot.com/o/logo.png?alt=media' }}
                style={styles.logo}
            />
            <TextInput
                placeholder="email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                returnKeyType="next"
                onSubmitEditing={() => inputRef2.current.focus()}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
            />
            <View style={styles.contraseniaView}>
                <TextInput
                    placeholder="contraseña"
                    style={styles.input}
                    value={contrasenia}
                    onChangeText={setContrasenia}
                    secureTextEntry={!mostrarContrasenia}
                    ref={inputRef2}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <TouchableOpacity style={styles.iconoOjo}>
                    <Octicons
                        name={mostrarContrasenia ? 'eye-closed' : 'eye'}
                        size={20}
                        color="black"
                        onPress={() => setMostrarContrasenia(!mostrarContrasenia)}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text
                    style={styles.buttonText}
                    onPress={funcionIniciarSesion}>
                    Iniciar Sesión
                </Text>
            </TouchableOpacity>

            <Text style={styles.textoNoTenesCuenta}>¿No tenes una cuenta?</Text>
            <TouchableOpacity style={styles.button}>
                <Text
                    style={styles.buttonText}
                    onPress={funcionIrARegistrarse}>
                    Registrarse
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login
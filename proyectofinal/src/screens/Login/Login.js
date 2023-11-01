import React, { useState, useRef } from 'react'
import { Image, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import styles from './Login.style'
import { useDispatch } from 'react-redux'
import { Octicons } from '@expo/vector-icons'
import { useLoginMutation } from '../../services/autenticacion'
import { setUsuario } from '../../features/LoginReducer'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [contrasenia, setContrasenia] = useState('')

    const [mostrarContrasenia, setMostrarContrasenia] = useState(false)

    const [triggerLogin, result] = useLoginMutation()
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
        console.log(result)

        if (result.isSuccess) {
            dispatch(setUsuario(result.data))
        }

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
                source={require('../../logo.png')}
                style={styles.logo}
            />
            <TextInput
                placeholder="email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                returnKeyType="next"
                onSubmitEditing={() => inputRef2.current.focus()}
            />
            <View style={styles.contraseniaView}>
                <TextInput
                    placeholder="contraseña"
                    style={styles.input}
                    value={contrasenia}
                    onChangeText={setContrasenia}
                    secureTextEntry={!mostrarContrasenia}
                    ref={inputRef2}
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
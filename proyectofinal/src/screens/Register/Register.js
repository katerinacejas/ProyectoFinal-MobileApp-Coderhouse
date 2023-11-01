import React, { useState, useRef } from 'react'
import { Image, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import styles from './Register.style'
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../../services/autenticacion'
import { Octicons } from '@expo/vector-icons'
import { setUsuario } from '../../features/LoginReducer'

const Register = ({ navigation }) => {
    const [nombre, setNombre] = useState('')
    const [nombreUnico, setNombreUnico] = useState('')
    const [email, setEmail] = useState('')
    const [contrasenia, setContrasenia] = useState('')
    const [confirmarContrasenia, setConfirmarContrasenia] = useState('')

    const [mostrarContrasenia, setMostrarContrasenia] = useState(false)
    const [mostrarConfirmarContrasenia, setMostrarConfirmarContrasenia] = useState(false)

    const [triggerSignUp, result] = useSignUpMutation()
    const dispatch = useDispatch();

    const funcionRegistrarse = () => {
        if (nombreUnico === "" || contrasenia === "" || nombre === ""  || email === ""  || confirmarContrasenia === "") {
            return
        }
        console.log(nombre, nombreUnico, email, contrasenia)

        triggerSignUp({
            email: email,
            password: contrasenia,
        })
        console.log(result)

        if (result.isSuccess) {
            dispatch(setUsuario(result.data))
        }

    }

    const funcionIrAIniciarSesion = () => {
        setNombre("")
        setNombreUnico("")
        setEmail("")
        setContrasenia("")
        setConfirmarContrasenia("")
        navigation.navigate('Login')
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
                placeholder="nombre"
                style={styles.input}
                value={nombre}
                onChangeText={setNombre}
                returnKeyType="next"
                onSubmitEditing={() => inputRef2.current.focus()}
            />
            <TextInput
                placeholder="usuario"
                style={styles.input}
                value={nombreUnico}
                onChangeText={setNombreUnico}
                returnKeyType="next"
                onSubmitEditing={() => inputRef2.current.focus()}
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
            <View style={styles.contraseniaView}>
                <TextInput
                    placeholder="confirmar contraseña"
                    style={styles.input}
                    value={confirmarContrasenia}
                    onChangeText={setConfirmarContrasenia}
                    secureTextEntry={!mostrarConfirmarContrasenia}
                    ref={inputRef2}
                />
                <TouchableOpacity style={styles.iconoOjo}>
                    <Octicons
                        name={mostrarConfirmarContrasenia ? 'eye-closed' : 'eye'}
                        size={20}
                        color="black"
                        onPress={() => setMostrarConfirmarContrasenia(!mostrarConfirmarContrasenia)}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.botonRegistrarse}>
                <Text
                    style={styles.textoBoton}
                    onPress={funcionRegistrarse}>
                    Registrarse
                </Text>
            </TouchableOpacity>

            <Text style={styles.textoTenesCuenta}>¿Ya tenes una cuenta?</Text>
            <TouchableOpacity style={styles.botonTenesCuenta}>
                <Text
                    style={styles.textoBoton}
                    onPress={funcionIrAIniciarSesion}>
                    Iniciar Sesión
                </Text>
            </TouchableOpacity>
        </View >
    )
}

export default Register
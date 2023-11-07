import React, { useState } from 'react'
import { Image, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import styles from './Register.style'
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../../services/autenticacion'
import { usePostUsuarioMutation } from '../../services/usuariosApi'
import { Octicons } from '@expo/vector-icons'
import { setUsuario } from '../../features/LoginReducer'

const Register = ({ navigation }) => {
    const [nombre, setNombre] = useState('')
    const [nombreUnico, setNombreUnico] = useState('')
    const [email, setEmail] = useState('')
    const [contrasenia, setContrasenia] = useState('')
    const [confirmarContrasenia, setConfirmarContrasenia] = useState('')
    const fotoDePerfil = "https://firebasestorage.googleapis.com/v0/b/ekoloomcoderhouse.appspot.com/o/usuario.png?alt=media"
    const biografia = "¡Hola! Esta es mi biografía por default."
    const [mostrarContrasenia, setMostrarContrasenia] = useState(false)
    const [mostrarConfirmarContrasenia, setMostrarConfirmarContrasenia] = useState(false)

    const [mostrarAdvContrasenia, setMostrarAdvContrasenia] = useState(false)
    const [mostrarAdvConfirmarContraseña, setMostrarAdvConfirmarContrasenia] = useState(false)
    const [mostrarAdvUsuario, setMostrarAdvUsuario] = useState(false)

    const [triggerSignUp] = useSignUpMutation()
    const [triggerPostUsuario, resultPostUsuario] = usePostUsuarioMutation()

    const dispatch = useDispatch();

    const funcionRegistrarse = () => {
        setMostrarAdvContrasenia(false)
        setMostrarAdvConfirmarContrasenia(false)
        setMostrarAdvUsuario(false)

        if (nombreUnico === "" || contrasenia === "" || nombre === "" || email === "" || confirmarContrasenia === "") {
            return
        }
        console.log(nombre, nombreUnico, email, contrasenia, confirmarContrasenia)

        //validaciones de lo ingresado
        if (contrasenia !== confirmarContrasenia) {
            setMostrarAdvConfirmarContrasenia(true)
            return
        }
        if (!(contrasenia.length >= 8 && /[A-Z]/.test(contrasenia) && /\d/.test(contrasenia))) {
            setMostrarAdvContrasenia(true)
            return
        }

        //todo lo ingresado ta ok
        triggerSignUp({
            email: email,
            password: contrasenia,
        })
        .unwrap()
        .then(resultSignUp => {
                console.log(resultSignUp)
                triggerPostUsuario({
                    nombre: nombre,
                    nombreUnico: nombreUnico,
                    email: email,
                    timestampRegistro: new Date().toLocaleString(),
                    biografia: biografia,
                    fotoDePerfil: fotoDePerfil,
                })
                console.log(resultPostUsuario)
                dispatch(setUsuario(resultSignUp))
            })
        .catch(err => console.log(err))
    }

    const funcionIrAIniciarSesion = () => {
        setNombre("")
        setNombreUnico("")
        setEmail("")
        setContrasenia("")
        setConfirmarContrasenia("")
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <Image
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/ekoloomcoderhouse.appspot.com/o/logo.png?alt=media' }}
                style={styles.logo}
            />
            <TextInput
                placeholder="nombre"
                style={styles.input}
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                placeholder="usuario"
                style={styles.input}
                value={nombreUnico}
                onChangeText={setNombreUnico}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <TextInput
                placeholder="email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
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
            <View style={styles.contraseniaView}>
                <TextInput
                    placeholder="confirmar contraseña"
                    style={styles.input}
                    value={confirmarContrasenia}
                    onChangeText={setConfirmarContrasenia}
                    secureTextEntry={!mostrarConfirmarContrasenia}
                    autoCapitalize='none'
                    autoCorrect={false}
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

            {/* textos en caso de que haya alguna advertencia del registro en true */}

            {mostrarAdvContrasenia ? (
                <Text style={styles.textoAdvertencia}>La contraseña debe tener al menos 8 caracteres incluyendo mayúsculas y dígitos</Text>
            ) : (
                null
            )}
            {mostrarAdvConfirmarContraseña ? (
                <Text style={styles.textoAdvertencia}>Las contraseñas ingresadas no coinciden</Text>
            ) : (
                null
            )}
            {mostrarAdvUsuario ? (
                <Text style={styles.textoAdvertencia}>Ese usuario ya existe</Text>
            ) : (
                null
            )}
            <View style={styles.viewTenesCuenta}>
                <Text style={styles.textoTenesCuenta}>¿Ya tenes una cuenta?</Text>
                <TouchableOpacity style={styles.botonTenesCuenta}>
                    <Text
                        style={styles.textoBoton}
                        onPress={funcionIrAIniciarSesion}>
                        Iniciar Sesión
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default Register
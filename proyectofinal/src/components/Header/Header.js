import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './Header.style'

const Header = ({ title, action }) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default Header
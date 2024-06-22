import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const CustomButton = ({ title, to }) => {
    return (
        <View style={styles.btnDangNhap}>

            <TouchableOpacity style={styles.button}>
                <Link href={to} style={styles.link}>
                    <Text style={styles.buttonText}>{title}</Text>
                </Link>
            </TouchableOpacity>

        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btnDangNhap: {
        marginTop: 20,
        width: '85%',
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 30,
    },
    link: {
        // backgroundColor: 'green',
        padding: 15,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})
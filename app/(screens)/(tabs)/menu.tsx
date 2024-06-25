import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const menu = () => {
    return (
        <View>
            <Text>menu</Text>
            <Link href='/profile'>go profile</Link>
        </View>
    )
}

export default menu

const styles = StyleSheet.create({})
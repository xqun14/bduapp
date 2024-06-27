import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const profile = () => {
    return (
        <View>
            <Text>profile</Text>
            <Link href='/information/1'>information-1</Link>
            <Link href='/information/2'>information-2</Link>
            <Link href='/information/3'>information-3</Link>
        </View>
    )
}

export default profile

const styles = StyleSheet.create({})
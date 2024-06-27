import { StyleSheet, Text, View } from 'react-native'
import { Stack, useGlobalSearchParams } from 'expo-router'

const information = () => {
    const { id } = useGlobalSearchParams()
    switch (id) {
        case '1':
            return (
                <View>
                    <Stack.Screen options={{ headerTitle: `Thông tin sinh viên`, headerBackTitleVisible: false }} />
                    <Text>information {id}</Text>
                </View>
            )
        case '2':
            return (
                <View>
                    <Stack.Screen options={{ headerTitle: `Thông tin khoá học`, headerBackTitleVisible: false }} />
                    <Text>information {id}</Text>
                </View>
            )
        case '3':
            return (
                <View>
                    <Stack.Screen options={{ headerTitle: `Cố vấn học tập`, headerBackTitleVisible: false }} />
                    <Text>information {id}</Text>
                </View>
            )
    }
}

export default information

const styles = StyleSheet.create({})
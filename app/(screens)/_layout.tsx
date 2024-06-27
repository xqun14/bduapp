import { StyleSheet, Text, View, Image } from 'react-native'
import { Tabs, Redirect, Stack } from 'expo-router'
import React from 'react'
import notification from './(tabs)/notification';
import menu from './(tabs)/menu';

const TabIcon = ({ icon, color }) => {
    const icons = {
        home: require('@/assets/images/icon/tabbar/home.png'),
        classschedule: require('@/assets/images/icon/tabbar/classschedule.png'),
        examschedule: require('@/assets/images/icon/tabbar/examschedule.png'),
        notification: require('@/assets/images/icon/tabbar/notification.png'),
        menu: require('@/assets/images/icon/tabbar/menu.png'),
    };

    return (
        <View>
            <Image style={{ height: 20, width: 20 }}
                source={icons[icon]}
                tintColor={color}
            />
        </View>
    );
};
const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#2F80ED',
                    tabBarInactiveTintColor: '#171717',
                    tabBarLabelStyle: { fontSize: 10 }
                }}
            >
                <Tabs.Screen
                    name='(tabs)/home'
                    options={{
                        title: 'Trang chủ',
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon='home'
                                color={color}
                            />
                        ),


                    }} />
                <Tabs.Screen
                    name='(tabs)/classschedule'
                    options={{
                        title: 'Thời khoá biểu',
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon='classschedule'
                                color={color}
                            />
                        )
                    }} />
                <Tabs.Screen
                    name='(tabs)/examschedule'
                    options={{
                        title: 'Lịch thi',
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon='examschedule'
                                color={color}
                            />
                        )
                    }} />
                <Tabs.Screen
                    name='(tabs)/notification'
                    options={{
                        title: 'Thông báo',
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon='notification'
                                color={color}
                            />
                        )
                    }} />
                <Tabs.Screen
                    name='(tabs)/menu'
                    options={{
                        // headerTitle: 'Menu',
                        title: 'Menu',
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon='menu'
                                color={color}
                            />
                        )
                    }} />
                <Tabs.Screen
                    name='profile'
                    options={{
                        tabBarButton: () => null,
                        // headerShown: false,
                    }} />
            </Tabs>
        </>
    )
}

export default TabsLayout

const styles = StyleSheet.create({})
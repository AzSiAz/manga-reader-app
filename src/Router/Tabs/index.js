import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import HomeStack from '../../Screens/TabsScreen/HomeStack/router'
import SettingsStack from '../../Screens/TabsScreen/SettingsStack/router'
import FavoritesStack from '../../Screens/TabsScreen/FavoritesStack/router'


export default Tabs = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-list' : 'ios-list-outline'}
                    size={35}
                    style={{ color: tintColor }}
                />
            )
        },
    },
    Favorites: {
        screen: FavoritesStack,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-star' : 'ios-star-outline'}
                    size={35}
                    style={{ color: tintColor }}
                />
            )
        },
    },
    Settings: {
        screen: SettingsStack,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-settings' : 'ios-settings-outline'}
                    size={35}
                    style={{ color: tintColor }}
                />
            )
        },
    }
}, {
    tabBarOptions: {
        // activeBackgroundColor: '#2c3e50',
        // inactiveBackgroundColor: '#2c3e50'
        activeTintColor: 'white',
        style: {
            backgroundColor: '#2c3e50'
        }
    }
})
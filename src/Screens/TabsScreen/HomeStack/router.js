import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import Home from './Home'
import Detail from './Detail'

export default StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({navigation}) => {
                return {
                    headerTintColor: 'white',
                    headerStyle: {backgroundColor: '#2c3e50'},
                    title: 'Latest Manga',
                    headerRight: (
                        <View style={styles.container}>
                            <TouchableOpacity onPress={() => navigation.navigate('SearchModal')}>
                                <Icon
                                    type='ionicon'
                                    underlayColor='lightGray'
                                    size={35}
                                    name="ios-search-outline"
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }
            }
        },
        MangaDetail: {
            screen: Detail,
            navigationOptions: ({navigation}) => ({
                headerTintColor: 'white',
                headerStyle: {backgroundColor: '#2c3e50'},
                title: navigation.state.params.manga.title.substr(0, 15) + '...'
            })
        }
    }
)

let styles = StyleSheet.create({
    container: {
        marginRight: 15
    }
})

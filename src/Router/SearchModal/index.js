import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import SearchModalScreen from '../../Screens/SearchModalScreen'

export default StackNavigator(
    {
        SearchModal: {
            screen: SearchModalScreen,
            navigationOptions: ({navigation}) => {
                return {
                    title: 'Search',
                    gesturesEnabled: false,
                    headerRight: (
                        <View style={styles.container}>
                            <TouchableOpacity onPress={() => navigation.goBack(null)}>
                                <Icon
                                    type='ionicon'
                                    underlayColor='lightGray'
                                    size={45}
                                    name="ios-close-outline"
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }
            },
        },
    }
);

let styles = StyleSheet.create({
    container: {
        marginRight: 10
    }
})
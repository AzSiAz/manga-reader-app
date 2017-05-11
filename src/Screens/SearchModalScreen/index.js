import React, { PureComponent } from 'react'
import {View, Text, TextInput, StyleSheet } from 'react-native'
import { observer, inject } from 'mobx-react'

@inject('Counter')
@observer
class SearchModal extends PureComponent {
    render() {
        return (
            <View>
                <Text>
                    Search
                </Text>
            </View>
        )
    }
}

export default SearchModal
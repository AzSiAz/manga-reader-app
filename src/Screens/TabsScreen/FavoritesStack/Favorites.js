import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { observer, inject } from 'mobx-react'


@inject('Counter')
@observer
class Favorites extends PureComponent{
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Ongoing Implementation
                </Text>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Favorites

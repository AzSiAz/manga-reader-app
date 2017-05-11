import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { observer, inject } from 'mobx-react'


@inject('Counter')
@observer
class Settings extends PureComponent{
    render() {
        return (
            <View>
                <Text>
                    Settings
                </Text>
            </View>
        )
    }
}

export default Settings

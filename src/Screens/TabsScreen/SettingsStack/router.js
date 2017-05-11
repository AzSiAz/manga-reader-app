import { StackNavigator } from 'react-navigation'

import Settings from './Settings'

export default Router = StackNavigator({
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings'
        }
    }
})
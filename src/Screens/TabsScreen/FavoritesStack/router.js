import { StackNavigator } from 'react-navigation'

import Favorites from './Favorites'

export default Router = StackNavigator({
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            title: 'Favorites'
        }
    }
})
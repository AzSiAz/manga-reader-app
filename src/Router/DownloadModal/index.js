import { StackNavigator } from 'react-navigation'

export default DownloadModal = StackNavigator(
    {
        SearchModal: {
            screen: '', //TODO,
            navigationOptions: {
                title: 'Downloads',
            },
        },
    },
    {
        navigationOptions: {
            cardStack: {
                gesturesEnabled: false,
            }
        },
    },
);

import { StackNavigator } from 'react-navigation'
import Tabs from './Tabs'
import SearchModal from './SearchModal'
// import DownloadModal from './DownloadModal'

export const Root = StackNavigator(
    {
        Tabs: {
            screen: Tabs,
        },
        SearchModal: {
            screen: SearchModal
        },
        // DownloadModal: {
        //     screen: DownloadModal
        // }
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

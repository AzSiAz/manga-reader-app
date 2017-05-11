import React from 'react';
import { Provider } from 'mobx-react'

import Application from './src'
import Store from './src/Store'

// export default class App extends PureComponent {
//     render() {
//         return (
//             <Provider {...Store}>
//                 <Application />
//             </Provider>
//         );
//     }
// }

export default App = () => {
    return (
        <Provider {...Store}>
            <Application />
        </Provider>
    );
}
import React from 'react'
import { View, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { white, black } from './utils/colors'
import reducer from './reducers'
import { Provider } from 'react-redux'



const store = createStore(reducer)

export default class App extends React.Component {
    
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={{ flex: 1 }}>
                    Hi! welcome.
                </View>
            </Provider>
        )
    }
}

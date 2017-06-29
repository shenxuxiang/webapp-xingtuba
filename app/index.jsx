import React from 'react'
import App from './app.jsx'
import { Provider } from 'react-redux'
import configStore  from './store/configStore'

const store = configStore()
export default
class Index extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

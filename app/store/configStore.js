import { createStore } from 'redux'
import initState from './state'
import reducers from '../reducers'

const configState = () => {
    const store = createStore(reducers, initState, window.devToolsExtension ? window.devToolsExtension() : undefined)
    return store
}
export default configState

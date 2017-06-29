import * as actionTypes from '../store/types.js'
import initState from '../store/state.js'

export const userInfo = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CITY:
            return Object.assign({}, state, action.data)
            break;
        case actionTypes.UPDATE_USERNAME:
            return Object.assign({}, state, action.data)
            break;
        default:
            return state
    }
}

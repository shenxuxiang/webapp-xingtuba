import * as actionTypes from './types.js'

export const updateCity = (data) => {
    return {
        type: actionTypes.UPDATE_CITY,
        data
    }
}
export const updateUserName = (data) => {
    return {
        type: actionTypes.UPDATE_USERNAME,
        data
    }
}

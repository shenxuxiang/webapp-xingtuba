import axios from 'axios'

let apiRemote = window.location.origin ? window.location.origin : window.location.protocol + '//' + window.location.host

let CancelToken = axios.CancelToken
let cancel = null
let axiosConfig = {
    baseURL: apiRemote,
    timeout: 10000
}

let sendRequest = (url, method, headers, sendData, isUpload) => {
    axiosConfig.url = url
    axiosConfig.headers = headers
    axiosConfig.method = (method || 'GET').toUpperCase()
    if (axiosConfig.method === 'POST') {
        axiosConfig.data = sendData || {}
    }
    if (isUpload) {
        axiosConfig.upLoadProgress = (progressEvent) => {}
        axiosConfig.downLoadProgress = (progressEvent) => {}
        axiosConfig.maxContentLength = 50000
    }
    axiosConfig.cancelToken = new CancelToken(function executor (c) {
        cancel = c
    })
    return new Promise((resolve, reject) => {
        axios.request(axiosConfig).then(resp => {
            if (resp.status === 200) {
                return resolve(resp.data)
            } else {
                return reject(resp)
            }
        }).catch(error => {
            console.log(error)
        })
    })
}
export default {
    getInfoList (data) {
        return sendRequest('/api/getlist', 'post', {
            "Content-Type": "application/json; charset=utf-8"
        }, data, true)
    },
    cancel () {
        cancel && cancel()
    }
}

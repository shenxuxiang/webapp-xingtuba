import './static/css/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Index from './index.jsx'
class Root extends React.Component {
    constructor () {
        super()
        this.state = {
            initDone: false,
            ori: ''
        }
        this.orientationChange = this.orientationChange.bind(this)
        this.getWindowWidth = this.getWindowWidth.bind(this)
    }
    componentWillMount () {
        if ('onorientationchange' in window) {
            this.setState({ori: 'orientationchange'})
        } else {
            this.setState({ori: 'resize'})
        }
        this.getWindowWidth()
    }
    componentDidMount () {
        this.setState({initDone: true})
        window.addEventListener(this.state.ori, this.orientationChange, false)
    }
    orientationChange (event) { // 横竖屏切换时的回调函数
        clearTimeout(this.interval)
        this.interval = setTimeout(() => {
            this.getWindowWidth()
        }, 300)
    }
    getWindowWidth () { // 获取屏幕的宽度
        let winWidth
        if (window.orientation === -90 || window.orientation === 90) {
            winWidth = document.documentElement.clientHeight
        } else if (window.orientation === 0) {
            winWidth = document.documentElement.clientWidth
        }
        document.documentElement.style.fontSize = '' + (winWidth / 10) + 'px'
    }
    componentWillUnmount () {
        window.removeEventListener(this.state.ori, this.orientationChange, false)
    }
    render () {
        return (
            <div>
                {
                    !this.state.initDone
                    ? '页面加载中...'
                    : <Index/>
                }
            </div>
        )
    }
}
ReactDOM.render (
    <Root/>,
    document.getElementById('main-container')
)

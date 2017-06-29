import './static/css/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Index from './index.jsx'
class Root extends React.Component {
    constructor () {
        super()
        this.state = {
            initDone: false
        }
    }
    componentDidMount () {
        this.setState({initDone: true})
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

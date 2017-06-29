import './style.scss'
import React from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'

export default
class NotMore extends React.Component {
    constructor () {
        super()
        this.state = {

        }
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render () {
        return (
            <div className="notmore">
                没有更多数据了。。。
            </div>
        )
    }
}


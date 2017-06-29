import './style.scss'
import React from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'
import { NavLink } from 'react-router-dom'
export default
class ImageLayout extends React.Component {
    constructor () {
        super()
        this.state = {
            isShow: false,
            isTouch: true
        }
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    imageLoaded (event) {
        this.setState({isShow: true})
    }
    render () {
        const { url, userName, userId, historyPush } = this.props
        return (
            <NavLink
                to={"/details/" + userId}
                className="imagelayout-component"
            >
                <div className="imglay-comp-image">
                    <img
                        alt="加载图片"
                        src={url}
                        className={this.state.isShow ? "" : "hide"}
                        onLoad={this.imageLoaded.bind(this)}
                    />
                </div>
                <p className="imglay-comp-info">
                    <span>{userName}</span>
                    <span>{userId}</span>
                </p>
            </NavLink>
        )
    }
}


import './style.scss'
import React from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'

export default
class Measurements extends React.Component {
    constructor () {
        super()
        this.state = {
            transparent: true
        }
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    focus (event) {
        window.scrollTo(0, event.target.offsetParent.parentNode.offsetTop - 150)
    }
    render () {
        const { title, type, value, propsToState } = this.props
        return (
            <div className="measure-component">
                <span className="mc-title">{title}<i>*</i></span>
                <div className="mc-content">
                    <input
                        type={type}
                        className="mcc-input"
                        data-type="xiongwei"
                        value={value.xiongwei}
                        onChange={propsToState}
                        onFocus={this.focus.bind(this)}
                    />
                    <span>/</span>
                    <input
                        type={type}
                        className="mcc-input"
                        data-type="yaowei"
                        value={value.yaowei}
                        onChange={propsToState}
                        onFocus={this.focus.bind(this)}
                    />
                    <span>/</span>
                    <input
                        type={type}
                        className="mcc-input"
                        data-type="tunwei"
                        value={value.tunwei}
                        onChange={propsToState}
                        onFocus={this.focus.bind(this)}

                    />

                </div>
            </div>
        )
    }
}


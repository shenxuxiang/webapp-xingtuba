import './style.scss'
import React from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'
export default
class Input extends React.Component {
    constructor () {
        super()
        this.state = {
            transparent: true
        }
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    focus (event) {
        this.setState({transparent: false})
        window.scrollTo(0, event.target.offsetParent.offsetTop - 150)
    }
    blur (event) {
        if (event.target.value === '') {
            this.setState({transparent: true})
        } else {
            this.setState({transparent: false})
        }
    }
    render () {
        const { title, placeHolder, type, value, propsToState } = this.props
        return (
            <div className="input-component">
                <span className="ic-title">{title}<i>*</i></span>
                <input
                    type={type}
                    className="ic-input"
                    value={value}
                    onChange={propsToState}
                    onFocus={this.focus.bind(this)}
                    onBlur={this.blur.bind(this)}
                    style={{background: this.state.transparent ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)'}}
                />
                <span className="ic-placeholder">{placeHolder}</span>
            </div>
        )
    }
}


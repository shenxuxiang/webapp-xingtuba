import './style.scss'
import React from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'

export default
class Textarea extends React.Component {
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
        const { value, propsToState } = this.props
        const style = {
            background: this.state.transparent ? 'rgba(255, 255, 255, 0)' : '#fff',
            resize: 'none'
        }
        return (
            <div className="userRecomment">
                <textarea
                    className="ur-content"
                    style={style}
                    maxLength='200'
                    onFocus={this.focus.bind(this)}
                    onBlur={this.blur.bind(this)}
                    onChange={propsToState}
                    value={value}
                >
                {value}
                </textarea>
                <span className="ur-placeholder">请在这里完成您的自我推荐...</span>
            </div>
        )
    }
}


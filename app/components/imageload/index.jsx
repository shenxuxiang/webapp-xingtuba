import './style.scss'
import React from 'react'
import LiLabel from './li-label.jsx'
import pureRenderMixin from 'react-addons-pure-render-mixin'
export default
class Textarea extends React.Component {
    constructor () {
        super()
        this.state = {
            disabledOne: false,
            disabledTwo: true,
            disabledThree: true
        }
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    changeCode (code, type) {
        switch (type) {
            case 'disabledOne':
                this.props.propsToState(code)
                this.setState({disabledTwo: false})
                break;
            case 'disabledTwo':
                this.setState({disabledThree: false})
                break;
            default:
                break;
        }
    }
    render () {
        return (
            <ul className="image-upload">
                <LiLabel
                    soundPropToState={this.changeCode.bind(this)}
                    disabled={this.state.disabledOne}
                    type= "disabledOne"
                />
                <LiLabel
                    soundPropToState={this.changeCode.bind(this)}
                    disabled={this.state.disabledTwo}
                    type="disabledTwo"
                />
                <LiLabel
                    soundPropToState={this.changeCode.bind(this)}
                    disabled={this.state.disabledThree}
                    type="disabledThree"
                />
            </ul>
        )
    }
}


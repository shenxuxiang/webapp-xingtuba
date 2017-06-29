import './style.scss'
import React from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'

export default
class Radio extends React.Component {
    constructor () {
        super ()
        this.satet = {

        }
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render () {
        const { value, list, name, title, propsToState } = this.props
        const ele = list.map((el, index) => (
            <label className="rc-radio-label" key={index}>
                <input
                    type="radio"
                    name={name}
                    value={el}
                    className="hide"
                    checked={el === value ? true : false}
                    onChange={propsToState}
                />
                <span className={el === value ? "active rc-radio-select" : "rc-radio-select"}></span>
                <span className="rc-radio-value">{el}</span>
            </label>
        ))
        return (
            <div className="radio-component">
                <span className="rc-title">{title}<i>*</i></span>
                <div className="rc-radio">
                    {ele}
                </div>
            </div>
        )
    }
}


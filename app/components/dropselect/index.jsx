import './style.scss'
import React from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'


class Ul extends React.Component {
    constructor () {
        super()
        this.state = {}
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render () {
        const { selectList, value } = this.props
        const ele = selectList.map((el, index) => (
                <li
                    key={index}
                    data-val={el}
                    className={el === value ? "ds-select-item active" : "ds-select-item"}
                >
                    {el}
                </li>
        ))
        return (
            <ul
                className="ds-select"
            >
                {ele}
            </ul>
        )
    }
}

export default
class DropSelect extends React.Component {
    constructor () {
        super()
        this.state = {
            showSelect: false,
            isTap: true
        }
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render () {
        const { value, selectList, title, zIndex, propsToState, isShow } = this.props
        return (
            <div className="drop-select" style={{'zIndex': zIndex}} ref="dropSelect">
                <span className="ds-title">{title}<i>*</i></span>
                <a href="javascript:;" className="ds-box">
                    <div
                        className={isShow ? "ds-showvalue active" : "ds-showvalue"}
                        onTouchStartCapture={() => {this.setState({isTap: true})}}
                        onTouchMoveCapture={() => {this.setState({isTap: false})}}
                        onTouchEnd={this.state.isTap && propsToState}
                        data-val={value}
                    >
                        {value}
                        <ReactCssTransitionGroup
                            component="div"
                            transitionName="fade"
                            transitionEnterTimeout={400}
                            transitionLeaveTimeout={400}
                        >
                            {isShow
                                ? <Ul
                                    selectList={selectList}
                                    value={value}
                                />
                                : null
                            }

                        </ReactCssTransitionGroup>

                    </div>
                </a>
            </div>
        )
    }
}


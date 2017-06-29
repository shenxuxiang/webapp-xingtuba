import './style.scss'
import React from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

export default
class Carousel extends React.Component {
    constructor () {
        super()
        this.state = {
            currentIdx: 0
        }
        this.calcIndex = this.calcIndex.bind(this)
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    calcIndex (index) {
        this.setState({currentIdx: index})
    }
    render() {
        const { auto, imageList, height } = this.props
        const options = { // 录播的参数设置
            continuous: true, // 是否循环
            auto: auto, // 录播的时间
            callback: this.calcIndex // 回调函数
        }
        const style = {
            height: height
        }
        const ele = imageList.map((el, index) => ( // 图片
            <div
                key={index}
                style={style}
                className="carousel-imageList"
            >
                <img src={el} alt="123"/>
            </div>
        ))
        const idxEle = imageList.map((el, index) => ( // 圆点提示
            <li
                key={index}
                className={index === this.state.currentIdx ? "carousel-idx-item active" : "carousel-idx-item"}
            ></li>
        ))
        return (
            <div className="carousel">
                <ReactSwipe
                    className="carousel"
                    swipeOptions={options}
                >
                    {ele}
                </ReactSwipe>
                <ul className="carousel-idx">
                    {idxEle}
                </ul>
            </div>
        )
    }
}


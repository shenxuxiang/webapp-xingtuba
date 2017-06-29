import './style.scss'
import React from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'
import Carousel from '../../components/carousel'
import utils from '../../common/utils'

export default
class Details extends React.Component {
    constructor () {
        super ()
        this.state = {
            imageList: [
                '/app/static/image/timg3.jpg',
                '/app/static/image/timg4.jpg',
                '/app/static/image/timg6.jpg'
            ],
            name: '沈旭祥'
        }
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    handle () {
        if (utils.toRegExp(this.state.name, 'chsName')) {
            console.log('ok')
        } else {
            console.log('err')
        }
        let dts = new Date()
        console.log(utils.mamagetor(dts))
    }
    render () {
        return (
            <div>
                <Carousel
                    auto={3000}
                    height="7rem"
                    imageList={this.state.imageList}
                />
                <h1
                    style={{textAlign: 'center'}}
                    onTouchEnd={this.handle.bind(this)}
                >这是details页面</h1>
                <h2 style={{textAlign: 'center'}}>用户id：{this.props.match.params.id}</h2>

            </div>
        )
    }
}

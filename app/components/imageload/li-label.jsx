import './style.scss'
import React from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'

export default
class LiLabel extends React.Component {
    constructor () {
        super()
        this.state = {
            imageCode: '', //图片上传后的返回码
            isLoading: false, //图片是否正在上传
            imageUrl: '' //返回的图片地址
        }
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    upLoadImage (event) {
        if (!event.target.value) {
            return
        }
        this.setState({isLoading: true})
        setTimeout(() => {
            this.setState({
                imageCode: '8888',
                isLoading: false,
                imageUrl: '/app/static/image/bg_img5@3x.png'
            })
            this.props.soundPropToState('8888', this.props.type)
        }, 3000)
    }
    render () {
        const { imageCode, isLoading, imageUrl, } = this.state
        const { type, disabled } = this.props
        return (
            <li className="image-upload-item">
                <img
                    src="/app/static/image/downloading.gif"
                    alt="图片加载"
                    className={isLoading ? "iui-show-progress" : "iui-show-progress hide"}
                />
                <label className="iui-show-label">
                    <input
                        type="file"
                        className="iui-upload-file"
                        accept="image/png, image/jpg, image/bmp, image/jpeg"
                        onChange={this.upLoadImage.bind(this)}
                        disabled={disabled}
                    />
                    <img
                        src={imageUrl}
                        alt="上传图片"
                        className={imageUrl ? "iui-show-image" : "iui-show-image hide"}
                    />
                    <span
                        className={imageUrl ? "iui-show-init hide" : "iui-show-init"}
                    >上传图片</span>
                </label>
            </li>
        )
    }
}


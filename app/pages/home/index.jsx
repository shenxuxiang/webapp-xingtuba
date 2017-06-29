import './style.scss'
import React from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'

import Input from '../../components/input'
import Radio from '../../components/radio'
import DropSelect from '../../components/dropselect'
import Measurements from '../../components/measurements'
import Textarea from '../../components/recomment'
import ImageLoad from '../../components/imageload'

export default
class Home extends React.Component {
    constructor () {
        super ()
        this.state = {
            userName: '',
            userNick: '',
            mobilePhone: '',
            userAge: '',
            userWeight: '',
            userHeight: '',
            sexArray: ['男', '女'],
            userSex: '男',
            userJob: '演员',
            jobArray: ['演员', '模特', '主播'],
            userBloodType: 'A型',
            bloodTypeArray: ['A型', 'AB型', 'B型', 'O型'],
            userBloodTypeShow: false, //血型这个下拉选项是否隐藏
            userConstellation: '白羊座',
            constellationArray: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天平座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
            userConstellationShow: false, //星座这个下拉选项是否隐藏
            measure: { //三围
                xiongwei: '',
                yaowei: '',
                tunwei: ''
            },
            recomment: '',//介绍 推荐
            imageCode: '',
            isIOS: false, //判断设备型号
            beforeEle: null,
            isTouch: true
        }
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    componentWillMount () {
        let userAgent = navigator.userAgent
        this.setState({isIOS: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}) //iOS终端
    }
    valueChangeInput (name, event) {//input radio 子组件事件触发传值
        const obj = {}
        obj[name] = event.target.value
        this.setState(obj)
    }
    measureChange (event) { // 三围 子组件事件触发传值
        const type = event.target.getAttribute('data-type')
        const value = event.target.value
        const obj = {}
        obj[type] = value
        const str = Object.assign({}, this.state.measure, obj)
        this.setState({measure: str})
    }
    valueChangeSelect (name, showType, event) {//下拉选项框 子组件事件触发传值
        const obj = {
            userBloodTypeShow: false,
            userConstellationShow: false
        }
        obj[name] = event.target.getAttribute('data-val')
        obj[showType] = !this.state[showType]
        this.setState(obj)
    }
    getImageCode (code) {
        console.log(code)
        this.setState({imageCode: code})
    }
    dropSelectToggleShow (name) {//下拉选项框显示和隐藏
        const obj = {
            userBloodTypeShow: false,
            userConstellationShow: false
        }
        this.setState(obj)
    }
    docFocus (event) { //所有元素失去焦点
        const nodeName = event.target.nodeName.toLowerCase()
        const className = event.target.className
        if (nodeName === 'input' || nodeName === 'textarea' || nodeName === 'select' || className === 'ds-showvalue' || className === 'ds-showvalue active') {
            if (this.state.beforeEle && this.state.beforeEle.className === 'ds-showvalue active') {//上一次对象是下拉选项框时全部隐藏
                this.setState({
                    userBloodTypeShow: false,
                    userConstellationShow: false
                })
            }
            this.setState({beforeEle: event.target})
            return
        }
        if (this.state.beforeEle) {
            if (this.state.beforeEle.className === 'ds-showvalue active' || this.state.beforeEle.className === 'ds-showvalue') {
                this.setState({
                    userBloodTypeShow: false,
                    userConstellationShow: false
                })
            } else if (
                this.state.beforeEle.nodeName.toLowerCase() === 'input' ||
                this.state.beforeEle.nodeName.toLowerCase() === 'textarea' ||
                this.state.beforeEle.nodeName.toLowerCase() === 'select'
            ) {
                this.state.beforeEle.blur()
            }
            this.setState({beforeEle: null})
        }
    }
    showAllData () {
        const dataObj = {
            'userName': this.state.userName,
            'userNick': this.state.userNick,
            'mobilePhone': this.state.mobilePhone,
            'userAge': this.state.userAge,
            'userWeight': this.state.userWeight,
            'userHeight': this.state.userHeight,
            'userSex': this.state.userSex,
            'userJob': this.state.userJob,
            'userBloodType': this.state.userBloodType,
            'userConstellation': this.state.userConstellation,
            'xiongwei': this.state.xiongwei,
            'yaowei': this.state.yaowei,
            'tunwei': this.state.tunwei,
            'recomment': this.state.recomment,
            'imageCode': this.state.imageCode,
        }
        console.log(dataObj)
    }
    render () {
        const { userName, userNick, mobilePhone, userAge, userWeight, userHeight, sexArray, userSex,
                jobArray, userJob, bloodTypeArray, userBloodType, userConstellation, constellationArray,
                userBloodTypeShow, userConstellationShow, measure, recomment, imageCode } = this.state
        return (
            <div
                className="input-info"
                onTouchStartCapture={() => {this.setState({isTouch: true})}}
                onTouchMoveCapture={() => {this.setState({isTouch: false})}}
                onTouchEndCapture={this.state.isTouch && this.docFocus.bind(this)}
            >
                <Input
                    title="姓名"
                    type="text"
                    placeHolder="请输入真实姓名(2-6)"
                    value={userName}
                    propsToState={this.valueChangeInput.bind(this, "userName")}
                />
                <Input
                    title="昵称"
                    type="text"
                    placeHolder="可以是数字字母汉字，4-10个字符以内"
                    value={userNick}
                    propsToState={this.valueChangeInput.bind(this, "userNick")}
                />
                <Radio
                    title="性别"
                    value={userSex}
                    list={sexArray}
                    name="sex"
                    propsToState={this.valueChangeInput.bind(this, "userSex")}
                />
                <Radio
                    title="职业"
                    value={userJob}
                    list={jobArray}
                    name="job"
                    propsToState={this.valueChangeInput.bind(this, "userJob")}
                />
                <Input
                    title="联系方式"
                    type="number"
                    placeHolder="请输入您的手机号码"
                    value={mobilePhone}
                    propsToState={this.valueChangeInput.bind(this, "mobilePhone")}
                />
                <Input
                    title="年龄"
                    type="number"
                    placeHolder="请输入您的手机号码"
                    value={userAge}
                    propsToState={this.valueChangeInput.bind(this, "userAge")}
                />
                <Input
                    title="体重"
                    type="number"
                    placeHolder="以(KG)为单位"
                    value={userWeight}
                    propsToState={this.valueChangeInput.bind(this, "userWeight")}
                />
                <Input
                    title="身高"
                    type="number"
                    placeHolder="以(CM)为单位"
                    value={userHeight}
                    propsToState={this.valueChangeInput.bind(this, "userHeight")}
                />
                <DropSelect
                    title="血型"
                    value={userBloodType}
                    selectList={bloodTypeArray}
                    zIndex="10"
                    isShow={userBloodTypeShow}
                    propsToState={this.valueChangeSelect.bind(this, 'userBloodType', 'userBloodTypeShow')}
                />
                <DropSelect
                    title="星座"
                    value={userConstellation}
                    selectList={constellationArray}
                    zIndex="9"
                    isShow={userConstellationShow}
                    propsToState={this.valueChangeSelect.bind(this, 'userConstellation', 'userConstellationShow')}
                />
                <Measurements
                    title="三围"
                    type="number"
                    value={measure}
                    propsToState={this.measureChange.bind(this)}
                />
                <Textarea
                    value={recomment}
                    propsToState={this.valueChangeInput.bind(this, 'recomment')}
                />
                <ImageLoad
                    propsToState={this.getImageCode.bind(this)}
                />
                <div
                    className="submit-btn"
                    onTouchStart={this.state.isTouch && this.showAllData.bind(this)}
                >
                    提交
                </div>
            </div>
        )
    }
}


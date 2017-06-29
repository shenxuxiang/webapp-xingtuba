import './style.scss'
import React from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'

export default
class LoadMore extends React.Component {
    constructor () {
        super()
        this.state = {
            isOkToEmit: false
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    componentDidMount () { // 监听scroll事件
        document.addEventListener('scroll', this.handleScroll, false)
    }
    componentWillUnmount() { // 撤销组件时取消监听
        document.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll (event) { // 定义scroll方法
        if(!this.refs.loadmore) {
            return
        }
        this.refs.loadmore.getBoundingClientRect().top <=
        document.documentElement.clientHeight + 80 && this.props.requestLoader()
    }
    render () {
        const typeList = (type) => {
            switch (type) {
                case 'loadMore':
                    return (
                        <div className="loadmore" ref="loadmore">
                            上拉加载更多。。。
                        </div>
                    )
                    break;
                case 'isLoading':
                    return (
                        <div className="isloading">
                            <span>努力加载中</span>
                            <img
                                src="/app/static/image/loading.gif"
                                alt="loading"
                            />
                        </div>
                    )
                    break;
                case 'notMore':
                    return (
                        <div className="notmore">
                            别拖拉！没有更多了。。。
                        </div>
                    )
                    break;
                default:
                    return null;
            }
        }
        return typeList(this.props.loadType)
    }
}


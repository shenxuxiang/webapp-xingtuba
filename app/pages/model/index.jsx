import './style.scss'
import React from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'
import ImageLayout from '../../components/imagelayout'
import LoadMore from '../../components/loadmore'

export default
class Model extends React.Component {
    constructor () {
        super ()
        this.state = {
            infoList: [
                {
                    url: "/app/static/image/timg1.jpg",
                    userName: "刘德华",
                    userId: "111111"
                }, {
                    url: "/app/static/image/timg2.jpg",
                    userName: "张国荣",
                    userId: "222222"
                }, {
                    url: "/app/static/image/timg3.jpg",
                    userName: "刘德华",
                    userId: "333333"
                }, {
                    url: "/app/static/image/timg4.jpg",
                    userName: "张国荣",
                    userId: "444444"
                }, {
                    url: "/app/static/image/timg5.jpg",
                    userName: "刘德华",
                    userId: "555555"
                }, {
                    url: "/app/static/image/timg6.jpg",
                    userName: "张国荣",
                    userId: "666666"
                }, {
                    url: "/app/static/image/timg7.jpg",
                    userName: "刘德华",
                    userId: "777777"
                }, {
                    url: "/app/static/image/timg1.jpg",
                    userName: "张国荣",
                    userId: "888888"
                }, {
                    url: "/app/static/image/timg2.jpg",
                    userName: "刘德华",
                    userId: "999999"
                }, {
                    url: "/app/static/image/timg3.jpg",
                    userName: "张国荣",
                    userId: "000000"
                }
            ],
            infoListOne: [
                {
                    url: "/app/static/image/timg1.jpg",
                    userName: "黎明",
                    userId: "123456"
                }, {
                    url: "/app/static/image/timg2.jpg",
                    userName: "成龙",
                    userId: "234567"
                }, {
                    url: "/app/static/image/timg3.jpg",
                    userName: "黎明",
                    userId: "345678"
                }, {
                    url: "/app/static/image/timg4.jpg",
                    userName: "成龙",
                    userId: "456789"
                }, {
                    url: "/app/static/image/timg5.jpg",
                    userName: "黎明",
                    userId: "789123"
                }, {
                    url: "/app/static/image/timg6.jpg",
                    userName: "成龙",
                    userId: "891234"
                }, {
                    url: "/app/static/image/timg7.jpg",
                    userName: "黎明",
                    userId: "912345"
                }, {
                    url: "/app/static/image/timg1.jpg",
                    userName: "成龙",
                    userId: "012345"
                }, {
                    url: "/app/static/image/timg2.jpg",
                    userName: "黎明",
                    userId: "987654"
                }, {
                    url: "/app/static/image/timg3.jpg",
                    userName: "成龙",
                    userId: "876543"
                }
            ],
            arr: [
                {url: "/app/static/image/timg3.jpg",userName: "成龙"}
            ],
            maxPage: 3, //最多几页
            currentPage: 1, //当前页是第一页
            currentStatus: 'loadMore' //当前所处状态 loadMore加载更多...    isLoading 正在加载    notMore 没有更多数据
        }
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    componentWillUnmount () {
        clearInterval(this.times)
    }
    requestNextPage () {
        if (this.state.currentPage === this.state.maxPage) {
            this.setState({
                currentStatus: 'notMore'
            })
            return
        }
        this.setState({
            currentStatus: 'isLoading'
        })
        this.times = setTimeout(() => {
            this.setState({
                infoList: this.state.infoList.concat(this.state.infoListOne),
                currentPage: this.state.currentPage + 1,
                currentStatus: 'loadMore'
            })
        }, 2000)
    }
    render () {
        const infolists = this.state.infoList.map((el, index) => (
            <li
                className="info-list-cb-item"
                key={index}
            >
                <ImageLayout
                    url={el.url}
                    userName={el.userName}
                    userId={el.userId}
                />
            </li>
        ))
        return (
            <div className="info-list-content">
                <ul className="info-list-content-box">
                    {infolists}
                </ul>
                <LoadMore
                    requestLoader={this.requestNextPage.bind(this)}
                    loadType={this.state.currentStatus}
                />
            </div>
        )
    }
}

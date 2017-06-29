import './style.scss'
import React from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import pureRenderMixin from 'react-addons-pure-render-mixin'

import Model from '../model'
import Actor from '../actor'
import Anchor from '../anchor'

export default
class InfoList extends React.Component {
    constructor () {
        super ()
        this.state = {

        }
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render () {
        return (
            <div className="info-list">
                <ul className="info-list-head">
                    <li className="ilh-item">
                        <NavLink to="/infolist/actor" className="ilh-item-link" activeClassName="active">演员</NavLink>
                    </li>
                    <li className="ilh-item">
                        <NavLink to="/infolist/model" className="ilh-item-link" activeClassName="active">模特</NavLink>
                    </li>
                    <li className="ilh-item">
                        <NavLink to="/infolist/anchor" className="ilh-item-link" activeClassName="active">主播</NavLink>
                    </li>
                </ul>
                <Route path={this.props.match.url + '/model'} component={Model}/>
                <Route path={this.props.match.url + '/actor'} component={Actor}/>
                <Route path={this.props.match.url + '/anchor'} component={Anchor}/>
                <Switch>
                    <Redirect exact from={this.props.match.url} to={this.props.match.url + '/model'}/>
                </Switch>
            </div>
        )
    }
}

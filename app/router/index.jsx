import React from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'

import Home from '../pages/home'
import InfoList from '../pages/infolist'
import Details from '../pages/details'

export default
class RouterMap extends React.Component {
    render () {
        return (
            <div>
                <Route path="/home" component={Home}/>
                <Route path="/infolist" component={InfoList}/>
                <Route path="/details/:id" component={Details}/>
                <Switch>
                    <Redirect exact from="/" to="/home"/>
                </Switch>
            </div>
        )
    }
}

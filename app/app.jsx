import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import * as actions from './store/actions.js'
import RouterMap from './router'

class App extends React.Component {
    render () {
        return (
            <Router>
                <RouterMap/>
            </Router>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}
const mapDipatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect (
    mapStateToProps,
    mapDipatchToProps
)(App)

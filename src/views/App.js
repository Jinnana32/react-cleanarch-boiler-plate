import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Presenter from './AppPresenter'

import ConnectView from '../utils/ConnectView'
import BaseMVPView from './common/base/BaseMVPView'

// Views
import PublicView from './public/PublicView'
import AdminNavigationView from './admin/AdminNavigationView';
import AgentNavigationView from './agent/AgentNavigationView';
import LoginView from './login/LoginView';

class App extends BaseMVPView {

  constructor (props) {
    super(props)

    this.state = {
      isLogin: false,
      role: "",
    }

  }

  componentDidMount(){

  }

  componentWillReceiveProps (nextProps) {
    this.presenter.checkLogin()
  }

  componentWillMount () {
    this.presenter.checkLogin()
  }

  isLogin (isLogin, role) {
    this.setState({ isLogin: isLogin, role: role })
  }

  redirectLogin(){
    this.props.history.push('/phr/cpanel')
    window.location.reload()
  }

  render () {
    return (
      <div>
        <Switch>
          <Route path = "/" render = {props => {
              return <h1>Hello world</h1>
          }}/>
        </Switch>
      </div>
    )

  }

}

export default withRouter(ConnectView(App, Presenter))

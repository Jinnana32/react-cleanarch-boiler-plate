import React, { Component } from 'react'

import Presenter from 'defaultPresenter.js'
import BaseMVPView from '../common/base/BaseMVPView'
import ConnectView from '../../utils/ConnectView'

import store from '../../store'
import { NotifyActions } from '../../actions'

import { connect } from 'react-redux'

class defaultView extends BaseMVPView {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
    store.dispatch(NotifyActions.resetNotify())
  }

  render () {

    return (
      <div>
        { super.render() }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notify : state.notify.notify,
})

export default ConnectView(connect(mapStateToProps)(defaultView), Presenter)

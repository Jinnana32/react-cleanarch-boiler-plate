import React, { Component } from 'react'

import {
  Modal,
  CircularLoader
} from '../../ub-components'


import PropTypes from 'prop-types'

class LoaderModal extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      text,
    } = this.props
    return (
      <Modal
        isDismisable = { false }
      >
        <center>
          <h3>{ text }</h3>
          <br/>
          <br/>
            <CircularLoader show = { true } />
          <br/>
          <br/>
        </center>
      </Modal>
    )
  }
}

LoaderModal.propTypes = {
  text : PropTypes.string,
}

export default LoaderModal

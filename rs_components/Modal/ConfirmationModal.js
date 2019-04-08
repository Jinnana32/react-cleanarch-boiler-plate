import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { Modal, GenericButton } from '../../ub-components'

import './styles/modal.css'

class ConfirmationModal extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      onYes,
      text,
      onClose
    } = this.props
    return (
      <Modal
        isDismisable = { true }
        onClose = { onClose }
      >
        <center>
          <h3>{ text }</h3>
        </center>
        <br/>
        <div className = { 'confirmation-function' }>
          <GenericButton
            text = { 'No' }
            onClick = { () => onClose() }
          />
          <GenericButton
            text = { 'Yes' }
            onClick = { () => onYes() }
          />
        </div>
      </Modal>
    )
  }
}

ConfirmationModal.propTypes = {
  onYes : PropTypes.func,
  onClose : PropTypes.func,
  text : PropTypes.string,
}

export default ConfirmationModal

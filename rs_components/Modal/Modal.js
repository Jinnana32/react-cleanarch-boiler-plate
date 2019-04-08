import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/modal.css'

class Modal extends Component {
  constructor (props) {
    super(props)

    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  componentDidMount () {
    window.addEventListener('keyup', this.handleKeyUp, false)
    document.addEventListener('click', this.handleOutsideClick, false)
  }

  componentWillUnmount () {
    window.removeEventListener('keyup', this.handleKeyUp, false)
    document.removeEventListener('click', this.handleOutsideClick, false)
  }

  /**
  * allow escape button
  */
  handleKeyUp (e) {
    const { onClose, isDismisable } = this.props
    if (isDismisable) {
      const keys = {
        27: () => {
          e.preventDefault()
          onClose()
          window.removeEventListener('keyup', this.handleKeyUp, false)
        },
      }
      if (keys[e.keyCode]) keys[e.keyCode]()
    }
  }

  handleOutsideClick (e) {
    const { onClose, isDismisable } = this.props
    if (isDismisable) {
      if (e.target === this.modalOverlay) {
        onClose()
        document.removeEventListener('click', this.handleOutsideClick, false)
      }
    }
  }

  render () {
    const {
      onClose,
      children,
      fullHeight,
      width,
      isDismisable,
      boxShadow,
      backgroundColor,
      overflowY,
      borderRadius
    } = this.props

    const modalClass = `modal${  fullHeight ? ' full-height' : ''}`

    return (
      <div className={ 'modal-overlay' }
        ref={ node => (this.modalOverlay = node) }>
        <div
          style={{
            width: `${width}%`,
            boxShadow: `${ boxShadow }`,
            backgroundColor: `${ backgroundColor }`,
            overflowY: `${ overflowY }`,
            borderRadius: `${ borderRadius }`
          }}
          className={ modalClass }
          ref={ node => (this.modal = node) }>
          {
            isDismisable &&
            <img
              src={ require('./images/x-circle.png') }
              className={ 'close-button' }
              onClick={ onClose }
            />
          }
          <div className={ 'modal-content' }>
            { children }
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  fullHeight: PropTypes.bool,
  onClose: PropTypes.func,
  width: PropTypes.number,
  isDismisable: PropTypes.bool,
  boxShadow: PropTypes.string,
  backgroundColor: PropTypes.string,
  overflowY: PropTypes.string,
  borderRadius: PropTypes.string,
}

Modal.defaultProps = {
  fullHeight: false,
  isDismisable: false,
  width: 40,
}

export default Modal

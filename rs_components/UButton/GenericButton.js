import React , { Component } from 'react'

import './styles/button.css'

class GenericButton extends Component {
  render () {
    const {
      text,
      onClick,
      type,
      disabled,
      className,
    } = this.props

    return (
      <button
        className = { `_generic-button ${className}` }
        onClick = { onClick }
        disabled = {disabled}
        type = { type }
      >{ text }</button>
    )
  }
}

export default GenericButton

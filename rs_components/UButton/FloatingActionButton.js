import React , { Component } from 'react'

import './styles/button.css'
import Image from '../../images/drawer/mytravel.png'

class FloatingActionButton extends Component {
  render () {
    const { text, className, image, onClick } = this.props

    return (
      <button
        className = { `_btn-fab ${className}` }
        onClick = {onClick}
      >
      {text && text}
      {image && <img src={Image} width = { '60%' } height = { '60%' }/>}
      </button>

    )
  }
}

export default FloatingActionButton

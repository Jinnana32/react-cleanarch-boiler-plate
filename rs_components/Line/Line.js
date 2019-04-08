import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/line.css'

class Line extends Component {

  render () {

    const { color, className } = this.props

    return (
      <div style={{ backgroundColor: color}}
        className={ `line ${className}` } />
    )
  }
}

Line.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
}

Line.defaultProps = {
  color: '#DEDEDE',
  className: '',
}

export default Line

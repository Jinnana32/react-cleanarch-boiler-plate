import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/appbar.css'

class AppBar extends Component {
  constructor (props) {
      super(props)
  }

  render () {
    const { children, className } = this.props

    return (
      <div className={ `header ${className}` }>
        { children }
      </div>
    )
  }
}

AppBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

AppBar.defaultProps = {
}

export default AppBar

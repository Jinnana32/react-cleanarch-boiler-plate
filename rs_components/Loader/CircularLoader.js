import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/style.css'

class CircularLoader extends Component {
  render () {
    const { show } = this.props

    return (
      <div>
        {
          show &&
          <div className = { 'circular-loader' } >
            <span className = {'span-text'}></span>
          </div>
        }
      </div>
    )
  }
}

CircularLoader.propTypes = {
  width : PropTypes.number,
  show : PropTypes.bool,
}

CircularLoader.defaultProps = {
  width : 0,
  show : false,
}
export default CircularLoader

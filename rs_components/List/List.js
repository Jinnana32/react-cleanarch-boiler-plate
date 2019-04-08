import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/list.css'
class List extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { title, description } = this.props

    return (
      <ul>
      <li className="waves-effect">
        <div className="valign-wrapper">
          <div className="title">
            <h4>{description}</h4>
            <span>{ title }</span>
          </div>
        </div>
      </li>
      </ul>

    )
  }
}

List.propTypes = {
  title : PropTypes.string,
  description : PropTypes.string,
}

export default List

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/presentationCardStyle.css'

import Card from '../Card/Card'
import GenericButton from '../UButton/GenericButton'

import moment from 'moment'

class PresentationCard extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      onClick,
      className,
      title,
      startTime,
      endTime,
      startDate,
      endDate,
      venue,
    } = this.props

    return (
      <Card className = { 'mytrainings-card-list' }>
        <div className = { 'mytrainings-card-background' }>
        </div>
        <div className = { 'mytrainings-card-description' }>
          <div className = { 'mytrainings-title' }>
            <h4>{ title }</h4>
          </div>
          <div className = { 'mytrainings-venue' }>
            <div></div>
            <div className = {'location-icon'}></div>
            <h5>{ venue }</h5>
          </div>
          <br/>
          <div className = { 'mytrainings-view-details' }>
            <GenericButton
              className = { 'mytrainings-button' }
              text = { 'View Details' }
              onClick = { onClick }
            />
          </div>
        </div>
        <div className = { 'mytrainings-datetime' }>
          <p>{ moment(startDate).format('LL') } - { moment(endDate).format('LL') }</p>
          <p>{ startTime } - { endTime }</p>
        </div>
      </Card>
    )
  }
}

PresentationCard.propTypes = {
  onClick : PropTypes.func,
  className : PropTypes.string,
  title : PropTypes.string,
  startTime : PropTypes.string,
  endTime : PropTypes.string,
  startDate : PropTypes.string,
  endDate : PropTypes.string,
  venue : PropTypes.string,
}

PresentationCard.defaultProps = {
  children : null,
  className : 'card',
  title : 'Presentation Card',
  startTime : 'Start Time',
  endTime : 'End Time',
  startDate : 'Start Date',
  endDate : 'End Date',
  venue : 'Venue',
}

export default PresentationCard

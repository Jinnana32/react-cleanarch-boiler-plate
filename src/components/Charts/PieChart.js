import React, { Component } from 'react'

import {
  Pie
} from 'react-chartjs-2'

import PropTypes from 'prop-types'

class PieChart extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      data
    } = this.props

    return (
      <Pie
        ref = 'chart'
        data = { data }
        responsive = { true }
        legend = {{
          display: true,
          position: "bottom",
          reverse: false
        }}
      />
    )
  }
}

PieChart.propTypes = {
  data : PropTypes.objectOf(
    PropTypes.shape({
      datasets: PropTypes.objectOf(
        PropTypes.arrayOf(
          PropTypes.shape({
            data: PropTypes.array.isRequired,
            backgroundColor: PropTypes.array.isRequired
          })
        ).isRequired
      ).isRequired,
      labels: PropTypes.array.isRequired
    })
  )
}

export default PieChart

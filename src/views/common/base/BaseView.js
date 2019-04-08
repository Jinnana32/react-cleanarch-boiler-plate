import React, { Component } from 'react'

class BaseView extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isLoading : false
    }
    this.showLoading = this.showLoading.bind(this)
    this.hideLoading = this.hideLoading.bind(this)
  }

  showLoading (message) {
    this.setState({ isLoading : true })
  }

  hideLoading () {
    this.setState({ isLoading : false })
  }

  render () {
    const { isLoading } = this.state
    
    return (
      <div>
        { isLoading && 'loading' }
      </div>
    )
  }
}

export default BaseView

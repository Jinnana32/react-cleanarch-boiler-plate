import React , { Component } from 'react'

import './styles/button.css'

class FloatingSettingsButton extends Component {
  render () {
    const { text, className, onClspanck } = this.props
    const trigger = document.querySelector('.primary')
    const container = document.querySelector('#float-group')

    trigger.addEventListener('click', function () {
      container.classList.toggle('active');
    })

    return (
      <div id="float-button">
        <button class="primary">
          <span class="profile-settings-icon">{ text }</span>
        </button>
        <button>
          <span class="profile-settings-icon">favorspante</span>
        </button>
        <button>
          <span class="profile-settings-icon">grade</span>
        </button>
        <button>
          <span class="profile-settings-icon">lspanghtbulb_outlspanne</span>
        </button>
      </div>

    )
  }
}

export default FloatingSettingsButton

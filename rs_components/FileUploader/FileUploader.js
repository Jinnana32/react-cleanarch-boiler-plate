import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GenericTextBox } from '../'

import './styles/styles.css'

class FileUploader extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { onChange, value, placeholder, base64, disabled  } = this.props

    return (
      <div className = {'file-container'}>
        <div className ="file-group">
          <input
            type = { 'file' }
            className = { 'file' }
            onChange = { onChange }
            required
          />
          <span className = { 'file-text' }> { value } </span>
          <span className = { 'file-label' }>{ placeholder }</span>
          <span className ={ 'bar' }></span>
        </div>
        <div>
          <br/>
          <div className={ 'multiple-file-attachment-form' }>
          {
            disabled ?
            <div></div> :
            base64 &&
            <img
              src={ require('./images/x-circle.png') }
              className={ 'close-button' }
              onClick={
                () => {}
              }
            />
          }
          {
            base64 &&
            <div
              style={ {
                backgroundImage: `url('${ base64}')`,
                width: 'auto',
                height: '60px',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              } }
            >
              <h6
                className={ 'multiple-fileuploader-name' }>
                {
                  value
                }
              </h6>
            </div>
          }
        </div>
      </div>
      </div>
    )
  }
}

FileUploader.propTypes = {
  value : PropTypes.string,
  value : PropTypes.string,
  onChange : PropTypes.func,
  placeholder : PropTypes.string,
  disabled  : PropTypes.bool,
}

FileUploader.defaultProps = {
}

export default FileUploader

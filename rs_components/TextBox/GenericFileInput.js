import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/input.css'

class GenericFileInput extends Component {

  constructor (props) {
    super(props)

    this.state = {
      message: '',
    }

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange (e) {
    let files = e.target.files
    let value = e.target.value
    let message

    if( files && files.length > 1 ) {
     message = `${files.length} files selected`
    } else {
     message = value.split( '\\' ).pop()
    }

    this.setState({ message })

    this.props.onChange(e)
  }

  render () {
    const { message } = this.state
    const {
      keyId,
      text,
      style,
      hint,
      value,
      disabled,
      errorMessage,
      onChange,
      isMessage
    } = this.props

    return (
      <div style={ style } className='input-wrapper'>
        <span className='input-text' dangerouslySetInnerHTML={{ __html: text }}></span>
        <div className='file-input-wrapper'>
          <input
            value={ !!isMessage ? isMessage.name : '' }
            className='input file-input-overlay'
            placeholder={ hint }
            disabled />
          <input
            id = { '#file-upload-'+keyId }
            type='file'
            onChange={ this.handleOnChange }
            value={ value }
            className='file-input'
            placeholder={ hint }
            disabled={ disabled } />
          { errorMessage && <span className='error-message'>{ errorMessage }</span> }
        </div>
      </div>
    )
  }
}

GenericFileInput.propTypes = {
  onChange: PropTypes.func,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  hint: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  keyId: PropTypes.number
}

GenericFileInput.defaultProps = {
  onChange: e => {},
  hint: 'Select File',
}

export default GenericFileInput

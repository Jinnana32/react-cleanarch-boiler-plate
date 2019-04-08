import React, { Component } from 'react'
import GenericFileInput from '../TextBox/GenericFileInput'
import PropTypes from 'prop-types'

class MultipleAttachments extends Component {
  constructor (props) {
    super(props)
  }

  fileChecker (file) {
  }

  isValid (attachment) {
    let file = attachment && attachment.split('/')
    file = file[file.length - 1]
    let isValid
    switch (file) {
      case 'jpg' :
        isValid = true
      case 'png' :
        isValid = true
      case 'jpeg' :
        isValid = true
      case 'pdf' :
        isValid = true
    }
    return isValid ? false : true
  }

  render () {
    const {
      fileArray,
      placeholder,
      setFile,
      disabled,
      errorMessage,
      countFunc,
      count
    } = this.props

    return (
      <div>
        <center>
          <h4 className = { 'multiple-font-weight-bolder' }>{ placeholder }</h4>
          <br/>
        </center>
        {
          fileArray.length !== 0 &&
          fileArray.map((attachment, key) => (
            <div
              key = {key}>
              <div>
                <h2 className = { 'multiple-attachment-name' }>{ attachment.name }</h2>
                <div
                  className = { 'multiple-attachments-grid-option' }>
                  <div>
                    <GenericFileInput
                      onChange = { (e) => {
                          const updatedAttachment = [...fileArray]
                          const reader = new FileReader()
                          const file = e.target.files[0]
                          reader.onloadend=() => {
                            updatedAttachment[key].base64 = reader.result
                            updatedAttachment[key].file = file
                            setFile(updatedAttachment)
                          }
                          reader.readAsDataURL(file)
                        }
                      }
                      isMessage = { fileArray[key].file }
                      disabled = { disabled }
                      hint = { attachment.name }
                      errorMessage = {
                        attachment &&
                        attachment.file &&
                        this.isValid(attachment.file.type)
                         ? 'Invalid File / Attach here the required files (e.g jpg, pdf, png, jpeg)' :
                         errorMessage
                       }
                    />
                  </div>
                  {
                    fileArray.length >1 &&
                    <div>
                    {
                      !disabled &&
                      <img
                        className = { 'close-button-global' }
                        src = { require('./images/x-circle.png') }
                        onClick = { () => {
                          fileArray.splice(key, 1)
                          let newCount = parseInt(count) - 1
                          countFunc(newCount)
                          setFile(fileArray)
                        }}
                      />
                    }
                    </div>
                  }
                </div>
                <br/>
                <div>
                  <div>
                  {
                    attachment.base64 &&
                    <div
                      style={ {
                        backgroundImage: `url('${attachment.base64 && attachment.base64}')`,
                        width: 'auto',
                        height: '60px',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                      } }
                    >
                      <h6
                        className={ 'multiple-fileuploader-name' }>
                        {
                          attachment &&
                          attachment.file &&
                          this.isValid(attachment.file.type) ?
                               '' : attachment.file.name }
                      </h6>
                    </div>
                  }
                  <br/>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
    )
  }
}

MultipleAttachments.propTypes = {
  fileArray : PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.shape({
          name : PropTypes.string,
          file : PropTypes.object,
          base64 : PropTypes.blob,
        })
      )
  ),
  placeholder : PropTypes.string,
  errorMessage : PropTypes.string,
  onResponse : PropTypes.func,
  setFile : PropTypes.func,
  disabled : PropTypes.bool,
}

MultipleAttachments.defaultProps = {
  fileArray : [],
  placeholder : 'File Attachments',
}

export default MultipleAttachments

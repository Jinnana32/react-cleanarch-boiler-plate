import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { Modal, GenericButton } from '../../ub-components'

import './styles/modal.css'

class MultipleInputModal extends Component {
  constructor (props) {
    super(props)
  }

  selectedArray (selected) {
    const {
      onClose,
      onSelect,
      inputArray,
      procedureArray
    }=this.props

    this.props.onClose()

    if (procedureArray) {
      const valueArr=inputArray.map(item => item.id)
      if (valueArr.includes(selected.id)) {
        let isExisting
        const valueInsideArr=procedureArray.map(item => item.id)
        for (const i in procedureArray) {
          if (valueInsideArr.includes(selected.id)) {
            isExisting=true
          } else {
            isExisting=false
          }
        }
        if (!isExisting) {
          onSelect({ ...selected })
        }
      } else {
        onSelect({ ...selected })
      }
    } else {
      onSelect({ ...selected })
    }
  }

  render () {
    const {
      inputArray,
      onClose,
      label,
      className,
      selectedArray,
      onSelect
    } = this.props

    return (
      <Modal
        isDismisable = { true }
        onClose = { onClose }
      >
        <center>
          <h3>{ label }</h3>
        </center>
          <br/>
        {
          inputArray.length !== 0 &&
          inputArray.map((inputs, key) => (
            <GenericButton
              className = { 'single-input-modal-button' }
              key = { key }
              onClick = { () => this.selectedArray({ ...inputs }) }
              text = { inputs.name }
            />
          ))
        }
      </Modal>
    )
  }
}

MultipleInputModal.propTypes = {
  label : PropTypes.string,
  onClose : PropTypes.func,
  selectedArray : PropTypes.func,
  inputArray : PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        name : PropTypes.string,
        id : PropTypes.number
      })
    )
  ),
}

MultipleInputModal.defaultProps = {
  label : 'Multiple Input Modal',
  inputArray : [],
}

export default MultipleInputModal

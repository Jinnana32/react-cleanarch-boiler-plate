import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Select from 'react-select'
import './css/select.css'

class GenericSelect extends Component {
  render () {
    const {
      placeholder,
      options,
      value,
      defaultValue,
      onChange,
      title,
      disabled,
      errorMessage,
      multi,
      searchable,
      clearable,
      backspaceRemovesValueboolean,
      clearValue,
      onValueClick,
      resetValue,
    } = this.props

    return (
      <div className='select-wrapper'>
        {
          title &&
          <span className='select-title'>{ title }</span>
        }
        <Select
          disabled = { disabled }
          onChange = { onChange }
          value = { value }
          placeholder = { placeholder }
          options = { options }
          clearable = { clearable }
          onValueClick = { onValueClick }
          searchable = { searchable }
          multi = { multi }
          resetValue = { resetValue }
          backspaceRemoves = { backspaceRemovesValueboolean }
          defaultValue = { defaultValue }
          noResultsText='No options available ...'
        />
        { errorMessage && <span className='error-message'>{ errorMessage }</span> }
      </div>
    )
  }
}

GenericSelect.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  placeholder: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  multi: PropTypes.bool,
  searchable: PropTypes.bool,
  clearable: PropTypes.bool,
  clearValue: PropTypes.func,
  resetValue: PropTypes.func,
  onValueClick: PropTypes.func,
  backspaceRemovesValueboolean: PropTypes.bool,
  errorMessage: PropTypes.string,
}

GenericSelect.defaultProps = {
  title: '',
  placeholder: '',
  options: [],
  onChange: () => {}
}

export default GenericSelect

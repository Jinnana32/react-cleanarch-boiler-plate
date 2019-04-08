import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TimePicker  from 'react-times'

import './css/datepicker.css'
import 'react-times/css/material/default.css'
class TimePickerComponent extends Component {

 render() {
   const {
     time,
     text,
     errorMessage,
     disabled,
     readOnly,
     timeMode,
     showTimezone,
     timeFormat,
     onTimeChange,
     meridiem
   } = this.props

   return (
     <div className='datepicker-container'>
       <span className='datepicker-text'>{ text }</span>
       <TimePicker
         text = { text }
         format = { timeFormat }
         timeMode = { timeMode }
         meridiem = { meridiem }
         time = { time }
         onTimeChange = { onTimeChange }
         disabled = { disabled }
       />
       <div className = { 'date-grid-wrapper' }>
         <div></div>
         {
           errorMessage ?
           <span className = { 'error-message' }>
             { errorMessage }
           </span>
           :
           <span className = { 'error-message-null' }></span>
         }
       </div>
     </div>
   )
 }
}

TimePickerComponent.propTypes = {
 selected: PropTypes.object,
 onTimeChange: PropTypes.func,
 text: PropTypes.oneOfType([
   PropTypes.string,
   PropTypes.object,
 ]),
 errorMessage: PropTypes.string,
 timeMode: PropTypes.string,
 disabled : PropTypes.bool,
}

export default TimePickerComponent

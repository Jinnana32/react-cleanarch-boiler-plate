import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/GenericQuestionaire.css'
import {
  GenericInput,
} from '../../components'

const alphabet = [
	'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
]

class GenericQuestionaire extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		const {
			className,
			onUpdate,
			onDelete,
			questionNumber,
			questionText,
			answers,
		} = this.props
		
		const list = answers && answers.map((data,key) => {
			return (
				<li key = { key } >
				{ 
					data.isCorrect === true ?
					<button className = "buttonChoices correctAnswer" >
						<span className = 'justify'>
							{`${alphabet[key]} - ${data.answer}`}
						</span>
					</button>
					:
					<button className = "buttonChoices wrongAnswer">
						{`${alphabet[key]} - ${data.answer}`}
					</button>
				}
				</li>	
			)
		})

		return (
			<div className = "card">
			    <div className= "container">
			      <div className = "question">
			          <h4>{`${questionText}`}</h4>
			          <span>
			            <button className="btn" onClick = {onUpdate} >
							<i><img src = { require('./images/ic_mode_edit_grey_500_18dp.png') }/></i>
						</button>
						<button className="btn" onClick = {onDelete} >
							<i><img src = { require('./images/trash-can-24.png') } /></i>
						</button>
			         </span>
			      </div>
			          <ul>
				          {
				          	list
				          }
			          </ul>
			     
			    </div>
			</div>
	)
	}
}

export default GenericQuestionaire
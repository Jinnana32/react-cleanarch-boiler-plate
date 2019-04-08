import React, { Component } from 'react'
import Card  from '../Card/Card'
import PropTypes from 'prop-types'

class GenericMultipleCard extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      cardDataHolder,
      setCard,
      disabled,
      errorMessage,
      count
    } = this.props

    return (
      <div>
        {
          cardDataHolder.length !== 0 &&
          cardDataHolder.map((attachment, key) => (
            <div>
              <Card
                className = { 'multiple-card-grid-option' }
                key = {key}>
                <div>
                  {
                    attachment && attachment.imageKey.map((resp, key) =>
                    <div
                      key = { key }
                      style={ {
                        backgroundImage: `url('${resp.base64 && resp.base64}')`,
                        width: 'auto',
                        height: '60px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      } }
                    >
                    </div>
                    )
                  }
                </div>
                <div>
                  <h2>{ attachment.propertyName }</h2>
                </div>
                <div>
                  {
                    !disabled &&
                    <img
                      className = { 'close-button-global' }
                      src = { require('./images/ic_mode_edit_grey_500_18dp.png') }
                      onClick = { () => {
                        
                      }}
                    />
                  }
                  {
                    !disabled &&
                    <img
                      className = { 'close-button-global' }
                      src = { require('./images/x-circle.png') }
                      onClick = { () => {
                        cardDataHolder.splice(key, 1)
                        setCard(cardDataHolder)
                      }}
                    />
                  }
                </div>
              </Card>
              <br/>
            </div>
          ))
        }
      </div>
    )
  }
}

GenericMultipleCard.propTypes = {
  cardDataHolder : PropTypes.arrayOf(
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
  setCard : PropTypes.func,
  disabled : PropTypes.bool,
}

GenericMultipleCard.defaultProps = {
  cardDataHolder : [],
  placeholder : 'File Attachments',
}

export default GenericMultipleCard

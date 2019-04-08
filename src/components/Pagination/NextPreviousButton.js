import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import NavigateNext from '@material-ui/icons/NavigateNext'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import {
  IconButton,
  Typography,
  Grid
} from '@material-ui/core'

const styles = theme => ({
  padding : {
    paddingTop: 12,
  }
})

class NextPreviousButton extends Component {
	constructor (props) {
    	super(props)
  	}

  	render () {
  		const {
        styles,
        theme,
        classes,
        pageNumber,
        onPreviousPage,
        onNextPage,
        dataLength
  		} = this.props
  		return (
  			<div>
          <Grid container spacing = { 8 }>
             <Grid item>
             {
               pageNumber && pageNumber > 1 ?
                <IconButton onClick = { () => onPreviousPage() } > 
                  <NavigateBefore size = 'large' color = 'primary' />
                </IconButton>
                :
                <div></div>
             }
            </Grid>
            <Grid item>
              <Typography className = { classes.padding } >{pageNumber}</Typography>
            </Grid>
            <Grid item>
              { 
                dataLength && dataLength > 0 ?
                <IconButton onClick = { () => onNextPage() } > 
                  <NavigateNext size = 'large' color = 'primary' />
                </IconButton>
                :
                <div></div>
              }
            </Grid>
          </Grid> 				
  			</div>
  		)
  	}

}

export default withStyles(styles)(NextPreviousButton)
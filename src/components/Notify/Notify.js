import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  IconButton,
  Snackbar,
  SnackbarContent,
  Button
} from '@material-ui/core'

import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import WarningIcon from '@material-ui/icons/Warning'

import {
  green,
  amber
} from '@material-ui/core/colors'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  notifyPosition: {
    zIndex: 9999,
    position: 'relative'
  }
})


class Notify extends Component {
  constructor (props) {
    super (props)
  }

  renderNotify (param, classes) {
    switch (param) {
      case 'success':
        return <CheckCircleIcon className = { classes }/>
        break
      case 'error':
        return <ErrorIcon className = { classes }/>
        break
      case 'warning':
        return <WarningIcon className = { classes }/>
        break
      case 'default':
        return <InfoIcon className = { classes }/>
        break
    }
  }

  render() {
    const {
      classes,
      open,
      onClose,
      message,
      variant
    } = this.props

    return (
      <Snackbar
        className = { classes.notifyPosition }
        open = { open }
        autoHideDuration = { 1000 }
      >
        <SnackbarContent
          className = { `${classes[variant]}` }
          aria-describedby = "client-snackbar"
          message = {
            <span id="client-snackbar" className={classes.message}>
              { this.renderNotify(variant, classes.iconVariant) }
              { message }
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={onClose}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>,
          ]}
        />
      </Snackbar>
    );
  }
}

Notify.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  message: PropTypes.string,
  variant: PropTypes.string
}

export default withStyles(styles)(Notify)

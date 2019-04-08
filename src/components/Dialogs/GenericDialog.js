import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
  Grid,
  withMobileDialog,
} from '@material-ui/core'

import { Clear } from '@material-ui/icons'

class GenericDialog extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const {
      fullScreen,
      open,
      title,
      onSubmit,
      onClose,
      submitText,
      closeText,
      children,
      maxWidth,
      isDismisable,
      dismissFunction,
    } = this.props


    return (
        <Dialog
          fullScreen = { fullScreen }
          open = { open }
          onClose = { onClose }
          scroll = { 'body' }
          aria-labelledby = "responsive-dialog-title"
          maxWidth = { maxWidth }
        >
          <DialogTitle id="responsive-dialog-title">
            <Grid container
            justify="space-between"
            >
              <Grid item xs = { 10 } lg = { 10 } md = { 10 } sm = { 10 }>
                <Typography>
                  { title }
                </Typography>
              </Grid>
            </Grid>
          </DialogTitle>

          <DialogContent>
          {
            children
          }
          </DialogContent>
          <DialogActions>
            <Button onClick = { () => onClose() } color="primary">
              { closeText }
            </Button>
            <Button onClick = { () => onSubmit() } color="primary" autoFocus>
              { submitText }
            </Button>
          </DialogActions>
        </Dialog>
    )
  }
}

GenericDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired,
  closeText: PropTypes.string.isRequired,
}

export default withMobileDialog()(GenericDialog)

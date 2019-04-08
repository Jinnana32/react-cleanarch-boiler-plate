import React, { Component } from 'react'

import {
  Dialog,
  DialogContent,
  CircularProgress
} from '@material-ui/core'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class LoadingDialog extends Component {
  constructor (props) {
    super(props)
  }

  render () {

    const {
      classes,
      open,
    } = this.props

    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open = { open }
      >
        <DialogContent>
          <center>
            <CircularProgress className={classes.progress} />
          </center>
        </DialogContent>
      </Dialog>
    )
  }

}

LoadingDialog.propTypes = {
  open,
}

export default withStyles(styles)(LoadingDialog)

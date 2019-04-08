import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Table,
  Paper,
} from '@material-ui/core'

import GenericTableHead from './GenericTableHead'
import GenericTableToolbar from './GenericTableToolbar'
import GenericTableBody from './GenericTableBody'
import GenericTableFooter from './GenericTableFooter'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: '100%',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class GenericTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      classes,
      data,
      order,
      orderBy,
      selected,
      rowsPerPage,
      columnData,
      page,
      emptyRows,
      title
    } = this.props

    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className = { classes.root }>
        <GenericTableToolbar numSelected = { 0 } title = { title } />
        <Table className = { classes.table } aria-labelledby="tableTitle">
          <div className = { classes.tableWrapper }>
            <GenericTableHead
              numSelected = { 0 }
              rowCount = { 5 }
              columnData = { columnData }
            />
          </div>
          {
            super.render()
          }
          <GenericTableFooter
            numSelected = { 1 }
            data = { 1 }
          />
        </Table>
      </Paper>
    )
  }
}

GenericTable.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  emptyRows: PropTypes.number.isRequired,
  numSelected: PropTypes.number.isRequired,
  cellData: PropTypes.array.isRequired,
  columnData: PropTypes.array.isRequired,
  orderBy: PropTypes.string,
  order: PropTypes.string,
}

export default withStyles(styles)(GenericTable)

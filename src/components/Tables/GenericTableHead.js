import React, { Component } from 'react'

import PropTypes from 'prop-types'

import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Toolbar,
  Checkbox,
  Tooltip
} from '@material-ui/core'

class GenericTableHead extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      columnData
    } = this.props

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
          </TableCell>
            {
              columnData &&
              columnData.map(column => {
              return (
                <TableCell
                  key = { column.id }
                  numeric = { column.numeric }
                  padding = { column.disablePadding ? 'none' : 'default' }
                  sortDirection = { orderBy === column.id ? order : false }
                >
                    <TableSortLabel
                      active = { orderBy === column.id }
                      direction = { order }
                    >
                      { column.label }
                    </TableSortLabel>
                </TableCell>
              )
          }, this)
          }
        </TableRow>
      </TableHead>
    )
  }
}

GenericTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  columnData : PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.number,
        numeric: PropTypes.bool,
        disablePadding: PropTypes.bool,
        label: PropTypes.string,
      })
    )
  ),

}

export default GenericTableHead

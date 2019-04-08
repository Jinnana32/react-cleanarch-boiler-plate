import React, { Component } from 'react'

import PropTypes from 'prop-types'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip
} from '@material-ui/core'

import {
  withStyles
} from '@material-ui/core/styles'

import {
  lighten
} from '@material-ui/core/styles/colorManipulator'

class GenericTableBody extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      data,
      order,
      orderBy,
      selected,
      rowsPerPage,
      page,
      emptyRows
    } = this.props

    return (
      <TableBody>
        {
          data &&
          data
          .map(n => {
            return (
              <TableRow
                hover
                role = "checkbox"
                tabIndex = {-1}
                key = {n.id}
              >
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell component="th" scope="row" padding="none">
                  { n.name }
                </TableCell>
                <TableCell numeric>{ n.calories }</TableCell>
                <TableCell numeric>{ n.fat }</TableCell>
                <TableCell numeric>{ n.carbs }</TableCell>
                <TableCell numeric>{ n.protein }</TableCell>
              </TableRow>
            );
          })}
        {emptyRows > 0 && (
          <TableRow style={{ height: 49 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
    )
  }
}

GenericTableBody.propTypes = {
  data: PropTypes.array
}

export default GenericTableBody

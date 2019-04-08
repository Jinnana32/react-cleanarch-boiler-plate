import React, { Component } from 'react'

import PropTypes from 'prop-types'

import {
  TablePagination,
} from '@material-ui/core'

class GenericTableFooter extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      rowsPerPage,
      page,
      data,
      onChangePage,
      onChangeRows,
      rowsPerPageOptions
    } = this.props

    return (
      <TablePagination
        component = "div"
        count = { data && data.length }
        rowsPerPage = { rowsPerPage }
        page = { page }
        backIconButtonProps = {{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps = {{
          'aria-label': 'Next Page',
        }}
        rowsPerPageOptions = { rowsPerPageOptions && rowsPerPageOptions }
        onChangePage = { (e, page) => onChangePage(e, page) }
        onChangeRowsPerPage = { (e) => onChangeRows(e) }
      />
    )
  }
}

GenericTableFooter.propTypes = {
  onChangePage: PropTypes.func,
  onChangeRows: PropTypes.func,
  data: PropTypes.array,
  page: PropTypes.number,
  rowsPerPageOptions: PropTypes.array,
  rowsPerPage: PropTypes.number,
}

export default GenericTableFooter

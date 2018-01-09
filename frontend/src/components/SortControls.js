import React, { Component } from 'react'
import { connect } from 'react-redux'

import { defineSort } from '../actions/sort'

class SortControls extends Component {
  componentDidMount() {
    this.props.defineSort('date', 'ascending')
  }

  handleSortClick = (criteria, sort) => {
    console.log(sort)
    this.props.defineSort(criteria, sort === 'ascending' ? 'descending' : 'ascending')
  }

  render() {
    const { sort } = this.props
    return (
      <div>
        {sort.orderby && (
          <div>
            <button
              onClick={() => {
                this.handleSortClick('date', sort.sort)
              }}
              >
                By Date
                {/* add icon */}
            </button>
            <button
              onClick={() => {
              this.handleSortClick('score', sort.sort)
            }}
            >
              By Votes
              {/* add icon */}
          </button>
          </div>
        )}
      </div>
    )
  }
}
const mapStateToProps = ({ sort }) => ({
  sort
})

export default connect(mapStateToProps, {defineSort})(SortControls)

import React, { Component } from 'react'
import { connect } from 'react-redux'

//import actions for sort
import { defineSort } from '../actions/sort'

class SortControls extends Component {
  //define default sorting properties on mount
  componentDidMount() {
    this.props.defineSort('date', 'ascending')
  }

  //handle sort click event
  handleSortClick = (criteria, sort) => {
    //define sort action with toggle sorting order after click
    this.props.defineSort(criteria, sort === 'ascending' ? 'descending' : 'ascending')
  }

  render() {
    //extract sort from props
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

//subscribe component state to Redux store updates
const mapStateToProps = ({ sort }) => ({
  sort
})

//inject functions into component props
const mapDispatchToProps = {
  defineSort
}

export default connect(mapStateToProps, mapDispatchToProps)(SortControls)

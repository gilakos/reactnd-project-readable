import React, { Component } from 'react'
import { connect } from 'react-redux'

//import actions for sort
import { defineSort } from '../actions/sort'

//import styles
import '../css/index.css'
import '../css/bootstrap-grid.css'
import '../css/bootstrap-reboot.css'
import '../css/bootstrap.css'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronUp from '@fortawesome/fontawesome-free-solid/faChevronUp'
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown'

class SortControls extends Component {
  //define default sorting properties on mount
  componentDidMount() {
    this.props.defineSort('date', 'ascending')
  }

  //handle sort click event
  handleSortClick = (criteria, sort) => {
    //define sort action with toggle sorting order after click
    this.props.defineSort(
      criteria,
      sort === 'ascending' ? 'descending' : 'ascending'
    )
  }

  render() {
    //extract sort from props
    const { sort } = this.props

    return (
      <div className="container" style={{ margin: '10px 0px 0px' }}>
        <div className="row">
          <div className="post col-xl-12 text-center">
            {sort.orderby && (
              <div>
                <button
                  type="submit"
                  className={"btn " + (sort.orderby === 'date' ? 'btn-primary' : 'btn-secondary')}
                  style={{ margin: '0px 5px 0px 0px' }}
                  onClick={() => {
                    this.handleSortClick('date', sort.sort)
                  }}
                >
                  {sort.orderby === 'date' ? <FontAwesomeIcon
                    icon={
                      sort.sort === 'ascending' ? faChevronUp : faChevronDown
                    }
                  /> : ''}
                  {' '}
                  By Date
                </button>

                <button
                  type="submit"
                  className={"btn " + (sort.orderby === 'score' ? 'btn-primary' : 'btn-secondary')}
                  onClick={() => {
                    this.handleSortClick('score', sort.sort)
                  }}
                >
                  {sort.orderby === 'score' ? <FontAwesomeIcon
                    icon={
                      sort.sort === 'ascending' ? faChevronUp : faChevronDown
                    }
                  /> : ''}
                  {' '}
                  By Votes
                </button>
              </div>
            )}
          </div>
        </div>
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

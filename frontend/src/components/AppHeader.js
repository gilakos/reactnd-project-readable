import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

//import actions for categories
import { fetchCategories, currentCategory } from '../actions/categories'

//import helper function
import { capitalizeFirst } from '../utils/helpers'

//import styles
import '../css/index.css'
import '../css/bootstrap-grid.css'
import '../css/bootstrap-reboot.css'
import '../css/bootstrap.css'

class AppHeader extends Component {
  //fetch categories on mount
  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    //extract categories from props
    const { categories } = this.props.categories

    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="navbar-header d-flex align-items-center justify-content-between">
              <Link to="/" className="navbar-brand">
                Readable
              </Link>
            </div>
            <div id="navbarcollapse" className="collapse navbar-collapse">
              <ul className="nav navbar-nav ml-auto">
                {categories !== undefined &&
                  categories.map(category => (
                    <li
                      key={category.path}
                      className="nav-item"
                      style={{padding: "0px 5px"}}
                      >
                      <Link
                        to={`/category/${category.path}`}
                        style={{color: 'gray'}}
                        // className="active"
                      >
                        {capitalizeFirst(category.name)}
                      </Link>
                    </li>
                  ))}
              </ul>
              <div>
                <button type="submit" className="btn btn-primary">
                  {' '}
                  <Link
                    to="/create"
                    style={{color: 'white'}}
                    >Add Post</Link>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

//subscribe component state to Redux store updates
const mapStateToProps = ({ categories, currentCategory }) => ({
  categories,
  currentCategory
})

//inject functions into component props
const mapDispatchToProps = {
  fetchCategories,
  currentCategory
}

//connect component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

//import actions for categories
import { fetchCategories, currentCategory } from '../actions/categories'

class AppHeader extends Component {

  //fetch categories on mount
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    //extract categories from props
    const { categories } = this.props.categories

    return (
      <nav>
        <Link to="/">Home</Link>
        <div>
          <h6>Categories</h6>
          <ul>
            { categories !== undefined && categories.map(
              category => (
                <li
                  key={category.path}
                >
                  <Link
                    to={`/category/${category.path}`}
                    >
                      {category.name}
                    </Link>
                </li>
              )
            )}
            <li>
              <Link
                to='/create'
                >
                  Add Post
                </Link>
            </li>
          </ul>
        </div>
      </nav>
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
export default connect(mapStateToProps, mapDispatchToProps)(
  AppHeader
)

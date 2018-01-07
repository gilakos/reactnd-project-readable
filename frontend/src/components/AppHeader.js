import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

//import actions for categories
import { fetchCategories, currentCategory } from '../actions/categories'

class AppHeader extends Component {

  //fetch categories on update
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
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
          </ul>
        </div>
        <h6>ToDo</h6>
        <ul>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/create-edit">Create / Edit</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = ({ categories, currentCategory }) => ({
  categories,
  currentCategory
})

export default connect(mapStateToProps, { fetchCategories, currentCategory })(
  AppHeader
)

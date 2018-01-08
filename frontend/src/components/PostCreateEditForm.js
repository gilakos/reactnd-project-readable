import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class PostCreateEditForm extends Component {
  //define state of form (from post data)
  state = {
    author: '',
    title: '',
    body: '',
    category: ''
  }

  // on mount
  componentDidMount() {
    if (this.props.post !== undefined) {
      this.setState({
        author: this.props.post.author,
        title: this.props.post.title,
        body: this.props.post.body,
        category: this.props.post.category
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.post !== undefined) {
      this.setState({
        author: nextProps.post.author,
        title: nextProps.post.title,
        body: nextProps.post.body,
        category: nextProps.post.category
      })
    }
  }

  //function to bind category button to state
  selectCategory = event => {
    this.setState({
      category: event.target.value
    })
  }

  //function to bind cancel action to button
  cancelPostUpdate= event => {
    event.preventDefault()
    if (this.props.history.action === 'PUSH')
      // when cancelling add post, return to prior page
      this.props.history.goBack()
    else
      //send home
      this.props.history.push('/')
  }

  //handle changes to each form field
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    //get form submit action, header, categories from props
    const { onFormSubmit, formHeader } = this.props
    const { categories } = this.props.categories

    return (
      <form onSubmit={onFormSubmit}>
        <div>
          <h4>{formHeader}</h4>
        </div>
        <div>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="author"
              placeholder="Your name*"
              value={this.state.author}
              onChange={event => this.handleInputChange(event)}
              required
            />
          </div>
          <div>
            <label>Post Title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Post title*"
              onChange={event => this.handleInputChange(event)}
              required
            />
          </div>
          <div>
            <label>Content</label>
            <textarea
              name="body"
              rows="3"
              value={this.state.body}
              placeholder="Your post text*"
              onChange={event => this.handleInputChange(event)}
              required
            />
          </div>
          <div>
            <label>Select Category</label>
            <div>
              <div data-toggle="buttons">
                {categories !== undefined &&
                  categories.map(category => (
                    <label key={category.path} onClick={this.selectCategory}>
                      <input
                        type="radio"
                        name="category"
                        value={category.name}
                      />{' '}
                      {category.name}
                    </label>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <button onClick={this.cancelPostUpdate}>Cancel</button>
          <button disabled={!this.state.category}>Save Post</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
})

export default withRouter(connect(mapStateToProps)(PostCreateEditForm))

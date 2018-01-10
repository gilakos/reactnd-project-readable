import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

//import helper function
import { capitalizeFirst } from '../utils/helpers'

//import styles
import '../css/index.css'
import '../css/bootstrap-grid.css'
import '../css/bootstrap-reboot.css'
import '../css/bootstrap.css'

class PostCreateEditForm extends Component {
  //define state of form (from post data)
  state = {
    author: '',
    title: '',
    body: '',
    category: ''
  }

  //set state on mount
  //if editing existing post, otherwise leave empty
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

  //set state on component receiving new nextProps
  //if editing existing post, otherwise leave empty
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

  //handle selection of category from radio button
  selectCategory = event => {
    this.setState({
      category: event.target.value
    })
  }

  //handle cancel post creation event
  cancelPostUpdate = event => {
    event.preventDefault()
    if (this.props.history.action === 'PUSH')
      // when cancelling add post, return to prior page
      this.props.history.goBack()
    else
      //send home
      this.props.history.push('/')
  }

  //handle changes events for each form field
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    //extract form submit action, header, categories from props
    const { onFormSubmit, formHeader } = this.props
    const { categories } = this.props.categories

    return (
      <div className="container">
        <div className="row">
          <main className="post blog-post col-lg-12">
            <div className="add-comment">
              <header>
                <h3 className="h6">{formHeader}</h3>
              </header>

              <form onSubmit={onFormSubmit} className="commenting-form">
                <div className="row">
                  <div className="form-group col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="author"
                      placeholder="Your name*"
                      value={this.state.author}
                      onChange={event => this.handleInputChange(event)}
                      required
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <textarea
                      className="form-control"
                      type="text"
                      rows="1"
                      name="title"
                      value={this.state.title}
                      placeholder="Post title*"
                      onChange={event => this.handleInputChange(event)}
                      required
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <textarea
                      className="form-control"
                      name="body"
                      rows="3"
                      value={this.state.body}
                      placeholder="Your post text*"
                      onChange={event => this.handleInputChange(event)}
                      required
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label>Select Category</label>
                    <div className="btn-toolbar">
                      <div className="btn-group" data-toggle="buttons">
                        {categories !== undefined &&
                          categories.map(category => (
                            <label
                              key={category.path}
                              onClick={this.selectCategory}
                              className={
                                'btn btn-secondary' +
                                (this.state.category === category.name
                                  ? ' active'
                                  : '')
                              }
                              style={{margin: "0px 5px 0px 0px"}}
                            >
                              <input
                                type="radio"
                                name="category"
                                value={category.name}
                              />{' '}
                              {capitalizeFirst(category.name)}
                            </label>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-12">
                    <button
                      onClick={this.cancelPostUpdate}
                      className="btn btn-primary"
                      style={{ margin: '0px 5px 0px 0px' }}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn btn-primary"
                      disabled={!this.state.category}
                    >
                      Save Post
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

//subscribe component state to Redux store updates
const mapStateToProps = ({ categories }) => ({
  categories
})

export default withRouter(connect(mapStateToProps)(PostCreateEditForm))

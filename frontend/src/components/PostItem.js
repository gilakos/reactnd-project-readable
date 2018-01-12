import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//import custom components
import PostControls from './PostControls'
import VoteControls from './VoteControls'

//import helper function
import { fromNow } from '../utils/helpers'

//import styles
import '../css/index.css'
import '../css/bootstrap-grid.css'
import '../css/bootstrap-reboot.css'
import '../css/bootstrap.css'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faComment from '@fortawesome/fontawesome-free-solid/faComment'
import faClock from '@fortawesome/fontawesome-free-solid/faClock'

class PostItem extends Component {
  render() {
    //extract post from props
    const { posts, post } = this.props

    return (
      <div className="container">
        <div className="row">
          <div
            className="post col-xl-12"
            style={{
              background: '#f5f5f5',
              margin: '10px',
              padding: '5px 10px'
            }}
          >
            <div className="post-details">
              <Link to={`/category/${post.id}`}>
                <h3 className="h3" style={{ margin: '6px 0px 2px' }}>
                  {' '}
                  {post.title}{' '}
                </h3>
              </Link>
              <div className="category" style={{ margin: '10px 0px' }}>
                <a href="">Category: {post.category}</a>
              </div>
              <footer
                className="post-footer d-flex align-items-center"
                style={{ fontSize: '.85rem' }}
              >
                  <div className="title">
                    <span>{post.author}</span>
                  </div>
                  <div className="date">
                    <FontAwesomeIcon icon={faClock} /> {fromNow(post.timestamp)}
                  </div>
                  <div className="comments">
                    <FontAwesomeIcon icon={faComment} /> {post.commentCount}
                  </div>
                  <div className="vote float-right">
                    <VoteControls entry={post} />
                  </div>
                  <div className="edit meta-last">
                    <PostControls posts={posts} post={post} />
                  </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostItem

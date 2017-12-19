import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import * as Api from "../utils/api";
import "./App.css";

class App extends Component {
  componentDidMount() {
    //   Api.fetchCategories()
    //   .then(response => console.log(response))
    //   Api.fetchCategoryPosts('react')
    //   .then(response => console.log(response))
    //   Api.fetchPosts()
    //     .then(response => console.log(response))
    //   Api.fetchPostById('6ni6ok3ym7mf1p33lnez')
    //     .then(response => console.log(response))

    Api.addPost({
      id: "6ni6ok3ym7mf1p33lne2",
      timestamp: Date.now(),
      title: "a new title",
      body: "some stuff for a body",
      author: "me",
      category: "redux"
    }).then(response => console.log(response));

    Api.votePost("6ni6ok3ym7mf1p33lne2", {
      option: "upVote"
    }).then(response => console.log(response));

    Api.editPost("6ni6ok3ym7mf1p33lne2", {
      title: "a very new title",
      body: "some other stuff for a body"
    }).then(response => console.log(response));

    Api.fetchPosts().then(response => console.log(response));

    //   Api.deletePost("6ni6ok3ym7mf1p33lne2")
    //   .then(response => console.log(response))

    Api.addComment({
      id: "6ni6ok3ym7mf1p33lne3",
      timestamp: Date.now(),
      body: "some comments...",
      author: "mini me",
      parentId: "6ni6ok3ym7mf1p33lne2"
    }).then(response => console.log(response));

    Api.fetchPostCommentsById("6ni6ok3ym7mf1p33lne2").then(response =>
      console.log(response)
    );

    Api.voteComment("6ni6ok3ym7mf1p33lne3", {
      option: "upVote"
    }).then(response => console.log(response));

    Api.fetchCommentsById("6ni6ok3ym7mf1p33lne3").then(response =>
      console.log(response)
    );

    Api.editComment("6ni6ok3ym7mf1p33lne3",{
      timestamp: Date.now(),
      body: "some edited comments...",
    })
    .then(response =>
      console.log(response)
    );

    Api.deleteComment("6ni6ok3ym7mf1p33lne3")
    .then(response =>
      console.log(response)
    ).then(
      Api.fetchCommentsById("6ni6ok3ym7mf1p33lne3").then(response =>
        console.log(response)
      )
    )

  }

  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
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

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/post" component={Post} />
        <Route path="/create-edit" component={CreateEdit} />
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h3>Root</h3>
    <ul>
      <li>
        should list all available categories, which should link to a category
        view for that category
      </li>
      <li>should list all of the posts</li>
      <li>
        should have a control for changing the sort method for the list,
        including at minimum, order by voteScore and order by timestamp
      </li>
      <li>should have a control for adding a new post</li>
    </ul>
  </div>
);

const Category = () => (
  <div>
    <h3>Category</h3>
    <ul>
      <li>
        should list all available categories, which should link to a category
        view for that category
      </li>
      <li>should list all of the posts</li>
      <li>
        should have a control for changing the sort method for the list,
        including at minimum, order by voteScore and order by timestamp
      </li>
      <li>should have a control for adding a new post</li>
      <li>filtered to only include posts with the selected category</li>
    </ul>
    <div id="catnav">
      <aside>
        <ul>
          <li>category1</li>
          <li>category2</li>
          <li>category3</li>
        </ul>
      </aside>
    </div>
  </div>
);

const Post = () => (
  <div>
    <h3>Post</h3>
    <ul>
      <li>
        should show the details of a post, including: Title, Body, Author,
        timestamp (in user readable format), and vote score
      </li>
      <li>should list all of the comments for that post</li>
      <li>should have controls to edit or delete the post</li>
      <li>should have a control to add a new comment.</li>
      <li>implement comment form however you want (inline, modal, etc.)</li>
      <li>comments should also have controls for editing or deleting</li>
    </ul>
  </div>
);

const CreateEdit = () => (
  <div>
    <h3>Create / Edit</h3>
    <ul>
      <li>should have a form to create new post or edit existing posts</li>
      <li>when editing, existing data should be populated in the form</li>
    </ul>
  </div>
);

export default App;

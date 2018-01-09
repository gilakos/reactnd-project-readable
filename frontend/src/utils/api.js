const MY_AUTH = 'my-authorization'
const api = 'http://localhost:3001'

const headers = {
  Authorization: MY_AUTH,
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

//CATEGORIES
//GET categories
export const getCategories = () => {
  return fetch(`${api}/categories`, {
    method: 'GET',
    headers: headers
  })
    .then(response => response.json())
    .then(data => data.categories)
    .catch(error => {
      return error
    })
}

//POSTS
//GET all posts
export const getPosts = category_filter => {
  const conditional_url = category_filter
    ? `${api}/${category_filter}/posts`
    : `${api}/posts`
  return fetch(conditional_url, {
    method: 'GET',
    headers: headers
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      return error
    })
}

//GET post by id
export const getPost = id => {
  return fetch(`${api}/posts/${id}`, {
    method: 'GET',
    headers: headers
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      return error
    })
}

//POST add new post
export const postNewPost = post => {
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(post)
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      return error
    })
}

//PUT update post
export const putUpdatePost = post => {
  return fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(post)
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      return error
    })
}

//DELETE post
export const deletePost = id => {
  return fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: headers
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      return error
    })
}

//COMMENTS
//GET comments by post id
export const getPostComments = id => {
  return fetch(`${api}/posts/${id}/comments`, {
    method: 'GET',
    headers: headers
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      return error
    })
}

//POST new comment
export const postNewComment = comment => {
  return fetch(`${api}/comments`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(comment)
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      return error
    })
}

//PUT update comment
export const putUpdateComment = comment => {
  return fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(comment)
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      return error
    })
}

//DELETE comment
export const deleteComment = id => {
  return fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: headers
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      return error
    })
}

//VOTES
//POST vote function
export const postVote = (objectType, id, vote) => {
  //objectType: [String]: Either "posts" or "comments"
  //id: [String]: post or comment id
  //vote: [String]: Either "upVote" or "downVote"
  return fetch(`${api}/${objectType}/${id}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ id: id, option: vote })
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      return error
    })
}

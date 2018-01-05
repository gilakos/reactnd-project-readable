const MY_AUTH = 'my-authorization'
const api = 'http://localhost:3001'

const headers = {
  'Authorization': MY_AUTH,
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}


export const getCategories = () => {
  return(
    fetch(
      `${api}/categories`,
      {
        method: 'GET',
        headers: headers,
      }
    ).then(
      response => response.json()
    ).then(
      data => data.categories
    ).catch(error => {
      return error
    })
  )
}

export const getPosts = (category_filter) => {
  const conditional_url =
    category_filter ?
    `${api}/${category_filter}/posts` :
    `${api}/posts`
  return(
    fetch(
      conditional_url,
      {
        method: 'GET',
        headers: headers,
      }
    ).then(
      response => response.json()
    ).then(
      data => data
    ).catch(error => {
      return error
    })
  )
}

export const addPost = (postinfo) => {
  return(
    fetch(
      `${api}/posts`,
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(postinfo),
      }
    ).then(
      (d) => d.json()
    ).catch(error => {
      return error
    })
  )
}

export const getPost = (id) => {
  return(
    fetch(
      `${api}/posts/${id}`,
      {
        method: 'GET',
        headers: headers,
      }
    ).then(
      response => response.json()
    ).then(
      data => data
    ).catch(error => {
      return error
    })
  )
}

export const votePost = (id, vote) => {
  return(
    fetch(
      `${api}/posts/${id}`,
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(vote),
      }
    ).then(
      (d) => d.json()
    ).catch(error => {
      return error
    })
  )
}

export const editPost = (id, postinfo) => {
  return(
    fetch(
      `${api}/posts/${id}`,
      {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(postinfo),
      }
    ).then(
      (d) => d.json()
    ).catch(error => {
      return error
    })
  )
}

export const deletePost = (id) => {
  return(
    fetch(
      `${api}/posts/${id}`,
      {
        method: 'DELETE',
        headers: headers,
      }
    ).then(
      (d) => d.json()
    ).catch(error => {
      return error
    })
  )
}

export const getPostCommentsById = (id) => {
  return(
    fetch(
      `${api}/posts/${id}/comments`,
      {
        method: 'GET',
        headers: headers,
      }
    ).then(
      (d) => d.json()
    ).catch(error => {
      return error
    })
  )
}

export const addComment = (commentinfo) => {
  return(
    fetch(
      `${api}/comments`,
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(commentinfo),
      }
    ).then(
      (d) => d.json()
    ).catch(error => {
      return error
    })
  )
}

export const getCommentsById = (id) => {
  return(
    fetch(
      `${api}/comments/${id}`,
      {
        method: 'GET',
        headers: headers,
      }
    ).then(
      (d) => d.json()
    ).catch(error => {
      return error
    })
  )
}

export const voteComment = (id, vote) => {
  return(
    fetch(
      `${api}/comments/${id}`,
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(vote),
      }
    ).then(
      (d) => d.json()
    ).catch(error => {
      return error
    })
  )
}

export const editComment = (id, commentinfo) => {
  return(
    fetch(
      `${api}/comments/${id}`,
      {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(commentinfo),
      }
    ).then(
      (d) => d.json()
    ).catch(error => {
      return error
    })
  )
}

export const deleteComment = (id) => {
  return(
    fetch(
      `${api}/comments/${id}`,
      {
        method: 'DELETE',
        headers: headers,
      }
    ).then(
      (d) => d.json()
    ).catch(error => {
      return error
    })
  )
}

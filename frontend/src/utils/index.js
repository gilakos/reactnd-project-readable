const MY_AUTH = 'my-authorization'

export function fetchComments () {

  return(
    fetch(
      url,
      {
        headers: {'Authorization': MY_AUTH}
      }
    ).then(
      console.log('fetch promise returned')
    )
  )
}

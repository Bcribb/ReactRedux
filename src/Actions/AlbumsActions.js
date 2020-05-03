export const FETCH_ALBUMS_BEGIN   = 'FETCH_ALBUMS_BEGIN';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';

export const fetchAlbumsBegin = () => ({
  type: FETCH_ALBUMS_BEGIN
});

export const fetchAlbumsSuccess = albums => ({
  type: FETCH_ALBUMS_SUCCESS,
  payload: { albums }
});

export const fetchAlbumsFailure = error => ({
  type: FETCH_ALBUMS_FAILURE,
  payload: { error }
});

export function fetchAlbums() {
  return dispatch => {
    dispatch(fetchAlbumsBegin());
    return fetch("http://jsonplaceholder.typicode.com/albums")
      .then(handleErrors)
      .then(response => response.json())
      .then(json => {
        dispatch(fetchAlbumsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchAlbumsFailure(error)));
  };
}
  
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
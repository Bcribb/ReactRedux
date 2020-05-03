export const FETCH_PICTURES_BEGIN   = 'FETCH_PICTURES_BEGIN';
export const FETCH_PICTURES_SUCCESS = 'FETCH_PICTURES_SUCCESS';
export const FETCH_PICTURES_FAILURE = 'FETCH_PICTURES_FAILURE';

export const fetchPicturesBegin = selectedId => ({
    type: FETCH_PICTURES_BEGIN,
    payload: {selectedId}
});

export const fetchPicturesSuccess = pictures => ({
    type: FETCH_PICTURES_SUCCESS,
    payload: { pictures }
});

export const fetchPicturesFailure = error => ({
    type: FETCH_PICTURES_FAILURE,
    payload: { error }
});

export function fetchPictures(selectedId) {
    return dispatch => {
        dispatch(fetchPicturesBegin(selectedId));
        return fetch("http://jsonplaceholder.typicode.com/photos?albumId=".concat(selectedId))
            .then(handleErrors)
            .then(response => response.json())
            .then(json => {
                dispatch(fetchPicturesSuccess(json));
                return json;
    })
        .catch(error => dispatch(fetchPicturesFailure(error)));
    };
  }
  
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

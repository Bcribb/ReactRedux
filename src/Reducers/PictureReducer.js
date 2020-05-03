import {
    FETCH_PICTURES_BEGIN,
    FETCH_PICTURES_SUCCESS,
    FETCH_PICTURES_FAILURE
  } from '../Actions/PictureActions';
  
  const initialState = {
    pictures: [],
    loading: false,
    error: null,
    selectedId: null
  };
  
  export default function pictureReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PICTURES_BEGIN:
        return {
          ...state,
          selectedId: action.payload.selectedId,
          loading: true,
          error: null
        };
  
      case FETCH_PICTURES_SUCCESS:
        return {
          ...state,
          loading: false,
          pictures: action.payload.pictures
        };
  
      case FETCH_PICTURES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          pictures: []
        };
  
      default:
        return state;
    }
  }
import { combineReducers } from "redux";
import albums from "./AlbumReducer";
import users from "./UserReducer";
import pictures from "./PictureReducer";

export default combineReducers({
    albums,
    users,
    pictures
});
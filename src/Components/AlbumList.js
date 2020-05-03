import React from 'react'
import { connect } from "react-redux"
import { fetchAlbums } from "../Actions/AlbumsActions"
import { fetchUsers } from "../Actions/UsersActions"
import Album from "./Album"
import '../SCSS/AlbumList.scss'

export class AlbumList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAlbums());
        this.props.dispatch(fetchUsers())
    }

    render() {
        const { errorAlbums, loadingAlbums, albums } = this.props

        if(errorAlbums) {
            return(
                <>
                    Error: {errorAlbums.message}
                </>
            )
        }

        if(loadingAlbums) {
            return(
                <>
                    Loading...
                </>
            )
        }

        return(
            <>
                <div className="AlbumList">
                    <br/>
                    {albums.map((indivAlbum, index) =>
                        <Album key={'album' + index} album={indivAlbum}/>    
                    )}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    albums: state.albums.albums,
    loadingAlbums: state.albums.loading,
    errorAlbums: state.albums.error,
});

export default connect(mapStateToProps)(AlbumList);
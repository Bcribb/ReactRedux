import React from 'react';
import { connect } from 'react-redux';
import { fetchPictures } from '../Actions/PictureActions'
import PictureList from './PictureList';

export class Album extends React.Component {
    constructor(props) {
        super(props);

        this.id = null;
    }

    selectPictures = () => {
        this.props.dispatch(fetchPictures(this.id));
    }

    render() {
        const { title, userId, id } = this.props.album;
        const { errorUsers, loadingUsers, users, picturesId } = this.props;

        this.id = id;

        if(errorUsers) {
            return(
                <>
                   Error: {errorUsers.message}
                </>
            )
        };

        if(loadingUsers) {
            return(
                <>
                    Loading...
                </>
            )
        };

        let pictures = <></>
        if(id === picturesId) {
            pictures = <PictureList/>
        };

        const username = users.find(user => user.id === userId).name;

        const divName = "albumDiv".concat(id);

        return (
            <>
                <div name={divName} href={divName} className="Album" onClick={this.selectPictures}>
                    <p className="AlbumTitle">{title}</p>
                    <p className="Author">{username}</p>
                </div>
                <div className="pictureList">
                    {pictures}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.users,
    loadingUsers: state.users.loading,
    errorUsers: state.users.error,
    picturesId: state.pictures.selectedId
});

export default connect(mapStateToProps)(Album);
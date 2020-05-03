import React from 'react';
import { connect } from 'react-redux';
import '../SCSS/PictureList.scss'

export class PictureList extends React.Component {
    constructor(props) {
        super(props);

        this.fullUrls = {};
    }

    onClick = target => {
        const modal = document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        const captionText = document.getElementById("caption");
        modalImg.src = this.fullUrls[target.currentTarget.id];
        modal.style.display = "block";
        console.log(document.getElementById(target.currentTarget.id));
        captionText.innerHTML = target.currentTarget.alt;
    }

    closeModal = () => {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    render() {
        const { errorPictures, loadingPictures, pictures} = this.props;

        if(errorPictures) {
            return(
                <>
                   Error: {errorPictures.message}
                </>
            )
        };

        if(loadingPictures) {
            return(
                <>
                    Loading...
                </>
            )
        };

        return(
            <>
                <div id="myModal" className="modal">
                    <span className="close" onClick={this.closeModal}>&times;</span>
                    <img alt="modal" className="modal-content" id="img01"/>
                    <div id="caption"></div>
                </div>
                {pictures.map((picture, index) => {
                        this.fullUrls['pic'.concat(index)] = picture.url
                        return <img className="thumb" onClick={this.onClick.bind(this)} id={'pic' + index} key={'pic' + index} alt={picture.title} src={picture.thumbnailUrl}/>
                    }
                )}
            </>
        )
    }
}

const mapStateToProps = state => ({
    pictures: state.pictures.pictures,
    loadingPictures: state.pictures.loading,
    errorPictures: state.pictures.error,
    picturesId: state.pictures.selectedId
});

export default connect(mapStateToProps)(PictureList);
import {
    FETCH_PICTURES_BEGIN,
    FETCH_PICTURES_SUCCESS,
    FETCH_PICTURES_FAILURE,
    fetchPicturesBegin,
    fetchPicturesSuccess,
    fetchPicturesFailure
} from '../../Actions/PictureActions';

describe('Picture actions', () => {
    it('should create a begin fetch action', () => {
        const selectedId = 1;
        const expectedAction = {
            type: FETCH_PICTURES_BEGIN,
            payload: { selectedId }
        }
        expect(fetchPicturesBegin(selectedId)).toEqual(expectedAction)
    })

    it('should create a success fetch action', () => {
        const pictures = [{
                "albumId": 1,
                "id": 1,
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "https://via.placeholder.com/600/92c952",
                "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            },
            {
                "albumId": 1,
                "id": 2,
                "title": "reprehenderit est deserunt velit ipsam",
                "url": "https://via.placeholder.com/600/771796",
                "thumbnailUrl": "https://via.placeholder.com/150/771796"
        }]
        const expectedAction = {
            type: FETCH_PICTURES_SUCCESS,
            payload: { pictures }
        }
        expect(fetchPicturesSuccess(pictures)).toEqual(expectedAction)
    })

    it('should create a error fetch action', () => {
        const error = {message: "yikes"}
        const expectedAction = {
            type: FETCH_PICTURES_FAILURE,
            payload: { error }
        }
        expect(fetchPicturesFailure(error)).toEqual(expectedAction)
    })
})

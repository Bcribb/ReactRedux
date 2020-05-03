import {
    FETCH_ALBUMS_BEGIN,
    FETCH_ALBUMS_SUCCESS,
    FETCH_ALBUMS_FAILURE,
    fetchAlbumsBegin,
    fetchAlbumsSuccess,
    fetchAlbumsFailure
} from '../../Actions/AlbumsActions';

describe('Album actions', () => {
    it('should create a begin fetch action', () => {
        const expectedAction = {
            type: FETCH_ALBUMS_BEGIN
        }
        expect(fetchAlbumsBegin()).toEqual(expectedAction)
    })

    it('should create a success fetch action', () => {
        const albums = {album: "1"} 
        const expectedAction = {
            type: FETCH_ALBUMS_SUCCESS,
            payload: { albums }
        }
        expect(fetchAlbumsSuccess(albums)).toEqual(expectedAction)
    })

    it('should create a error fetch action', () => {
        const error = {message: "yikes"}
        const expectedAction = {
            type: FETCH_ALBUMS_FAILURE,
            payload: { error }
        }
        expect(fetchAlbumsFailure(error)).toEqual(expectedAction)
    })
})

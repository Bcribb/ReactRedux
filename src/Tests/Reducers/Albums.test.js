import {
    fetchAlbumsBegin,
    fetchAlbumsSuccess,
    fetchAlbumsFailure
} from '../../Actions/AlbumsActions'
import reducer from '../../Reducers/AlbumReducer';

describe('Album reducer', () => {
    it('should handle the default case', () => {
        expect(
            reducer(undefined, {})).toEqual(
                {
                    albums: [],
                    loading: false,
                    error: null
                }   
            )
    })

    it('should handle the FETCH_ALBUMS_BEGIN', () => {
        expect(
            reducer([], fetchAlbumsBegin())).toEqual(
                {
                    loading: true,
                    error: null
                }
            )
    })

    it('should handle the FETCH_ALBUMS_SUCCESS', () => {
        const albums = {name: "dada"};
        expect(
            reducer([], fetchAlbumsSuccess(albums))).toEqual(
                {
                    albums,
                    loading: false
                }
            )
    })

    it('should handle the FETCH_ALBUMS_ERROR', () => {
        const error = {message: "Did an oopsie"};
        expect(
            reducer([], fetchAlbumsFailure(error))).toEqual(
                {   
                    albums: [],
                    error,
                    loading: false
                }
            )
    })
})

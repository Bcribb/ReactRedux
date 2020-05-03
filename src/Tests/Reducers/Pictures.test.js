import {
    fetchPicturesBegin,
    fetchPicturesSuccess,
    fetchPicturesFailure
} from '../../Actions/PictureActions'
import reducer from '../../Reducers/PictureReducer';

describe('Picture reducer', () => {
    it('should handle the default case', () => {
        expect(
            reducer(undefined, {})).toEqual(
                {
                    selectedId: null,
                    pictures: [],
                    loading: false,
                    error: null
                }   
            )
    })

    it('should handle the FETCH_PICTURES_BEGIN', () => {
        const selectedId = 1;
        expect(
            reducer([], fetchPicturesBegin(selectedId))).toEqual(
                {
                    selectedId,
                    loading: true,
                    error: null
                }
            )
    })

    it('should handle the FETCH_PICTURES_SUCCESS', () => {
        const pictures = {name: "dada"};
        expect(
            reducer([], fetchPicturesSuccess(pictures))).toEqual(
                {
                    pictures,
                    loading: false
                }
            )
    })

    it('should handle the FETCH_PICTURES_ERROR', () => {
        const error = {message: "Did an oopsie"};
        expect(
            reducer([], fetchPicturesFailure(error))).toEqual(
                {   
                    pictures: [],
                    error,
                    loading: false
                }
            )
    })
})

import {
    fetchUsersBegin,
    fetchUsersSuccess,
    fetchUsersFailure
} from '../../Actions/UsersActions'
import reducer from '../../Reducers/UserReducer';

describe('User reducer', () => {
    it('should handle the default case', () => {
        expect(
            reducer(undefined, {})).toEqual(
                {
                    users: [],
                    loading: false,
                    error: null
                }   
            )
    })

    it('should handle the FETCH_USERS_BEGIN', () => {
        expect(
            reducer([], fetchUsersBegin())).toEqual(
                {
                    loading: true,
                    error: null
                }
            )
    })

    it('should handle the FETCH_USERS_SUCCESS', () => {
        const users = {name: "dada"};
        expect(
            reducer([], fetchUsersSuccess(users))).toEqual(
                {
                    users,
                    loading: false
                }
            )
    })

    it('should handle the FETCH_USERS_ERROR', () => {
        const error = {message: "Did an oopsie"};
        expect(
            reducer([], fetchUsersFailure(error))).toEqual(
                {   
                    users: [],
                    error,
                    loading: false
                }
            )
    })
})

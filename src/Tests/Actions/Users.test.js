import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    fetchUsersBegin,
    fetchUsersSuccess,
    fetchUsersFailure
} from '../../Actions/UsersActions';

describe('User actions', () => {
    it('should create a begin fetch action', () => {
        const expectedAction = {
            type: FETCH_USERS_BEGIN
        }
        expect(fetchUsersBegin()).toEqual(expectedAction)
    })

    it('should create a success fetch action', () => {
        const users = {user: "1"} 
        const expectedAction = {
            type: FETCH_USERS_SUCCESS,
            payload: { users }
        }
        expect(fetchUsersSuccess(users)).toEqual(expectedAction)
    })

    it('should create a error fetch action', () => {
        const error = {message: "yikes"}
        const expectedAction = {
            type: FETCH_USERS_FAILURE,
            payload: { error }
        }
        expect(fetchUsersFailure(error)).toEqual(expectedAction)
    })
})

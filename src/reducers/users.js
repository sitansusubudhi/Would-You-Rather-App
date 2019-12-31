import { RECEIVE_USERS, ADD_USER_QUESTION } from '../actions/users';

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS: 
            return {
                ...state,
                ...action.users
            };
        case ADD_USER_QUESTION:
            const { authedUser, id } = action;

            return {
                ...state,
                [authedUser]: {
                  ...state[authedUser],
                  questions: state[authedUser].questions.concat([id])
                }
            };
        default: 
            return state
    }
}
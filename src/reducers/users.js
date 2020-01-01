import { RECEIVE_USERS, ADD_USER_QUESTION, SET_USER_ANSWER } from '../actions/users';

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

        case SET_USER_ANSWER:
            const { authedUser: loggedInUser, qid, answer } = action;
            
            return {
                ...state,
                [loggedInUser]: {
                  ...state[loggedInUser],
                  answers: {
                    ...state[loggedInUser].answers,
                    [qid]: answer
                  }
                }
            };

        default: 
            return state
    }
};
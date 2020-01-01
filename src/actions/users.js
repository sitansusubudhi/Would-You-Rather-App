export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const SET_USER_ANSWER = 'SET_USER_ANSWER';

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addUserQuestion({author, id}) {
    return {
        type: ADD_USER_QUESTION,
        authedUser: author,
        id,
    }
}

export function setUserAnswer({authedUser, qid, answer}) {
    return {
        type: SET_USER_ANSWER,
        authedUser,
        qid,
        answer
    }
}
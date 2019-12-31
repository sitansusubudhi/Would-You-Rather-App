export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';


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
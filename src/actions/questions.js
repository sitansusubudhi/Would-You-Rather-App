import { saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { addUserQuestion } from '../actions/users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SET_ANSWER = 'SET_ANSWER';


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion({ author, optionOneText, optionTwoText }) {
    return (dispatch) => {

        dispatch(showLoading());

        return saveQuestion({
            author,
            optionOneText,
            optionTwoText
        })
        .then((question) => {
            dispatch(addQuestion(question));
            dispatch(addUserQuestion(question));
        })
        .then(() => dispatch(hideLoading()))
    }
}




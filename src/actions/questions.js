import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { addUserQuestion, setUserAnswer } from '../actions/users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SET_QUESTION_ANSWER = 'SET_QUESTION_ANSWER';


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
};

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
            dispatch(addUserQuestion(question)); // dispatching addUserQuestion action creator to update question in users part of state as well
        })
        .then(() => dispatch(hideLoading()));
    }
};

export function setQuestionAnswer({authedUser, qid, answer}) {
    return {
        type: SET_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
};

export function handleSetQuestionAnswer({authedUser, qid, answer}) {
    return (dispatch) => {

        dispatch(showLoading());
        dispatch(setQuestionAnswer({authedUser, qid, answer}));
        dispatch(setUserAnswer({authedUser, qid, answer})); // dispatching setUserAnswer action creator to set question's answer in users part of state as well

        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
        .catch((e) => {
                console.warn('Error in handleSetQuestionAnswer: ', e);
                alert('There was an error saving the answer. Try again.');
        })
        .then(() => dispatch(hideLoading()));
    }
};




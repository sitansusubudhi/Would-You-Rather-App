import { RECEIVE_QUESTIONS, ADD_QUESTION, SET_QUESTION_ANSWER } from '../actions/questions';

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS: 
            return {
                ...state,
                ...action.questions
            };

        case ADD_QUESTION:
            const { question } = action;
            const { id } = question;

            return {
                ...state,
                [id]: question
            };
        
        case SET_QUESTION_ANSWER:
            const { authedUser, qid, answer } = action;
            return {
                ...state,
                [qid]: {
                  ...state[qid],
                  [answer]: {
                    ...state[qid][answer],
                    votes: state[qid][answer].votes.concat([authedUser])
                  }
                }
            };

        default: 
            return state;
    }
}
import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA';

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }));
}

/**
 * Using getInitialData, we would be 
 * getting the users and questions at 
 * the mount of App component. 
 * We won't need to call 
 * getUsers and getQuestions separately. 
 * In this way, we optimize by not creating 
 * multiple API calls every time 
 * Dashboard Component mounts.
 */

export function getUsers () {
  return _getUsers();
}

export function getQuestions () {
  return _getQuestions();
}



export function saveQuestion(info) {
  return _saveQuestion(info);
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';
import UnansweredQs from './UnansweredQs';
import AnsweredQs from './AnsweredQs';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { authedUser, users, questions } = this.props;  // Destructuring to obtain all variables passed as props
   
    // If authedUser is not set, redirect user to Login page.
    if (!authedUser) {
      return <Redirect to={process.env.PUBLIC_URL + '/'} />;
    }
    
    const answeredQuestions = Object.keys(users[authedUser].answers);
    // Sorted by most recently created
    const unansweredQuestions = questions.filter(question => answeredQuestions.indexOf(question) === -1); 
    const answeredQuestionsSorted = questions.filter(question => unansweredQuestions.indexOf(question) === -1);

    // Show the unansweredQuestions in Unanswered Questions Tab
    // Show the answeredQuestionsSorted in Answered Questions Tab
    const panes = [
      { 
        menuItem: 'Unanswered Questions',
        render: () => 
          <Tab.Pane>
            <UnansweredQs unansweredQuestions={unansweredQuestions} />
          </Tab.Pane> 
      },
      { 
        menuItem: 'Answered Questions',
        render: () => 
          <Tab.Pane>
            <AnsweredQs answeredQuestions={answeredQuestionsSorted} />
          </Tab.Pane>
      }
    ];

    return (
      <div>
        {/**
         * Populate the panes attribute of Tab Component with values obtained from props.
         */}
        <Tab
          menu={{ 
            fluid: true,
            pointing: true,
            vertical: true,
            tabular: true
          }}
          panes={panes}
        />
      </div>
    )
  }
};

/**
 * @description Returns authedUser, users and questions as props to the App Component.
 * @param {object} state - the current state of the Redux store
 * @param {string} state.authedUser - the state object is destructured to provide the 'authedUser'
 * @param {object} state.users - the state object is destructured to provide all the users present in the database.
 * @param {object} state.questions - the state object is destructured to provide all the questions present in the database.
 * @returns {object} object -  The plain JS object merged into component's props.
 * @returns {object} object.users - Return users object from the state
 * @returns {string[]} object.questions - Array of question ids sorted by most recently created.
 */
function mapStateToProps({ authedUser, users, questions }) {

  return {
    authedUser,
    users,
    questions: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  };
}

// Connects the Dashboard component to the Redux store. 
export default connect(mapStateToProps)(Dashboard);
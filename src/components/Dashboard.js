import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';
import UnansweredQs from './UnansweredQs';
import AnsweredQs from './AnsweredQs';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { authedUser, users, questions } = this.props;
   
    if (!authedUser) {
      return <Redirect to='/' />
    }
    
    const answeredQuestions = Object.keys(users[authedUser].answers);
    const unansweredQuestions = questions.filter(question => answeredQuestions.indexOf(question) === -1);
    // console.log('Questions in Dashboard' , questions);
    // console.log('Unanswered in Dashboard' , unansweredQuestions);
    // console.log('Answered in Dashboard' , answeredQuestions);

    const panes = [
      { menuItem: 'Unanswered Questions', render: () => <Tab.Pane><UnansweredQs unansweredQuestions={unansweredQuestions} /></Tab.Pane> },
      { menuItem: 'Answered Questions', render: () => <Tab.Pane><AnsweredQs answeredQuestions={answeredQuestions} /></Tab.Pane> }
    ]

    return (
      <div>
        <Tab
          menu={{ fluid: true, pointing: true, vertical: true, tabular: true }}
          panes={panes}
        />
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {

  return {
    authedUser,
    users,
    questions: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard) 
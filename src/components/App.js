import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import Login from './Login';
import NavMenu from './NavMenu';
import QuestionPage from './QuestionPage';
import ResultPage from './ResultPage';
import Leaderboard from './Leaderboard';
import NewPoll from './NewPoll';
import NoMatchPage from './NoMatchPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        <div className='container'>
          {this.props.userNotLogged === true
            ? <Login />
            : <div>
              {/* <NavMenu /> */}
              {/* <Dashboard /> */}
              {/* <QuestionPage match={{params: {id: '6ni6ok3ym7mf1p33lnez'}}}/> */}
              {/* <ResultPage match={{params: {id: '6ni6ok3ym7mf1p33lnez'}}}/> */}
              {/* <Leaderboard /> */}
              {/* <NewPoll /> */}
              <NoMatchPage />
            </div>}
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    userNotLogged: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
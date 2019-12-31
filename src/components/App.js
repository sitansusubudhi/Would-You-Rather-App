import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import NavMenu from './NavMenu';
import QuestionPage from './QuestionPage';
import Leaderboard from './Leaderboard';
import NewPoll from './NewPoll';
import NoMatchPage from './NoMatchPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
      <Fragment>
        <div className='container'>
          {this.props.userNotLogged === true
            ? <Login />
            : <div>
              <NavMenu />
              <Switch>
                <Route path="/" exact>
                  <Dashboard />
                </Route>
                <Route path='/questions/:question_id' component={QuestionPage} />
                <Route path="/add">
                  <NewPoll />
                </Route>
                <Route path="/leaderboard">
                  <Leaderboard />
                </Route>
                <Route>
                  <NoMatchPage />
                </Route>
              </Switch>
            </div>}
        </div>
      </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    userNotLogged: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
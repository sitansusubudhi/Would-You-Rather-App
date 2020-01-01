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
import LoadingBar from 'react-redux-loading';

class App extends Component {
  // Use props.dispatch (received by connected component) to dispatch action for fetching initial data
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
           {/**
           * Display Loading bar while fetching initial data
           */}
          <LoadingBar />
          <div className='container'>
            {/* Display Login page if the user is not logged in */}
            {this.props.userNotLogged === true
              ? <Login /> 
              : this.props.loading === true
                ? null
                : <div>
                    <NavMenu />
                    {/**
                     * Allow React router to render components based on URL paths.
                     * If no path gets matched, then the NoMatchPage component gets displayed.
                     */}
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
};

/**
 * @description Returns userNotLogged as props to the App Component. It uses the 'authedUser' part of state to check if user is logged in.
 * @param {object} state - the current state of the Redux store
 * @param {string} state.authedUser - the state object is destructured to provide the 'authedUser'
 * @returns {object} object - The plain JS object merged into component's props.
 * @returns {boolean} object.userNotLogged - return true if the user is logged in and false if not
 */
function mapStateToProps({ authedUser }) {
  return {
    // Check if authedUser is null
    userNotLogged: authedUser === null
  };
}

// Connects the App component to the Redux store. Any time the store is updated, mapStateToProps will be called.
export default connect(mapStateToProps)(App);
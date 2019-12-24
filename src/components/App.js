import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import Login from './Login';
import { Container, Header, List } from "semantic-ui-react";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
        <Fragment>
          <LoadingBar />
          <div className='container'>
            {this.props.useNotLogged === true
              ? <Login />
              : <div>
                <Dashboard />
              </div>}
          </div>
        </Fragment>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    useNotLogged: authedUser === ''
  }
}

export default connect(mapStateToProps)(App)
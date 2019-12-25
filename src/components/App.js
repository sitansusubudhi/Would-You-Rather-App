import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import Login from './Login';
import { Container, Header, List } from "semantic-ui-react";
import NavMenu from './NavMenu';

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
                <NavMenu />
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
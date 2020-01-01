import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Image, Menu, Segment } from 'semantic-ui-react';
import { setAuthedUser } from '../actions/authedUser';
import { Redirect, withRouter } from 'react-router-dom';

class NavMenu extends Component {
   
    /**
     * @description Logs out the user by dispatching setAuthedUser(null) action creator. Redirects user to login page
     * @param {object} e - event object
     */
    handleAuthUserLogout = e => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(null));
        this.props.history.push('/');
    };

    render() {
        const { authedUser, users } = this.props; // Destructuring to obtain authedUser and users passed as props
        
        // If authedUser is not set to some truthy value, don't show this component and redirect user to login page
        if (!authedUser) {
            return <Redirect to='/' />;
        }
        
        return (
            <Fragment>
                <Segment inverted>
                    <Menu inverted pointing secondary>
                        {/**
                         * For Menu Option "Home", if clicked navigate to Dashboard view (user to be logged in)
                         */}
                        <Menu.Item
                            name='home'
                            as={NavLink} to="/" exact />
                        {/**
                         * For Menu Option "New Poll", if clicked navigate to New Poll view which is at "/add" route
                         */}
                        <Menu.Item
                            name='new poll'
                            as={NavLink} to="/add" />
                        {/**
                         * For Menu Option "Leaderboard", if clicked navigate to Leaderboard view present at "/leaderboard" route
                         */}
                        <Menu.Item
                            name='leaderboard'
                            as={NavLink} to="/leaderboard" />

                        {/**
                         * Display Logged in user's name and avatar to the right side of Navigation Menu.
                         */}
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                Hello, {users[authedUser].name}
                            </Menu.Item>
                            <Image src={users[authedUser].avatarURL} avatar />

                            {/**
                             * Allow user to logout if clicked on Logout menu item.
                             */}
                            <Menu.Item
                                name='logout'
                                onClick={this.handleAuthUserLogout} />
                        </Menu.Menu>
                    </Menu>
                </Segment>
            </Fragment>
        )
    }
};

/**
 * @description Returns authedUser and users from Redux store state
 * @param {object} state - the current state of the Redux store
 * @param {string} state.authedUser - the state object is destructured to provide the 'authedUser'
 * @param {object} state.users - the state object is destructured to provide all the users present in the database.
 * @returns {object} object -  The plain JS object merged into component's props.
 * @param {string} state.authedUser - Return authedUser value from the state
 * @returns {object} object.users - Return users object from the state
 */
function mapStateToProps({ authedUser, users }) {

    return {
        authedUser,
        users
    };
}

// Connects the NavMenu component to the Redux store.
// withRouter passes the history props to the wrapped component NavMenu.
export default withRouter(connect(mapStateToProps)(NavMenu));
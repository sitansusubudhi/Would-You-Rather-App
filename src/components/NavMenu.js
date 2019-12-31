import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Image, Menu, Segment } from 'semantic-ui-react';
import { setAuthedUser } from '../actions/authedUser';
import { Redirect, withRouter } from 'react-router-dom';

class NavMenu extends Component {
    state = { activeItem: '' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleAuthUserLogout = e => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(null));
        this.props.history.push('/');
    };

    render() {
        const { activeItem } = this.state;
        const { authedUser, users } = this.props;
        
        if (!authedUser) {
            return <Redirect to='/' />
        }
        
        return (
            <Fragment>
                <Segment inverted>
                    <Menu inverted pointing secondary>
                        <Menu.Item
                            name='home'
                            active={activeItem === 'home'}
                            as={NavLink} to="/" exact
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='new poll'
                            active={activeItem === 'new poll'}
                            as={NavLink} to="/add"
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='leaderboard'
                            active={activeItem === 'leaderboard'}
                            as={NavLink} to="/leaderboard"
                            onClick={this.handleItemClick}
                        />
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                Hello, {users[authedUser].name}
                            </Menu.Item>
                            <Image src={users[authedUser].avatarURL} avatar />

                            <Menu.Item
                                name='logout'
                                active={activeItem === 'logout'}
                                onClick={this.handleAuthUserLogout}
                            />
                        </Menu.Menu>
                    </Menu>
                </Segment>
            </Fragment>
        )
    }
}

function mapStateToProps({ authedUser, users }) {

    return {
        authedUser,
        users
    };
}

export default withRouter(connect(mapStateToProps)(NavMenu));
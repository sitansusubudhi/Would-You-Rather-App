import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Image, Menu, Segment } from 'semantic-ui-react';
import { setAuthedUser } from '../actions/authedUser';

class NavMenu extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleAuthUserLogout = e => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(null));
    };

    render() {
        const { activeItem } = this.state;
        const { authedUser, users } = this.props;
        const greetings = `Hello, ${users[authedUser].name}`;

        return (
            <Fragment>
                <Segment inverted>
                    <Menu inverted pointing secondary>
                        <Menu.Item
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='new poll'
                            active={activeItem === 'new poll'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='leaderboard'
                            active={activeItem === 'leaderboard'}
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

export default connect(mapStateToProps)(NavMenu);
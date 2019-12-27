import React, { Component, Fragment } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

class NavMenu extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

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
                            <Menu.Item
                                name='logout'
                                active={activeItem === 'logout'}
                                onClick={this.handleItemClick}
                            />
                        </Menu.Menu>
                    </Menu>
                </Segment>
            </Fragment>
        )
    }
}

export default NavMenu;
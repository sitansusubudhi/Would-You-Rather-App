import React, { Component } from 'react';
import { Header, Icon, Segment, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class NoMatchPage extends Component {

    handlePageNoMatch = e => {
        e.preventDefault();
        this.props.history.push('/');
    };

    render() {
        return (
            <Segment placeholder>
                <Header as='h2' icon>
                    <Icon name='settings' />
                    404 - Not Found
                    <Header.Subheader>
                        The page link seems to be broken. Try to log in again.
                    </Header.Subheader>
                </Header>
                <Button
                    color='black'
                    onClick={this.handlePageNoMatch}>
                    Go Home
                </Button>
            </Segment>
        );
    }
}

export default withRouter(NoMatchPage);

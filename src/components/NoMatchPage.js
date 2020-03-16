import React, { Component } from 'react';
import { 
    Header,
    Icon,
    Segment,
    Button
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class NoMatchPage extends Component {

    /**
     * @description Allow the user to go to Dashboard view.
     * @param {object} e - event object
     */
    handlePageNoMatch = e => {
        e.preventDefault();
        // history passed as props to current component by using withRouter higher-order component
        this.props.history.push(process.env.PUBLIC_URL + '/');
    };

    render() {
        return (
            <Segment placeholder>
                <Header as='h2' icon>
                    <Icon name='settings' />
                    404 - Not Found
                    <Header.Subheader>
                        The page link seems to be broken. Click below to go to Home.
                    </Header.Subheader>
                </Header>
                {/**
                 * Allow user to go to Dashboard View on click of the Go Home button
                 */}
                <Button
                    color='black'
                    onClick={this.handlePageNoMatch}>
                    Go Home
                </Button>
            </Segment>
        );
    }
};

// withRouter passes the history props to the wrapped component NoMatchPage.
export default withRouter(NoMatchPage);

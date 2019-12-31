import React from 'react';
import { Header, Icon, Segment, Button } from 'semantic-ui-react';

const NoMatchPage = () => (
    <Segment placeholder>
        <Header as='h2' icon>
            <Icon name='settings' />
            404 - Not Found
            <Header.Subheader>
                The page link seems to be broken. Try to log in again.
            </Header.Subheader>
        </Header>
        <Button color='black'>Login</Button>
    </Segment>

);

export default NoMatchPage;

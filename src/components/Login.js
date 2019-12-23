import React from 'react';
import { Dropdown, Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const friendOptions = [
    {
        key: 'Jenny Hess',
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
    },
    {
        key: 'Elliot Fu',
        text: 'Elliot Fu',
        value: 'Elliot Fu',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
    },
    {
        key: 'Stevie Feliciano',
        text: 'Stevie Feliciano',
        value: 'Stevie Feliciano',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg' },
    },
    {
        key: 'Christian',
        text: 'Christian',
        value: 'Christian',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg' },
    },
    {
        key: 'Matt',
        text: 'Matt',
        value: 'Matt',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg' },
    },
    {
        key: 'Justen Kitsune',
        text: 'Justen Kitsune',
        value: 'Justen Kitsune',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg' },
    },
]

const Login = () => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 500 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Message size='small'>
                    Welcome to the Would You Rather App
                </Message>
            </Header>
            <Form size='large'>
                <Segment >
                    <Form.Field>
                        <Dropdown
                            placeholder='Select user to log in'
                            fluid
                            selection
                            options={friendOptions}
                        />
                    </Form.Field>
                    <Button color='teal' fluid size='large'>
                        Login
                    </Button>
                </Segment>
            </Form>
        </Grid.Column>
    </Grid>
)

export default Login

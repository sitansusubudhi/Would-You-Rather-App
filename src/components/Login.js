import React, { Component } from 'react';
import { Dropdown, Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
    state = {
        value: ''
    }

    handleChange = (e, { value }) => {
        this.setState(() => ({
            value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { value } = this.state
        const { dispatch, users } = this.props
        dispatch(setAuthedUser(value))
    }

    render() {
        const { users } = this.props;
        const userOptions = Object.keys(users).map(userID => {
            const user = users[userID];

            return {
                key: user.id,
                text: user.name,
                value: user.id,
                image: {avatar: true, src: user.avatarURL}
            };
        });

        const { value } = this.state;
        return (
            <Grid 
                textAlign='center' 
                style={{ height: '100vh' }} 
                verticalAlign='middle'>

                <Grid.Column style={{ maxWidth: 500 }}>
                    <Header 
                        as='h3' 
                        color='teal' 
                        textAlign='center'>
                        <Message size='large'>
                            Welcome to the Would You Rather App
                        </Message>
                    </Header>
                    <Form size='large' onSubmit={this.handleSubmit}>
                        <Segment >
                            <Form.Field>
                                <Dropdown
                                    placeholder='Select user to log in'
                                    fluid
                                    selection
                                    onChange={this.handleChange} 
                                    value={value}
                                    options={userOptions}
                                />
                            </Form.Field>
                            <Button 
                                color='black' 
                                fluid size='large'
                                disabled={value === ''} >
                                Login
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login);

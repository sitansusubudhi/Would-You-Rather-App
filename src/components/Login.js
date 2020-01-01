import React, { Component } from 'react';
import { 
    Dropdown,
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
     /**
     * value - The select dropdown choice value
     */
    state = {
        value: ''
    };

    /**
     * @description Set the selected user from the dropdown by setState.
     * @param {object} e - event object
     * @param {string} object.value - Contains user id of the selected user
     */
    handleChange = (e, { value }) => {
        this.setState(() => ({
            value
        }));
    };

    /**
     * @description Allows user to login by dispatching setAuthedUser action creator.
     * @param {object} e - event object
     */
    handleSubmit = (e) => {
        e.preventDefault();

        const { value } = this.state; // Destructuring to obtain state value
        const { dispatch } = this.props; // Destructuring to obtain dispatch function from props
        dispatch(setAuthedUser(value));
    };

    render() {
        const { users } = this.props; // Destructuring to obtain users passed as props
        const userOptions = Object.keys(users).map(userID => {
            const user = users[userID];
            // For each userID, store the below attributes as an object element in userOptions array
            return {
                key: user.id,
                text: user.name,
                value: user.id,
                image: {avatar: true, src: user.avatarURL}
            };
        });

        const { value } = this.state; // Destructuring to obtain state value
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
                                {/**
                                 * Use the userOptions array to populate the options for Dropdown component
                                 */}
                                <Dropdown
                                    placeholder='Select user to log in'
                                    fluid
                                    selection
                                    onChange={this.handleChange} 
                                    value={value}
                                    options={userOptions} />
                            </Form.Field>
                            {/**
                             * Button is disabled if no user is selected from dropdown.
                             */}
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
};

/**
 * @description Returns users as props to the Login Component. It uses the 'users' data of Redux store
 * @param {object} state - the current state of the Redux store
 * @param {object} state.users - the state object is destructured to provide all the users present in the database.
 * @returns {object} object - The plain JS object merged into component's props.
 * @returns {object} object.users - Return users object from the state
 */
function mapStateToProps({ users }) {
    return {
        users
    };
}

// Connects the Login component to the Redux store. Any time the store is updated, mapStateToProps will be called.
export default connect(mapStateToProps)(Login);

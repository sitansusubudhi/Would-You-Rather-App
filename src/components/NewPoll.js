import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Form,
    Header,
    Icon,
    Message,
    Segment,
} from 'semantic-ui-react';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from "react-router-dom";

class NewPoll extends Component {
     /**
     * optionOneValue - The text value from Option one input
     * optionTwoValue - The text value from Option two input
     * toHome - Boolean value (Initial value - false). If true, Redirect user to show Dashboard view
     */
    state = {
        optionOneValue: '',
        optionTwoValue: '',
        toHome: false,
    };

    /**
     * @description Set the text value for any change of text in Option one input or Option two input.
     * @param {object} e - event object
     * @param {string} object.value - Contains text of the selected option input
     */
    handleChange = (e, { value }) => {
        const { name } = e.target;
        this.setState(() => ({
            [name]: value
        }));
    };

    /**
     * @description Saves the question with option values to the database. Sets toHome to true to show Dashboard view.
     * @param {object} e - event object
     */
    handleSubmit = (e) => {
        e.preventDefault();
        const { authedUser, dispatch } = this.props;
        const { optionOneValue, optionTwoValue } = this.state;

        // Allows user to save Question by dispatching handleAddQuestion action creator.
        dispatch(handleAddQuestion({
            author: authedUser,
            optionOneText: optionOneValue,
            optionTwoText: optionTwoValue
        }));
        // Update toHome property in state
        this.setState((prevState) => ({
            ...prevState,
            toHome: true,
        }));
    };


    render() {

        const { optionOneValue, optionTwoValue, toHome } = this.state; // Destructuring to obtain variables from state

        // if toHome is set, redirect user to Dashboard view
        if (toHome === true) {
            return <Redirect to={process.env.PUBLIC_URL + '/'} />;
        }
        return (
            <Segment attached>
                <Message
                    header='Create a new poll'
                    size='large'/>
                <Message info>
                    <p>Fill out the form below to create a new poll</p>
                </Message>

                <Form className='fluid segment' onSubmit={this.handleSubmit}>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='question' circular />
                        <Header.Content>
                            Would you rather
                        </Header.Content>
                    </Header>
                    <Form.Group widths='equal'>
                        <Form.Input
                            name='optionOneValue'
                            fluid
                            inline
                            label='Set option one'
                            className='center'
                            placeholder='Enter option one text here'
                            onChange={this.handleChange}
                            value={optionOneValue} />
                        <Form.Input
                            name='optionTwoValue'
                            fluid
                            inline
                            label='Set option two'
                            className='center'
                            placeholder='Enter option two text here'
                            onChange={this.handleChange}
                            value={optionTwoValue} />
                    </Form.Group>
                    {/**
                     * The button will be disabled if any one of the options is blank or contains only spaces.
                     */}
                    <Form.Button
                        fluid
                        color='black'
                        disabled={optionOneValue.trim() === '' || optionTwoValue.trim() === ''}>
                        Submit
                    </Form.Button>
                </Form>
            </Segment>
        );
    }
}

/**
 * @description Returns authedUser part of state from Redux store
 * @param {object} state - the current state of the Redux store
 * @param {string} state.authedUser - the state object is destructured to provide the 'authedUser'
 * @returns {object} object -  The plain JS object merged into component's props.
 * @param {string} state.authedUser - Return authedUser value from the state
 */
function mapStateToProps({ authedUser }) {

    return {
        authedUser,
    };
}

// Connects the NewPoll component to the Redux store.
export default connect(mapStateToProps)(NewPoll);
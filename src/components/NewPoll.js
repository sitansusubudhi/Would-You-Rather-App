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
    state = {
        optionOneValue: '',
        optionTwoValue: '',
        toHome: false,
    };

    handleChange = (e, { value }) => {
        const { name } = e.target;
        this.setState(() => ({
            [name]: value
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { authedUser, dispatch } = this.props;
        const { optionOneValue, optionTwoValue } = this.state;
        dispatch(handleAddQuestion({
            author: authedUser,
            optionOneText: optionOneValue,
            optionTwoText: optionTwoValue
        }));
        this.setState((prevState) => ({
            ...prevState,
            toHome: true,
        }));
    };


    render() {

        const { optionOneValue, optionTwoValue, toHome } = this.state;

        if (toHome === true) {
            return <Redirect to='/' />;
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

function mapStateToProps({ authedUser, users }) {

    const { avatarURL } = users[authedUser];

    return {
        authedUser,
        avatarURL
    };
}

export default connect(mapStateToProps)(NewPoll);
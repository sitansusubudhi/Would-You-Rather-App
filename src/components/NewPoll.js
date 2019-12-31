import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Form,
    Message,
    Segment,
} from 'semantic-ui-react';

class NewPoll extends Component {
    state = {
        optionOneValue: '',
        optionTwoValue: '',
    }

    handleChange = (e, { value }) => {
        const { name } = e.target;
        console.log('change ', name, value);
        this.setState(() => ({
            [name]: value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()


    }


    render() {

        const { optionOneValue, optionTwoValue } = this.state;
        return (
            <Segment attached>
                <Message
                    header='Create a new poll'
                    size='large'
                />
                <Message info>
                    <p>Fill out the form below to create a new poll</p>
                </Message>
                <Form className='fluid segment' onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input 
                            name='optionOneValue' 
                            fluid 
                            label='Option one' 
                            placeholder='Enter option one text here'
                            onChange={this.handleChange}
                            value={optionOneValue}
                            />
                        <Form.Input 
                            name='optionTwoValue' 
                            fluid 
                            label='Option two' 
                            placeholder='Enter option two text here' 
                            onChange={this.handleChange}
                            value={optionTwoValue}
                            />
                    </Form.Group>
                </Form>
                <Button
                    fluid
                    color='black'
                    disabled={optionOneValue.trim() === '' || optionTwoValue.trim() === ''}>
                    Submit
                </Button>
            </Segment>
        );
    }
}

function mapStateToProps({ authedUser }) {


    return {
        authedUser
    };
}

export default connect(mapStateToProps)(NewPoll)
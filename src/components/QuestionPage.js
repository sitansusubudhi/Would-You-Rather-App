import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Divider, Header, Icon, Item, Label, Segment } from 'semantic-ui-react';

class QuestionPage extends Component {
    state = {
        optionOneActive: false,
        optionTwoActive: false
    }
    handleClickOptionOne = () => {
        this.setState((prevState) => ({
            optionOneActive: prevState.optionOneActive ? false : true,
            optionTwoActive: prevState.optionTwoActive ? false : false
        }))
    }
    handleClickOptionTwo = () => {
        this.setState((prevState) => ({
            optionOneActive: prevState.optionOneActive ? false : false,
            optionTwoActive: prevState.optionTwoActive ? false : true
        }))
    }


    render() {

        const { optionOneActive, optionTwoActive } = this.state;
        const { user, question } = this.props;
        if (question === null) {
            return <p>This question doesn't exist</p>
        }

        const { author, timestamp, id, optionOne, optionTwo } = question;
        const { name, avatarURL } = user;

        return (
            <Segment.Group>
                <Segment>
                    <Header as='h3'>
                        {name} asks:
                    </Header>
                </Segment>
                <Segment>
                    <Item.Group divided>
                        <Item>
                            <Item.Image src={avatarURL} />

                            <Item.Content verticalAlign='middle'>
                                {/* <Item.Header textAlign='center'>Would you rather .. </Item.Header> */}
                                <Segment textAlign='center'>
                                    <Header as='h3'>Would you rather .. </Header>

                                    <Divider section />
                                    <Button.Group size='large'>
                                        <Button toggle active={optionOneActive} onClick={this.handleClickOptionOne}>{optionOne.text}</Button>
                                        <Button.Or />
                                        <Button toggle active={optionTwoActive} onClick={this.handleClickOptionTwo}>{optionTwo.text}</Button>
                                    </Button.Group>
                                </Segment>
                                <Item.Extra>
                                    <Button disabled={!optionOneActive && !optionTwoActive} color='black' floated='right'>
                                        Submit
                                        <Icon name='right chevron' />
                                    </Button>
                                </Item.Extra>
                            </Item.Content>
                            
                        </Item>
                    </Item.Group>
                    
                </Segment>
            </Segment.Group>
        );
    }
}

function mapStateToProps({ users, questions }, { id }) {
    const question = questions[id];
    const user = users[question.author];

    return {
        user,
        question
    };
}

export default connect(mapStateToProps)(QuestionPage)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Divider,
    Header,
    Icon,
    Item,
    Segment
} from 'semantic-ui-react';
import ResultPage from './ResultPage';
import NoMatchPage from './NoMatchPage';
import { handleSetQuestionAnswer } from '../actions/questions';

class QuestionPage extends Component {
    state = {
        optionOneActive: false,
        optionTwoActive: false
    };
    handleClickOptionOne = () => {
        this.setState((prevState) => ({
            optionOneActive: prevState.optionOneActive ? false : true,
            optionTwoActive: prevState.optionTwoActive ? false : false
        }))
    };

    handleClickOptionTwo = () => {
        this.setState((prevState) => ({
            optionOneActive: prevState.optionOneActive ? false : false,
            optionTwoActive: prevState.optionTwoActive ? false : true
        }))
    };

    handleResult = (e) => {
        e.preventDefault();
        const { optionOneActive, optionTwoActive } = this.state;
        const { question, loggedInUser, dispatch } = this.props;

        let result;
        if (optionOneActive) {
            result = 'optionOne';
        } else if (optionTwoActive) {
            result = 'optionTwo';
        } else {
            result = '';
        }

        if (result) {
            dispatch(handleSetQuestionAnswer({
                authedUser: loggedInUser.id,
                qid: question.id,
                answer: result
            }));
        }
    };

    render() {

        const { optionOneActive, optionTwoActive } = this.state;
        const { user, question, loggedInUser } = this.props;
        if (question === null) {
            return <NoMatchPage />;
        }

        const { id, optionOne, optionTwo } = question;
        const { name, avatarURL } = user;

        if (id in loggedInUser.answers) {
            return <ResultPage id={id} />
        }

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
                                <Segment textAlign='center'>
                                    <Header as='h3'>
                                        Would you rather .. 
                                    </Header>

                                    <Divider section />
                                    <Button.Group size='large'>
                                        <Button toggle active={optionOneActive} onClick={this.handleClickOptionOne}>{optionOne.text}</Button>
                                        <Button.Or />
                                        <Button toggle active={optionTwoActive} onClick={this.handleClickOptionTwo}>{optionTwo.text}</Button>
                                    </Button.Group>
                                </Segment>
                                <Item.Extra>
                                    <Button 
                                        disabled={!optionOneActive && !optionTwoActive} 
                                        color='black' 
                                        floated='right'
                                        onClick={this.handleResult}>
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

function mapStateToProps({ authedUser, users, questions }, props) {

    const id = props.match.params.question_id;
    const loggedInUser = users[authedUser];

    if (!(id in questions)) {
        return {
            user: null,
            question: null,
            loggedInUser
        }
    }

    const question = questions[id];
    const user = users[question.author];
    

    return {
        user,
        question,
        loggedInUser
    };
}

export default connect(mapStateToProps)(QuestionPage);
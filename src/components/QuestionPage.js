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
    /**
     * optionOneActive - boolean value indicating if Option one is selected
     * optionTwoActive - boolean value indicating if Option two is selected
     */
    state = {
        optionOneActive: false,
        optionTwoActive: false
    };

    /**
     * @description Toggles the button for option one. If option one is active, option two is inactive
     */
    handleClickOptionOne = () => {
        this.setState((prevState) => ({
            optionOneActive: prevState.optionOneActive ? false : true,
            optionTwoActive: prevState.optionTwoActive ? false : false
        }))
    };

    /**
     * @description Toggles the button for option two. If option two is active, option one is inactive
     */
    handleClickOptionTwo = () => {
        this.setState((prevState) => ({
            optionOneActive: prevState.optionOneActive ? false : false,
            optionTwoActive: prevState.optionTwoActive ? false : true
        }))
    };

     /**
     * @description Saves the question's answer to the database with required results.
     * @param {object} e - event object
     */
    handleResult = (e) => {
        e.preventDefault();
        const { optionOneActive, optionTwoActive } = this.state; // Destructuring to obtain optionOneActive and optionTwoActive from state
        const { question, loggedInUser, dispatch } = this.props; // Destructuring to obtain all variables received as props

        let result;
        // Set result variable
        if (optionOneActive) {
            result = 'optionOne';
        } else if (optionTwoActive) {
            result = 'optionTwo';
        } else {
            result = '';
        }

        // Allows user to save Question's answer by dispatching handleSetQuestionAnswer action creator.
        if (result) {
            dispatch(handleSetQuestionAnswer({
                authedUser: loggedInUser.id,
                qid: question.id,
                answer: result
            }));
        }
    };

    render() {

        const { optionOneActive, optionTwoActive } = this.state; // Destructuring to obtain optionOneActive and optionTwoActive from state
        const { user, question, loggedInUser } = this.props; // Destructuring to obtain all variables received as props
        
        // If question received as props is null, then show the NoMatchPage component (404 - Not Found page)
        if (question === null) {
            return <NoMatchPage />;
        }

        const { id, optionOne, optionTwo } = question; // Destructuring the question variable to obtain id, optionOne and optionTwo text
        const { name, avatarURL } = user; // Destructure user to obtain name and avatarURL

        // If the user has Submitted the answer for the Question, display the ResultPage for the same question id
        if (id in loggedInUser.answers) {
            return <ResultPage id={id} />;
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
                            {/**
                             * Prepend . to go back to public directory
                             * avatarURL = './images/rhaul-v-alva-jCM48W7y6Y8-unsplash.jpg';
                             */}
                            <Item.Image src={'.'+ avatarURL} />

                            <Item.Content verticalAlign='middle'>
                                <Segment textAlign='center'>
                                    <Header as='h3'>
                                        Would you rather .. 
                                    </Header>

                                    <Divider section />
                                    <Button.Group size='large'>
                                        <Button 
                                            toggle
                                            active={optionOneActive}
                                            onClick={this.handleClickOptionOne}>
                                                {optionOne.text}
                                        </Button>
                                        <Button.Or />
                                        <Button
                                            toggle
                                            active={optionTwoActive}
                                            onClick={this.handleClickOptionTwo}>
                                                {optionTwo.text}
                                        </Button>
                                    </Button.Group>
                                </Segment>
                                <Item.Extra>
                                    {/**
                                     * If none of the options is selected, disable the Submit button
                                     */}
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

/**
 * @description Returns user(question's author), question, and loggedInUser objects as props to the QuestionPage Component.
 * @param {object} state - the current state of the Redux store
 * @param {string} state.authedUser - the state object is destructured to provide the 'authedUser'
 * @param {object} state.users - the state object is destructured to provide all the users present in the database.
 * @param {object} state.questions - the state object is destructured to provide all the questions present in the database.
 * @param {object} props - props passed to the Question component.
 * @returns {object} object -  The plain JS object merged into component's props.
 * @returns {object} object.user - Return user object containing the details of the question's author obtained from the state
 * @returns {object} object.question - Return question object containing the details of the question obtained from the state
 * @returns {object} object.loggedInUser - Return loggedInUser object containing the details of the logged in user obtained from the state
 */
function mapStateToProps({ authedUser, users, questions }, props) {

    // Retrieve the id from the current route "/questions/:question_id"
    const id = props.match.params.question_id;
    const loggedInUser = users[authedUser];

    // If the id matched is not present in any of the questions, return "null" for user and question properties.
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

// Connects the QuestionPage component to the Redux store.
export default connect(mapStateToProps)(QuestionPage);
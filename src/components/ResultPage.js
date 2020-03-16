import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Card,
    Header,
    Item,
    Label,
    Progress,
    Segment
} from 'semantic-ui-react';

// This component is used to show what is the current user's answer 
const UserOptionLabel = () => (
    <Label 
        as='a'
        color='blue'
        attached='bottom right'>
        Your choice
    </Label>
);

class ResultPage extends Component {

    render() {

        const {
            name,
            avatar,
            optionOne,
            optionOneVotes,
            optionOnePercent,
            optionTwo,
            optionTwoVotes,
            optionTwoPercent,
            totalVotes,
            userAnswer
        } = this.props; // Destructure props to obtain all variables

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
                            <Item.Image src={'.' + avatar} />
                            <Item.Content verticalAlign='middle'>
                                <Item.Header>
                                    Results:
                                </Item.Header>
                                <Item.Description>
                                    <Card.Group centered stackable>
                                        <Card fluid>
                                            <Card.Content>
                                                {/**
                                                 * Show Option one text for the question id
                                                 */}
                                                <Card.Header textAlign='center'>
                                                    Would you rather {optionOne} ?
                                                </Card.Header>

                                                <Segment>
                                                    {/**
                                                     * If current user's answer is optionOne, show UserOptionLabel on optionOne
                                                     */}
                                                    {userAnswer === 'optionOne' && <UserOptionLabel />}
                                                    {/**
                                                     * Display Percentage of votes who selected optionOne
                                                     */}
                                                    <Progress 
                                                        percent={optionOnePercent} 
                                                        color='green' 
                                                        progress>
                                                        {optionOneVotes} out of {totalVotes} votes
                                                    </Progress>
                                                </Segment>
                                            </Card.Content>
                                        </Card>
                                        <Card fluid>
                                            <Card.Content>
                                                {/**
                                                 * Show Option two text for the question id
                                                 */}
                                                <Card.Header textAlign='center'>
                                                    Would you rather {optionTwo} ?
                                                </Card.Header>
                                                <Segment>
                                                    {/**
                                                     * If current user's answer is optionTwo, show UserOptionLabel on optionTwo
                                                     */}
                                                    {userAnswer === 'optionTwo' && <UserOptionLabel />}
                                                    {/**
                                                     * Display Percentage of votes who selected optionTwo
                                                     */}
                                                    <Progress 
                                                        percent={optionTwoPercent}
                                                        color='green'
                                                        progress>
                                                        {optionTwoVotes} out of {totalVotes} votes
                                                    </Progress>
                                                </Segment>
                                            </Card.Content>
                                        </Card>
                                    </Card.Group>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment.Group>
        );
    }
}

/**
 * @description Returns name, avatar, optionOne, optionTwo, optionOneVotes, optionOnePercent, optionTwoVotes, optionTwoPercent, totalVotes, and userAnswer as props to the App Component.
 * @param {object} state - the current state of the Redux store
 * @param {string} state.authedUser - the state object is destructured to provide the 'authedUser'
 * @param {object} state.users - the state object is destructured to provide all the users present in the database.
 * @param {object} state.questions - the state object is destructured to provide all the questions present in the database.
 * @param {object} ownProps.id - the id of the question passed as props to the ResultPage component.
 * @returns {object} object -  The plain JS object merged into component's props.
 * @returns {string} object.name - Return question's author name
 * @returns {string} object.avatar - Return question's author avatar
 * @returns {string} object.optionOne - Return question's optionOne text
 * @returns {number} object.optionOneVotes - Return question's optionOne votes
 * @returns {number} object.optionOnePercent - Return question's optionOne vote percent
 * @returns {string} object.optionTwo - Return question's optionTwo text
 * @returns {number} object.optionTwoVotes - Return question's optionTwo votes
 * @returns {number} object.optionTwoPercent - Return question's optionTwo vote percent
 * @returns {number} object.totalVotes - Return question's totalVotes (optionOneVotes + optionTwoVotes)
 * @returns {string} object.userAnswer - Return loggedInUser's answer for the question id passed as props
 */
function mapStateToProps({ authedUser, users, questions }, { id }) {

    const loggedInUser = users[authedUser];
    const question = questions[id];
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePercent = ((100 * optionOneVotes) / totalVotes).toFixed(1);
    const author = users[question.author];

    return {
        name: author.name,
        avatar: author.avatarURL,
        optionOne: question.optionOne.text,
        optionOneVotes,
        optionOnePercent,
        optionTwo: question.optionTwo.text,
        optionTwoVotes,
        optionTwoPercent: (100 - optionOnePercent),
        totalVotes,
        userAnswer: loggedInUser.answers[id]
    };
}

// Connects the ResultPage component to the Redux store.
export default connect(mapStateToProps)(ResultPage);
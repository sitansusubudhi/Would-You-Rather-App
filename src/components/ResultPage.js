import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Header, Image, Item, Label, Progress, Segment } from 'semantic-ui-react';


const UserOptionLabel = () => (
    <Label as='a' color='blue' attached='bottom right'>
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
        } = this.props;

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
                            <Item.Image src={avatar} />
                            <Item.Content verticalAlign='middle'>
                                <Item.Header>
                                    Results:
                            </Item.Header>
                                <Item.Description>
                                    <Card.Group centered stackable>
                                        <Card fluid>
                                            <Card.Content>
                                                <Card.Header textAlign='center'>
                                                    Would you rather {optionOne} ?
                                            </Card.Header>

                                                <Segment>
                                                    {userAnswer === 'optionOne' && <UserOptionLabel />}
                                                    <Progress percent={optionOnePercent} color='green' progress>
                                                        {optionOneVotes} out of {totalVotes} votes
                                                </Progress>
                                                </Segment>
                                            </Card.Content>
                                        </Card>
                                        <Card fluid>
                                            <Card.Content>
                                                <Card.Header textAlign='center'>
                                                    Would you rather {optionTwo} ?
                                            </Card.Header>
                                                <Segment>
                                                    {userAnswer === 'optionTwo' && <UserOptionLabel />}
                                                    <Progress percent={optionTwoPercent} color='green' progress>
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

export default connect(mapStateToProps)(ResultPage)
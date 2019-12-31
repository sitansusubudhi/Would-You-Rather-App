import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item, Label, Segment, Table } from 'semantic-ui-react';

class Leaderboard extends Component {

    render() {

        const { leaders } = this.props;
        const ranks = [
            ['1st', 'yellow'],
            ['2nd', 'grey'],
            ['3rd', 'orange']
          ];
          
        return (
            <Segment>
            <Item.Group divided>
                {leaders.map((leader, index) => (
                    <Item key={leader.id}>
                    <Item.Image src={leader.avatar} />
                    
                    <Item.Content verticalAlign='middle'>
                      <Item.Header>
                        {leader.name}
                      </Item.Header>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Rank</Table.HeaderCell>
                                        <Table.HeaderCell>Questions answered</Table.HeaderCell>
                                        <Table.HeaderCell>Polls created</Table.HeaderCell>
                                        <Table.HeaderCell>Score</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                        <Label color={ranks[index][1]} tag>
                                                {ranks[index][0]}
                                        </Label>
                                        </Table.Cell>
                                        <Table.Cell>{leader.answersLength}</Table.Cell>
                                        <Table.Cell>{leader.questionsLength}</Table.Cell>
                                        <Table.Cell>{leader.totalScore}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                    </Item.Content>
                  </Item>
                ))}
            </Item.Group>
            </Segment>
        );
    }
}

function mapStateToProps({ users }) {
    const leaders = Object.keys(users).map(userID => {
        const user = users[userID];
        const noOfQues = user.questions.length;
        const noOfAns = Object.keys(user.answers).length;

        return {
            id: user.id,
            name: user.name,
            avatar: user.avatarURL,
            questionsLength: noOfQues,
            answersLength: noOfAns,
            totalScore: noOfQues + noOfAns
        }
    });

    return {
        leaders: leaders.sort((x, y) => (y.totalScore - x.totalScore)).slice(0, 3)
    };
}

export default connect(mapStateToProps)(Leaderboard)
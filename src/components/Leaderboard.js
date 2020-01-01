import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Item,
    Label,
    Segment,
    Table
} from 'semantic-ui-react';

class Leaderboard extends Component {

    render() {

        const { leaders } = this.props; // Destructuring to obtain leaders passed as props

        // Ranks array of length 3, where each element is an array of length 2
        // 1st index of the element indicates rank, 2nd index indicates color
        const ranks = [
            ['1st', 'yellow'],
            ['2nd', 'grey'],
            ['3rd', 'orange']
          ];
          
        return (
            <Segment>
                <Item.Group divided>
                     {/**
                     * leaders contains array of top 3 users.
                     * Hence we map over the array and render details for each user. 
                     * This includes Polls created, Questions answered, and total score.
                     */}
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
};

/**
 * @description Returns the top 3 ranked users based on the total score (Polls created + Polls answered)
 * @param {object} state - the current state of the Redux store
 * @param {object} state.users - the state object is destructured to provide all the users present in the database.
 * @returns {object} object -  The plain JS object merged into component's props.
 * @returns {object[]} object.leaders - Array of length 3. It contains top 3 ranked users.
 */
function mapStateToProps({ users }) {

    const leaders = Object.keys(users).map(userID => {
        const user = users[userID];
        const noOfQues = user.questions.length;
        const noOfAns = Object.keys(user.answers).length;

        // For each user, create an element with below attributes and store in leaders.
        return {
            id: user.id,
            name: user.name,
            avatar: user.avatarURL,
            questionsLength: noOfQues,
            answersLength: noOfAns,
            totalScore: noOfQues + noOfAns
        }
    });

    // Sort the array based on totalScore and return only top 3 users
    return {
        leaders: leaders.sort((x, y) => (y.totalScore - x.totalScore)).slice(0, 3)
    };
}

// Connects the Leaderboard component to the Redux store. 
export default connect(mapStateToProps)(Leaderboard);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Icon, Item, Label, Segment } from 'semantic-ui-react';

class Question extends Component {
    render() {

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
                                <Item.Header>Would you rather</Item.Header>
                                <Item.Description>{optionOne.text} or ...</Item.Description>
                                <Item.Extra>
                                    <Button color='black' floated='right'>
                                        View Poll
                                        <Icon name='right chevron' />
                                    </Button>
                                    <Label>{id}</Label>
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

export default connect(mapStateToProps)(Question)
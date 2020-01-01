import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Icon, Item, Label, Segment } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Question extends Component {

    handleClick = (e) => {
        e.preventDefault();
        // const { name } = e.target;
        const { question: { id } } = this.props;
        
        this.props.history.push(`/questions/${id}`);
      
    }

    render() {

        const { user, question } = this.props;
        if (question === null) {
            return <p>This question doesn't exist</p>
        }

        const { id, optionOne } = question;
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
                                {this.props.answered === true
                                    ? (
                                        <Item.Extra>
                                            <Button 
                                                name='resultView'
                                                color='green' 
                                                floated='right'
                                                onClick={this.handleClick} >
                                                Show Poll Results
                                               <Icon name='right chevron' />
                                            </Button>
                                            <Label>{id}</Label>
                                        </Item.Extra>
                                    )
                                    : (
                                        <Item.Extra>
                                            <Button 
                                                name='questionView'
                                                color='black' 
                                                floated='right'
                                                onClick={this.handleClick} >
                                                View Poll
                                            <Icon name='right chevron' />
                                            </Button>
                                            <Label>{id}</Label>
                                        </Item.Extra>
                                    )
                                }
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

export default withRouter(connect(mapStateToProps)(Question));
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Header,
    Icon,
    Item,
    Label,
    Segment
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Question extends Component {

    /**
     * @description Allow the user to go to QuestionPage or ResultPage view when "View Poll" or "Show Poll Results" clicked.
     * @param {object} e - event object
     */
    handleClick = (e) => {
        e.preventDefault();
        // const { name } = e.target;
        const { question: { id } } = this.props; // Destructure to obtain question passed as props, and store the id from question
        
        // history passed as props to current component by using withRouter higher-order component.
        // The route provided would render either QuestionPage view or ResultPage view.
        this.props.history.push(`/questions/${id}`);
    };

    render() {

        const { user, question } = this.props; // Destructure to obtain user and question passed as props to this component
        
        // Text to show on List view if question doesn't exist. Such a situation hasn't occured yet.
        if (question === null) {
            return <p>This question doesn't exist</p>
        }

        const { id, optionOne } = question; // Destructure question variable to obtain id and optionOne text value
        const { name, avatarURL } = user; // Destructure user to obtain name and avatarURL

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
                                {/**
                                 * If answered passed in as props is set to 'true', display 'Show Poll Results' button,
                                 * else display 'View Poll' button.
                                 */}
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
};

/**
 * @description Returns user(question's author), and question objects as props to the Question Component.
 * @param {object} state - the current state of the Redux store
 * @param {object} state.users - the state object is destructured to provide all the users present in the database.
 * @param {object} state.questions - the state object is destructured to provide all the questions present in the database.
 * @param {object} ownProps.id - the id of the question passed as props to the Question component.
 * @returns {object} object -  The plain JS object merged into component's props.
 * @returns {object} object.user - Return user object containing the details of the question's author obtained from the state
 * @returns {object} object.question - Return question object containing the details of the question obtained from the state
 */
function mapStateToProps({ users, questions }, { id }) {
    const question = questions[id];
    const user = users[question.author];

    return {
        user,
        question
    };
}


// Connects the Question component to the Redux store.
// withRouter passes the history props to the wrapped component Question.
export default withRouter(connect(mapStateToProps)(Question));
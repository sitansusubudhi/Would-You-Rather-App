import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
    render() {

        const { user, question } = this.props
        if (question === null) {
            return <p>This question doesn't exist</p>
        }

        const { author, timestamp, id, optionOne, optionTwo } = question
        const { name, avatarURL } = user

        return (
            <div>
                <img
                    src={avatarURL}
                    alt={`Avatar of ${name}`}
                    className='contact-avatar'
                />
                <span>{name}</span>
                <div>
                    Would you rather 
                    <div>
                        {optionOne.text}
                    </div>
                     Or
                    <div>
                        {optionTwo.text}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    const user = users[question.author]

    return {
        authedUser,
        user,
        question: question
    }
}

export default connect(mapStateToProps)(Question)
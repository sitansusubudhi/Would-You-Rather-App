import React from 'react';
import Question from './Question';

const AnsweredQs = (props) => {
    
    const { answeredQuestions } = props; // Destructuring to obtain answeredQuestions passed as props
    return (
        <div>
          <ul className='dashboard-list'>
            {/**
             * answeredQuestions contains array of question ids,
             * which have been answered by the logged in user.
             * Hence we map over the array and render details 
             * for each answered question by passing an attribute of answered={true}. 
             */}
            {answeredQuestions.map((id) => (
              <li key={id}>
                  <Question id={id} answered={true} />
              </li>
            ))}
          </ul>
        </div>

    );
};

export default AnsweredQs;



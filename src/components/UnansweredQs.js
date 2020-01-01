import React from 'react';
import Question from './Question';

const UnansweredQs = (props) => {
    
    const { unansweredQuestions } = props; // Destructuring to obtain unansweredQuestions passed as props
    
    return (
        <div>
          <ul className='dashboard-list'>
            {/**
             * unansweredQuestions contains array of question ids,
             * which have not yet been answered by the logged in user.
             * Hence we map over the array and render details 
             * for each answered question by passing an attribute of answered={false}. 
             */}
            {unansweredQuestions.map((id) => (
              <li key={id}>
                  <Question id={id} answered={false} />
              </li>
            ))}
          </ul>
        </div>
    );
};

export default UnansweredQs;



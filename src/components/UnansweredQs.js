import React from 'react';
import Question from './Question';

const UnansweredQs = (props) => {
    
    const { unansweredQuestions } = props; 
    
    return (
        <div>
          <ul className='dashboard-list'>
            {unansweredQuestions.map((id) => (
              <li key={id}>
                  <Question id={id} />
              </li>
            ))}
          </ul>
        </div>

    );
};

export default UnansweredQs;



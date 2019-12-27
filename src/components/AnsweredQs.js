import React from 'react';
import Question from './Question';

const AnsweredQs = (props) => {
    
    const { answeredQuestions } = props; 
    return (
        <div>
          <ul className='dashboard-list'>
            {answeredQuestions.map((id) => (
              <li key={id}>
                  <Question id={id} />
              </li>
            ))}
          </ul>
        </div>

    );
};

export default AnsweredQs;



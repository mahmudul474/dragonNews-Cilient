import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfCondition = () => {
    return (
        <div>
            <h1>this is  TermsOfCondition</h1>
          <Link  to='/register'>  <button   className='btn btn-primary'>Go  back  to Register</button></Link>
        </div>
    );
};

export default TermsOfCondition;
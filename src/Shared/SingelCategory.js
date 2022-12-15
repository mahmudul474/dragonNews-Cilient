import React from 'react';
import { Link } from 'react-router-dom';

const SingelCategory = ({data}) => {
    const{id, name} = data;
    return (
        <div>
           <Link  className='border border-3 my-3 d-block p-2 ' to={`/category/${id}`}>{name}</Link>
        </div>
    );
};

export default SingelCategory;
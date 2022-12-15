import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummury from './NewsSummury';

const Category = () => {
    const categorys=useLoaderData()
    return (
        <div>
           {
            categorys.map(category=><NewsSummury key={category.id} news={category}></NewsSummury>)
           }
        </div>
    );
};

export default Category;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummury from '../Components/NewsSummury';

const Home = () => {
    const allnews=useLoaderData()
    return (
        <div>
            <h1>All News</h1>
            {
                allnews.map(news=><NewsSummury key={news.id} news={news}></NewsSummury>)
            }
        </div>
    );
};

export default Home;
import React from 'react';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsSummury = ({news}) => {
    console.log(news);
    const {details,author,rating,title,category_id
        , total_view,image_url ,_id
    } = news;
    return (
        <div>
            <Card >
   
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
    
        {
            details.length> 150 ?
            <p>{details.slice(0,250) + "..." } <Link to={`/news/${_id
            }`}>Read more</Link></p> : <p>{details}</p>
        }


        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    );
};

export default NewsSummury;
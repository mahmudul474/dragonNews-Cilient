import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news=useLoaderData()
   console.log(news)
   const {details,author,rating,title,category_id
    , total_view,image_url
}= news
    return (
       <div>
         <Card >

            <div className='d-flex justify-content-between'>
              <div>
              <img src={author.img} style={{width:"70px"}} className='rounded-circle' alt="" />
                <p>author: {author.name}</p>
              </div>
              <div className='d-flex align-items-center'>
                <p className='mx-3'>total-view : {total_view}</p>
                <p className='mx-1'> ratting: {rating.number}</p>
              </div>
            </div>

        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {details}
          </Card.Text>
     
        </Card.Body>
      </Card>
       </div>
    );
};

export default News;
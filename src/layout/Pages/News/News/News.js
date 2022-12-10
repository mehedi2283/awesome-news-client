import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FaStar } from 'react-icons/fa';
import { Button } from "react-bootstrap";


const News = () => {
  const news = useLoaderData();
  console.log(`news`, news);
  const { title, details, image_url, author, rating,category_id } = news;
  return (
    <Card className="shadow-lg border-0 mt-4 mb-4">
      <Card.Img style={{padding:'2px'}} variant="top" src={image_url} />
      <Card.Header className="d-flex justify-content-between">
        <div>
          <strong>Author: </strong>{author.name}
        </div>
        <div>
          <strong>Published Date: </strong>{author.published_date}
        </div>
        <div className="d-flex align-items-center">
          <FaStar className="text-warning me-1"></FaStar>
          <span>{rating?.number}</span>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
        <Button>All news in This category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;

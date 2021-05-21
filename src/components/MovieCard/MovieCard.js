import React from "react";
import { Card } from "react-bootstrap";
import '../MovieCard/MovieCard.css';
import Rate from '../MovieRating/Rate';
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem", color: "gray" }} key={movie.id} className='movieCard'>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title} <br />
          <h3>{movie.date}</h3>
          <Rate rate={movie.rate} />
        </Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Link to={`/Description/${movie.id}`}>See more</Link>
      </Card.Body>
    </Card>
  )
}

export default MovieCard;

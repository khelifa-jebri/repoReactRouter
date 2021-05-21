import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = (props) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '1%', alignItems: 'space-between' }}>
      {props.movies.filter(
        (el) =>
          el.title.toLowerCase().includes(props.titleSearch.toLowerCase()) &&
          el.rate >= props.rateSearch
      )
        .map((el) => (
          <MovieCard key={el.id} movie={el} />
        ))}

    </div>
  );
}

export default MovieList;

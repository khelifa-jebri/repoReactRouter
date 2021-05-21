import React, { useState } from "react";
import moviesData from "../MoviesData";
import MovieList from "../MovieList/MovieList";
import AddMovie from "../AddMovie/AddMovie"
import Filter from "../Filter/Filter";

function MovieContainer() {
    const [movies, setMovies] = useState(moviesData);
    const [titleSearch, setTitleSearch] = useState("");
    const [rateSearch, setRateSearch] = useState(0);

    const handleAdd = (newMovie) => {
        setMovies([...movies, newMovie]);
    };
    return (
        <div >
            <div style={{ display: "flex", justifyContent: "space-around", width: "100%", background: 'blue' }}>
                <AddMovie addMovie={handleAdd} />
                <Filter
                    rate={rateSearch}
                    updateRateSearch={setRateSearch}
                    updateTitleSearch={setTitleSearch}
                />
            </div>
            <MovieList
                movies={movies}
                titleSearch={titleSearch}
                rateSearch={rateSearch}
            />
        </div>
    );
}

export default MovieContainer;

import React, { useState } from "react";
import "./App.css";
import moviesData  from "./components/MoviesData";
import MovieList from "./components/MovieList/MovieList";
import AddMovie from "./components/AddMovie/AddMovie";
import Filter from "./components/Filter/Filter";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [titleSearch, setTitleSearch] = useState("");
  const [rateSearch, setRateSearch] = useState(0);
  const handleAdd = (newMovie) => { 
      setMovies([...movies, newMovie]); 
  };
  return (

    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", justifyContent: "space-around", width: "100%", background: 'blue' }}>
          <AddMovie handleAdd={handleAdd} />
          <Filter
            rate={rateSearch}
            setRateSearch={setRateSearch}
            setTitleSearch={setTitleSearch}
          />
        </div>
        <MovieList
          rateSearch={rateSearch}
          titleSearch={titleSearch}
          movies={movies}
        />
      </header>
    </div>
  );
}

export default App;

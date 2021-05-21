import moviesData from "../MoviesData";
import "./Description.css"
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Description = ({ match }) => {

  const [movie] = moviesData.filter(el => el.id === match.params.id)

  return (

    <div className="containerClass">

      <div className="movieDescClass">
        <h3 id='movieTrailer'>{movie.title}'s Description </h3>
        <p>{movie.description}</p>
        <Link to="/">
          <Button variant="primary">Go at home page</Button>

        </Link>
      </div>

      <div className="movieTrailerClass">
        <h3 id='movieTrailer'>{movie.title}'s Trailer </h3>
        <iframe width="560"
          height="315"
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>

    </div>
  )
};

export default Description
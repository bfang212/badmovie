import React from 'react';
import path from 'path';

class MovieEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      items: null
    };
    this.deleteMovie=this.deleteMovie.bind(this);
    this.saveMovie=this.saveMovie.bind(this);
  }

  saveMovie(movie) {
    this.props.saveMovie(movie);
  }

  deleteMovie(movie) {
    this.props.deleteMovie(movie.original_title);
  }

  
  render() {
    return (
      <li onClick={() => this.props.showFaves ? this.deleteMovie(this.props.movie) : this.saveMovie(this.props.movie)} className="movie_item">
      <img src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}/>
      <div className="movie_description">
        <h2>{this.props.movie.overview}</h2>
        <section className="movie_details">
          <div className="movie_year">
            <span className="title">{this.props.movie.original_title}</span>
            <span>{this.props.movie.release_date.slice(0,4)}</span>
          </div>
          <div className="movie_rating">
            <span className="title">Rating</span>
            <span>{this.props.movie.vote_average}</span>
          </div>
        </section>
      </div>
    </li>
    );
  }

}
// export default VideoPlayer;

// const Genre = ({genre}) => {
//   return  <option>{genre.name}</option>
// }

export default MovieEntry
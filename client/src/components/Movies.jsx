import React from 'react';
import MovieEntry from './MovieEntry.jsx';

class Movies extends React.Component {
  constructor(props) {
    super(props)

  }
//



//    Make an onclick for each list item. If the movies shown is the search results, 
//.   add it to the db (do it in the main app, and passs down the function). 

//.   If youre currently showing the fave list, delete the movie instead
//.   you can tell which list it is based on whether the prop "showFaves" is false (search results) or true (fave list)


//
  render() {
    return (
        <ul className="movies">
          {this.props.movies.map((movie, index) => (
          movie.poster_path && 
          movie.original_title && 
          <MovieEntry 
          saveMovie={this.props.saveMovie}
          deleteMovie={this.props.deleteMovie}
          showFaves={this.props.showFaves}
          key={index} 
          movie={movie}/>))}
        </ul>)
  }
}

export default Movies
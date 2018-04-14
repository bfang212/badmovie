import React from 'react';
import axios from 'axios';
import Genre from './Genre.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      currentGenreId: 0
    }

    this.getGenres=this.getGenres.bind(this);
    this.changeGenre=this.changeGenre.bind(this);
    this.getMovies=this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getGenres();
  }

  getMovies() {
    this.props.getMovies(this.state.currentGenreId);
  }


  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios.get('/genres')
    // .then((data) => (data.data.genres.map((item)=>(item.name))))
    .then((data) => {this.setState({genres : data.data.genres})})
    .then(() => {this.setState({currentGenreId: this.state.genres[0].id})})
    .then(() => this.getMovies());
  }

  changeGenre(genreName) {
    const genreId = this.state.genres.find(genre => genre.name === genreName).id
    this.setState({currentGenreId: genreId})
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>
{/* 


    Make the select options dynamic from genres !!!

    How can you tell which option has been selected from here?

*/}

        <select onChange={(e) => this.changeGenre(e.target.value)}>
          {this.state.genres.map((genre, index) => {
            return <Genre 
            key={index} 
            genre={genre}
            changeGenre={this.changeGenre}
            />
          })}
        </select>
        <br/><br/>

        <button onClick={this.getMovies}>Search</button>

      </div>)
  }
}

export default Search
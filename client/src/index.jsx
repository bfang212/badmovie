import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [{deway: "movies"}],
      favorites: [{deway: "favorites"}],
      showFaves: false
  	}
    this.getFavorites=this.getFavorites.bind(this)
    this.getMovies = this.getMovies.bind(this)
    this.saveMovie = this.saveMovie.bind(this)
    this.swapFavorites = this.swapFavorites.bind(this)
    this.deleteMovie=this.deleteMovie.bind(this)
  }

  componentDidMount(){
    this.getFavorites()
  }

  getMovies(genreId) {
    axios.get('/search', {
      params: {
        genreId: genreId
      }
    })
    .then((data) => {
      this.setState({movies: data.data.results})
    })
  }

  saveMovie({original_title, release_date, overview, vote_average, poster_path}) {
    //same as above but do something diff
    axios.post('/save', {
      params: {
        original_title: original_title,
        release_date: release_date,
        overview: overview,
        vote_average: vote_average,
        poster_path, poster_path
      }
    })
    .then(() => {this.getFavorites()});
  }

  getFavorites() {
    axios.get('/favorites')
    .then((data) => {
      this.setState({favorites: data.data});
    })
  }


  deleteMovie(original_title) {
    axios.post('/delete', {
      params: {
        original_title: original_title
      }
    })
    .then(()=>{this.getFavorites()})

  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    })
  }

  render () {
  	return (
    <div className="app">
      <header className="navbar"><h1>Bad Movies</h1></header> 
      
      <div className="main">
        <Search getMovies={this.getMovies} swapFavorites={this.swapFavorites} showFaves={this.state.showFaves}/>
        <Movies saveMovie={this.saveMovie} deleteMovie={this.deleteMovie} movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
var axios = require('axios');
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
const {getAllFavorites,
    saveFavorite,
    deleteFavorite} = require('./database.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Due to express, when you load the page, it doesnt make a get request to '/', it simply serves up the dist folder
app.get('/search', function(req, res) {
    const {genreId} = req.query;
    //get the search genre     
    //expect a genre ID
    
    //https://www.themoviedb.org/account/signup

    // use this endpoint to search for movies by genres, you will need an API key

    //https://developers.themoviedb.org/3/discover/movie-discover

    //and sort them by horrible votes using the search parameters in the API
    axios.get('https://api.themoviedb.org/3/discover/movie', {
        params: {
            api_key: '96952c890dd90f9ea069f01f1e51693a',
            language: 'en-US',
            sort_by: 'vote_average.asc',
            // 'vote_average.gte': 0,
            with_genres: genreId.toString()
        }
    })
    .then((data) => {res.json(data.data)})
})

app.get('/genres', function(req, res) {
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=96952c890dd90f9ea069f01f1e51693a&language=en-US')
    .then((data) => (res.json(data.data))
    )


    //make an axios request to get the list of official genres

    // from this endpoint https://developers.themoviedb.org/3/genres/get-movie-list which needs your api key

    //send back
})

app.post('/save', function(req, res) {
    let params = req.body.params;
    // console.log(params)
    saveFavorite(params, (data) => {res.status(201).send()});  
})

app.get('/favorites', function(req, res) {
    getAllFavorites((data) => {res.json(data)});
})

app.post('/delete', function(req, res) {
    let params = req.body.params;
    deleteFavorite(params, (data) => {res.status(201).send()});

})
app.listen(3000, function() {
  console.log('listening on port 3000!');
});
import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.omdbapi.com/',
});

// API endpoints:
// sending data request :           http://www.omdbapi.com/?apikey=[yourkey]&
// GET img requests or Poster :     http://img.omdbapi.com/?apikey=[yourkey]&
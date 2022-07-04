import React from 'react';  // Mise en place du routing dans app

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // import pour mise en place du routing

import './App.sass';  // style

// import de nos components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer'



function App() {
  return (
    // application
      <div className="App">
        
        <Router> 
          
          <Header/>
          
          <div className='container'>
            <Routes>
                <Route element={<Home/>}
                  path="/" 
                />
                <Route element={<MovieDetail/>}
                  path='/movie/:imdbID' 
                />
                <Route element={<PageNotFound/>}
                  path="*"
                />
            </Routes>
          </div>
          
          <Footer/>
          
        </Router>
      </div>
    // Fin application
  );
}

export default App;

import React from 'react';
import './App.css';
import requests from './request';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import Footer from './Footer';
import Youtube from "react-youtube";



function App() {
  return (
    <div className="App">
    <Nav/>
    <Banner/>
    
    <Row title="Netflix origionals"  fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
    />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    <Footer/>

     
    </div>
  );
}

export default App;



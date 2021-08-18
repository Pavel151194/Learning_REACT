import React from 'react';
import './App.css';
import { PageTitle } from './components/atoms/PageTitle/PageTitle'
import { FilmCard } from './components/molecules/FilmCard'
import { TrailerCard } from './components/molecules/TrailerCard'
import { films, trailers } from "./mock"

const App = () => {
  const selectedFilm = films[1]
  const selectedTrailer = trailers[0]
  return (
    <div className="App">
      <div className="wrapper">
        <nav>

        </nav>
        <main>
          <PageTitle title = "Movie"/>
          <FilmCard film = {selectedFilm}/>
          <TrailerCard film = {selectedFilm} trailer = {selectedTrailer}/>
        </main>
      </div>
    </div>
  )
}

export default App
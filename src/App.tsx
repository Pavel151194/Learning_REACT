import React from 'react';
import './App.css';
import { Header } from './components/molecules/Header'
import { FilmList } from './components/molecules/FilmList'
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
          <Header title = {"Movie"}/>
          {films?.length ? (
            <FilmList films = {films}/>
          ) : (<p>No film</p>)}
          <FilmCard film = {selectedFilm}/>
          <TrailerCard
            film = {selectedFilm} 
            trailer = {selectedTrailer}
          />
        </main>
      </div>
    </div>
  )
}

export default App
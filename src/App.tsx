import React from 'react';
import './App.css';
import { NavBar } from './components/molecules/NavBar'
import { Header } from './components/molecules/Header'
import { FilmList } from './components/molecules/FilmList'
import { FilmCard } from './components/molecules/FilmCard'
import { TrailerCard } from './components/molecules/TrailerCard'
import { RatingCard } from './components/molecules/RatingCard'
import { FiltersCard } from './components/molecules/FiltersCard'
import { films, trailers } from "./mock"

const App = () => {
  const selectedFilm = films[1]
  const selectedTrailer = trailers[0]
  //const countries = films.reduce( (acc, { country }) => [...new Set([...acc, country])], [] )
  return (
    <div className="App">
      <div className="wrapper">
        <nav>
          <NavBar/>
        </nav>
        <main>
          <Header title = {"Movies"}/>
          {films?.length ? (
            <FilmList films = {films}/>
          ) : (<p>No film</p>)}
          <FilmCard film = {selectedFilm}/>
          <TrailerCard
            pretitle = {"Trailer: "}
            film = {selectedFilm} 
            trailer = {selectedTrailer}
          />
          <RatingCard title = {"Add rating"}/>
          <FiltersCard 
            title = {"Sort by:"}
            title2 = {"Filter:"}
            films = {films}
            />
        </main>
      </div>
    </div>
  )
}

export default App
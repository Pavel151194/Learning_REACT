import React, { useState } from 'react';
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
  const $filtersCard: Element | null = document.querySelector(".filters_card")

  const [filteredFilms, setFilteredFilms] = useState(films)
  const [searchValue, setSearchValue] = useState("")
  const [toggle, setToggle] = useState(false);

  const showSearchedFilms = () => setFilteredFilms( films.filter( ({ title }) => title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ) )
  const setSearhcValue = (text: string) => setSearchValue(text)

  const toggleFiltersCard = () => {
    setToggle(!toggle)
  }


//$DOMelement.classList.remove("hidden")
  return (
    <div className="App">
      <div className="wrapper">
        <nav>
          <NavBar/>
        </nav>
        <main>
          <Header
            title = {"Movies"}
            searchFeildValue = {searchValue}
            onChangeSearchField = {setSearhcValue}
            onClickSearchButton = {showSearchedFilms}
            onClickFilterButton = {toggleFiltersCard}
          />
          <FiltersCard 
            title = {"Sort by:"}
            title2 = {"Filter:"}
            films = {films}
            buttonName = {"Show results"}
          />
          {films?.length ? (
            <FilmList films = {filteredFilms}/>
          ) : (<p>No film</p>)}
          <FilmCard film = {selectedFilm}/>
          <TrailerCard
            pretitle = {"Trailer: "}
            film = {selectedFilm} 
            trailer = {selectedTrailer}
          />
          <RatingCard
            title = {"Add rating"}
            buttonName = {"Add rating"}
          />
        </main>
      </div>
    </div>
  )
}

export default App
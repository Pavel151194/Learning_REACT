import React, { useState, useEffect } from 'react';
import './App.css';
import { films, trailers, defaultSortSettings } from "./mock"
import { NavBar } from './components/molecules/NavBar'
import { Header } from './components/molecules/Header'
import { FilmList } from './components/molecules/FilmList'
import { FilmCard } from './components/molecules/FilmCard'
import { TrailerCard } from './components/molecules/TrailerCard'
import { RatingCard } from './components/molecules/RatingCard'
import { FiltersCard } from './components/molecules/FiltersCard'
//import { Pagination } from './components/molecules/Pagination';

const App = () => {
  const selectedFilm = films[1] 
  const selectedTrailer = trailers[0]

  const [filteredFilms, setFilteredFilms] = useState(films)
  const [searchValue, setSearchValue] = useState("")
  const [isFiltersCardActive, setFiltersCardState] = useState(false)
  const [sortSettings, setSortSettings] = useState(defaultSortSettings)

  const showSearchedFilms = () => setFilteredFilms( films.filter( ({ title }) => title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ) )

  useEffect( () => {
    setFilteredFilms( films.filter( ({ title }) => title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ) )
  }, [searchValue])

  const getSearchValue = (text: string) => setSearchValue(text)
  const toggleFiltersCard = () => setFiltersCardState(isFiltersCardActive === false)

  const toggleSorting = (field: string) => {
    console.log("handlerSorting", { field })
    const sortedFilms = [...films].sort((a: any, b: any) => a[field] -  b[field])
    setFilteredFilms(sortedFilms)
  }

  return (
    <div className="App">
      <div className="wrapper">
        <nav>
          <NavBar/>
        </nav>
        <main>
          <Header
            title = {"Movies"}
            searchFieldValue = {searchValue}
            onChangeSearchField = {getSearchValue}
            onClickFilterButton = {toggleFiltersCard}
          />
          {isFiltersCardActive ? (
            <FiltersCard
              title = {"Sort by:"}
              subTitle = {"Filter:"}
              countries = {Array.from(new Set(films.map( ({ country }) => (country.split(', ')) ).flat()))}
              buttonName = {"Show results"}
              
              sortSettings = {defaultSortSettings}
              onClickSortButton = {toggleSorting}
            />
          ) : null}
          {filteredFilms.length > 0 ? (
            <FilmList films = {filteredFilms}/>
          ) : <p>No films</p>}
          {/*<Pagination numberOfPages = {filteredFilms.length}/>*/}
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
import React from 'react';
import './App.css';
import { PageTitle } from './components/atoms/PageTitle/PageTitle'
import { FilmCard } from './components/molecules/FilmCard'
import { films } from "./mock";

const App = () => {
  const selectedFilm = films[1];
  return (
    <div className="App">
      <div className="wrapper">
        <nav>

        </nav>
        <main>
          <PageTitle title="Movie"/>
          <FilmCard {...selectedFilm}/>
        </main>
      </div>
    </div>
  );
}

export default App;
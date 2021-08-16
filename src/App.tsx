import React from 'react';
import './App.css';
import { Title } from './components/atoms/Title/Title';
import { FilmCard } from './components/atoms/Film_card';
//import { FilmList } from "./components/molecules/Film_list";
import { films } from "./mock";

const App = () => {
  const selectedFilm = films[1];
  return (
    <div className="App">
      <div className="wrapper">
        <nav>

        </nav>
        <main>
          <Title title="Movie"/>
          <FilmCard {...selectedFilm}/>
        </main>
      </div>
    </div>
  );
}

export default App;
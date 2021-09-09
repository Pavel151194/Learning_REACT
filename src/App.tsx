import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import { Home } from './components/pages/Home'
import { PageTitle } from './components/atoms/PageTitle';
import { Film } from './components/pages/Film';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/films/:id">
          <Film/>
        </Route>
        <Route>
          <PageTitle title={"Not found"}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
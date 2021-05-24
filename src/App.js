import React from "react";
import "./App.css";
import MovieContainer from './components/MovieContainer/MovieContainer'
import Description from './components/Description/Description'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={MovieContainer} />
            <Route exact path="/Description/:id" component={Description} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;

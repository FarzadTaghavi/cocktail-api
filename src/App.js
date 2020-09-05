import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import DisplayCategories from "./DisplayCategories";
import NavBar from "./NavBar";
import CocktailsPage from "./CocktailPage";
import DetailsPage from "./DetailsPage";
import SearchByName from "./SearchByName";

function App() {
  return (
    <div className="app" style={{ margin: 20 }}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/category" component={DisplayCategories} />
        <Route exact path="/category/:category" component={CocktailsPage} />
        <Route exact path="/details/:drink" component={DetailsPage} />
        <Route exact path="/search/:text?" component={SearchByName} />
      </Switch>
    </div>
  );
}

export default App;

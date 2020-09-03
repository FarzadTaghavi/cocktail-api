import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Cocktails from "./Cocktails";
import NavBar from "./NavBar";
import CocktailsPage from "./CocktailPage";
import DetailsPage from "./DetailsPage";

function App() {
  return (
    <div style={{ margin: 20 }}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cocktails" component={Cocktails} />
        <Route exact path="/cocktail/:category" component={CocktailsPage} />
        <Route exact path="/cocktail/details/:drink" component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;

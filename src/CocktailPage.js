import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, NavLink } from "react-router-dom";

function CocktailsPage() {
  const [cocktailData, setCocktailData] = useState([]);
  const route_parameters = useParams();
  console.log("route paremeter", route_parameters);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${route_parameters.category}`
      );
      console.log("FETCHED COCKTAIL:", res);
      setCocktailData(res.data.drinks);
    }
    fetchData();
  }, [route_parameters.category]);

  return (
    <div>
      <h1>
        <Link style={{ margin: 20 }} activeClassName="active" to="/category">
          Search by category
        </Link>
        - {route_parameters.category}'s
      </h1>
      <h2>All {route_parameters.category}'s</h2>
      {cocktailData.map((cocktail) => {
        return (
          <div className="categories" key={cocktail.idDrink}>
            <NavLink to={`/details/${cocktail.idDrink}`}>
              <p>{cocktail.strDrink}</p>
            </NavLink>
            <img alt={cocktailData.idDrink} src={cocktail.strDrinkThumb} />
          </div>
        );
      })}
    </div>
  );
}

export default CocktailsPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

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
      <h1>Cocktail Images</h1>
      {cocktailData.map((cocktail) => {
        return (
          <div key={cocktail.idDrink}>
            <Link to={`/cocktail/details/${cocktail.idDrink}`}>
              <p>{cocktail.strDrink}</p>
            </Link>
            <img alt={cocktailData.idDrink} src={cocktail.strDrinkThumb} />
          </div>
        );
      })}
    </div>
  );
}

export default CocktailsPage;

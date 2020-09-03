import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailsPage() {
  const [cocktailData, setCocktailData] = useState([]);
  const route_parameters = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${route_parameters.drink}`
      );
      setCocktailData(res.data.drinks);
    }
    fetchData();
  }, [route_parameters.drink]);

  return (
    <div>
      <h1>detailz...</h1>
      {cocktailData.map((cocktail) => {
        return (
          <div key={cocktail.idDrink}>
            {cocktail.strDrink}
            <img alt={cocktail.strDrink} src={cocktail.strDrinkThumb} />
          </div>
        );
      })}
    </div>
  );
}

export default DetailsPage;

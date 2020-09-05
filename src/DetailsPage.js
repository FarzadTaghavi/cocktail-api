import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function DetailsPage() {
  const [cocktailData, setCocktailData] = useState([]);
  const route_params = useParams();
  console.log(route_params);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${route_params.drink}`
      );
      setCocktailData(res.data.drinks);
    }
    fetchData();
  }, [route_params.drink]);

  return (
    <div>
      <h1>
        <Link style={{ margin: 20 }} activeClassName="active" to="/category">
          Search by category
        </Link>
        - Details Page
      </h1>
      <h2>Details:</h2>
      {cocktailData.map((cocktail) => {
        return (
          <div className="details" key={cocktail.idDrink}>
            <p>ID: {cocktail.idDrink}</p>
            <p>Name: {cocktail.strDrink}</p>
            <img alt={cocktail.strDrink} src={cocktail.strDrinkThumb} />
          </div>
        );
      })}
    </div>
  );
}

export default DetailsPage;

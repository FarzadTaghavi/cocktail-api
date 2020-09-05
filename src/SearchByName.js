import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory, Link } from "react-router-dom";

function SearchByName() {
  const [getDrinkName, setDrinkName] = useState([]);
  const [getSearchTerm, setSearchTerm] = useState("");
  const params = useParams();
  const history = useHistory();
  console.log("What are the params?", params);

  useEffect(() => {
    async function getData() {
      const queryParam = encodeURIComponent(params.text);
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${queryParam}`
      );
      console.log("fetched data:", res.data.ingredients);
      setDrinkName(res.data.ingredients);
      setSearchTerm("");
    }
    if (params.text) {
      getData();
    }
  }, [params.text]);

  const setSearchUrl = async (e) => {
    e.preventDefault();
    const parsedTerm = encodeURIComponent(getSearchTerm);
    history.push(`/search/${parsedTerm}`);
    console.log("history after search", history);
  };

  return (
    <div>
      <h1>
        <Link style={{ margin: 20 }} activeClassName="active" to="/">
          Home
        </Link>
        - Search by name
      </h1>
      {getDrinkName ? (
        <form onSubmit={setSearchUrl}>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={getSearchTerm}
          />
          <button type="submit">Search</button>
          {getDrinkName.map((drink, index) => {
            return (
              <div key={drink.strDescription}>
                <h2>Name:</h2>
                <p> {drink.strIngredient}</p>
                <h2>Description</h2>
                <p> {drink.strDescription}</p>
                <h2>Alchohol:</h2>
                <p> {drink.strAlcohol}</p>
                {drink.Poster}
              </div>
            );
          })}
        </form>
      ) : (
        <div>
          <h2>Ohh nooo! Drink doesn't exist</h2>
        </div>
      )}
    </div>
  );
}

export default SearchByName;

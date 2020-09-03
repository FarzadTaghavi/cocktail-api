import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Cocktails() {
  const [cocktails, setCocktails] = useState([]);
  console.log("start state:", cocktails);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      );
      console.log("fetched data: ", res.data);
      setCocktails(res.data.drinks);
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Cocktails...</h1>
      <div>
        {cocktails.map((cocktail, index) => {
          return (
            <Link key={index} to={`/cocktail/${cocktail.strCategory}`}>
              <div key={index}>
                <p>{cocktail.strCategory}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Cocktails;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function SearchByName() {
  /*   const [searchTerm, setSearchTerm] = useState("");
  const [searchName, setSearchName] = useState([]);
  const params = useParams();
  const history = useHistory(); */
  /*   console.log("what are the params", params); */

  /* useEffect(() => {
    console.log("run useEffect!");
    const runSearchByName = async () => {
      const queryParam = encodeURIComponent(params.textToSearch);
      const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=beer
      `);
      console.log("log fetch", res.data.ingredients);
      setSearchName(res.data.ingredients);
    };
    if (params.textToSearch) {
      runSearchByName();
    }
  }, [params.searchTerm]); */

  /*   const setSearchUrl = async (e) => {
    e.preventDefault();
    const parsedTerm = encodeURIComponent(searchTerm);
    history.pushState(`/search/${parsedTerm}`);
    console.log("does search work?", history);
  }; */

  return (
    <div>
      <h1>Search...</h1>
      {/*     <form onSubmit={setSearchUrl}>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button type="submit">Search</button>
      </form> */}
    </div>
  );
}

export default SearchByName;

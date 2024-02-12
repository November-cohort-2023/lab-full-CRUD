import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BeersListPage() {
  const [beers, setBeers] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5005/beers`)
      .then((response) => {
        //   console.log(response.data);
        setBeers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/beers?name_like=${query}`)
      .then((response) => {
        // console.log(response.data);
        setBeers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  return (
    <div>
      <label className="add-beer-label">
        Search{" "}
        <input
          id="search-bar"
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
        />
      </label>

      {beers &&
        beers.map((beer) => {
          return (
            <Link to={`/beers/${beer.id}`} key={beer.id}>
              <div>
                <img src={beer.image_url} width="40px" alt="" />
                <h3>{beer.name}</h3>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default BeersListPage;

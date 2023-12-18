import React, { useState } from "react";
import "../css/Omedbapi.css";
import axios from "axios";
import Loaderforfake from "./Loaderforfake";
const Omdbapi = () => {
  const [search, setsearch] = useState("");
  const [movie, setmovie] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  async function getmovie() {
    setloading(true);
    try {
      let updatemovie = await axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=294a5211`
      );

      setmovie(updatemovie.data.Search);
      setloading(false);
      seterror(false);
    } catch (error) {
      seterror(true);
      setloading(false);
    }
  }
  let moviesearch = (e) => {
    setsearch(e.target.value);
    // setsearch((pv) => {
    //   return pv;
    // });
  };
  return (
    <div className="parent">
      <div className="child1">
        <input
          type="text"
          placeholder="search movie"
          onChange={moviesearch}
          className="input"
        />
        <button onClick={getmovie}>Search</button>
      </div>
      <div className="usermovie">
        <h1 className="loading">{loading && <Loaderforfake />}</h1>

        {movie.map(({ Title, Poster, Year }, index) => {
          return (
            <div className="cards" key={index}>
              <img className="imagesicons" src={Poster} alt="" />
              <h3 className="movietitle">{Title}</h3>
              <h3 className="moviename">{Year}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Omdbapi;

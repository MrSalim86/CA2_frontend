/*import React from "react";
import { useState, useEffect } from "react";
import facade from "../apiFacade";

const Joke = () => {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    const getJoke = async () => {
      const jokefromDB = await facade.fetchJoke();
      setJoke(jokefromDB.result);
    };
    getJoke();
  }, []);
  const fetchJoke = async () => {
    const res = await fetch("http://localhost:8080/CA2", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  };

  return (
    <div className="bord">
      {joke != null &&
        joke.map((joke, index) => {
          return (
            <div key={index}>
              <h2>Joke name: {joke.name}</h2>
              <p>Joke: {joke.url}</p>
            </div>
          );
        })}
      {joke == null && <p>No joke found</p>}
    </div>
  );
};

export default Joke;
*/

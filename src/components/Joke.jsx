import React, { useState, useEffect } from "react";
import apiFacade from "./apiFacade";

const Joke = () => {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    const getJoke = async () => {
      const jokefromDB = await apiFacade.fetchJoke();
      console.log("Joke: ", jokefromDB);
      setJoke(jokefromDB.result);
    };

    getJoke();
  }, []);

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

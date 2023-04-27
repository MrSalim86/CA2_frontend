import React, { useEffect, useState } from "react";
import facade from "../apiFacade";

const Joke = ({ user }) => {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    const url = user.roles.split(",").includes("user")
      ? "/api/jokes/user"
      : "/api/jokes";
    facade.fetchData(url).then(res => {
      console.log(res);
      setData(res.joke);
    });
  }, []);

  return (
    <div className="ready-to-laugh-container">
      <div className="ready-to-laugh">
        <strong>Ready to laugh:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
        <span className="data">{data}</span>
      </div>
    </div>
  );
};

export default Joke;

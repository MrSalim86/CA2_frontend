import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import facade from "../apiFacade";

const Content = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About user={user} />} />
    </Routes>
  );
};

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const About = ({ user }) => {
  const [dataFromServer, setDataFromServer] = useState("Loading...");
  const [isUpdated, setIsUpdated] = useState(false);
  useEffect(() => {
    if (user.username === "") {
      setDataFromServer("Please login to see data from server");
      return;
    }
    const url = user.roles.split(",").includes("user")
      ? "/api/info/user"
      : "/api/info/admin";
    facade.fetchData(url).then(res => {
      console.log("RES: ", res);
      setDataFromServer(res.msg);
    });
  }, [user]);
  return (
    <>
      <div>
        <h2>About</h2>
      </div>
      <div>{dataFromServer}</div>
      USERNAME: {user.username}
    </>
  );
};

export default Content;

import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const Home = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/info");
      const data = await response.json();
      setInfo(data);
    };
    fetchRockets();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <h1>Home Page</h1>
      <p>{JSON.stringify(info)}</p>
    </React.Fragment>
  );
};

export default Home;

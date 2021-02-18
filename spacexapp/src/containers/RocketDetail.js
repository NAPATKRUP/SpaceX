import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const RocketDetail = (props) => {
  const [rocket, setRocket] = useState([]);
  const { rocket_id } = props.location.state;

  useEffect(() => {
    const fetchRockets = async () => {
      console.log(rocket_id);

      const response = await fetch(
        `https://api.spacexdata.com/v3/rockets/${rocket_id}`
      );
      const data = await response.json();
      console.log(data);
      setRocket(data);
    };
    fetchRockets();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <h1>{rocket.rocket_name}</h1>
      <p>{JSON.stringify(rocket)}</p>
    </React.Fragment>
  );
};

export default RocketDetail;

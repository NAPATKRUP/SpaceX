import React, { useEffect, useState, useCallback } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RocketDetail = (props) => {
  const [rocket, setRocket] = useState();
  const { rocket_id } = props.location.state;

  const [isLoading, setIsLoading] = useState(false);

  const handleRocket = useCallback((value) => setRocket(value), []);

  const handleIsLoading = useCallback((value) => setIsLoading(value), []);

  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v3/rockets/${rocket_id}`
      );
      const data = await response.json();

      handleRocket(data);
      handleIsLoading(true);
    };
    fetchRockets();
  }, [rocket_id]);

  return isLoading ? (
    <React.Fragment>
      <Header />
      <div
        className="container-fluid bgBlack text-light py-4"
        style={{ minHeight: "100vh" }}
      >
        <div className="row p-4 bg-light text-dark m-3 rounded">
          <div className="col-12 col-md-6">
            <h1>{rocket.rocket_name}</h1>
            <p>{rocket.description}</p>
            <p>
              Country: {rocket.country} | Company: {rocket.company}
            </p>
            <p>
              Status{": "}
              <svg height="20" width="20">
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  fill={rocket.active ? "green" : "red"}
                />
              </svg>
            </p>
            <small>
              <b>Stage: </b>
              {rocket.stages} | <b>Boosters: </b>
              {rocket.boosters} | <b>Cost per launch: </b>
              {rocket.cost_per_launch} | <b>Success rate pct: </b>
              {rocket.success_rate_pct} | <b>First flight: </b>
              {rocket.first_flight}
            </small>
            <br></br>
            <a
              href={rocket.wikipedia}
              className="btn btn-light border border-dark my-3"
            >
              Wikipedia
            </a>
          </div>
          <div className="col-12 col-md-6">
            <h4>SPEC</h4>
            <p>
              - <b>Heigth: </b>
              {rocket.height.meters} meter/{rocket.height.feet} feet
            </p>
            <p>
              - <b>Diameter: </b>
              {rocket.diameter.meters} meter/{rocket.diameter.feet} feet
            </p>
            <p>
              - <b>Mass: </b>
              {rocket.mass.kg} kg/{rocket.mass.lb} lb
            </p>
            <div className="bgBlack text-light p-4">
              <p>
                <b>PAYLOAD WEIGHT</b>
              </p>
              {rocket.payload_weights.map((p, index) => (
                <div key={p.name}>
                  <small>
                    {index + 1}. Name: {p.name} | kg: {p.kg} kg/{p.lb} lb
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h3 className="m-4">IMAGE</h3>
        <div className="row d-flex justify-content-center align-items-center">
          {rocket.flickr_images.map((i, index) => (
            <img
              src={i}
              key={index + 1}
              className="m-3 rounded"
              style={{
                width: "450px",
                height: "250px",
                opacity: 0.9,
                backgroundPosition: "center",
                backgroundRepeat: false,
                objectFit: "cover",
              }}
            ></img>
          ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  ) : null;
};

export default withRouter(RocketDetail);

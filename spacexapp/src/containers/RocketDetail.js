import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RocketDetail = (props) => {
  const [rocket, setRocket] = useState();
  const { rocket_id } = props.location.state;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v3/rockets/${rocket_id}`
      );
      const data = await response.json();

      setRocket(data);
      setIsLoading(true);
    };
    fetchRockets();
  }, [rocket_id]);

  return isLoading ? (
    <React.Fragment>
      <Header />
      <div
        className="container-fluid bg-dark text-light py-4"
        style={{ minHeight: "100vh" }}
      >
        <div className="row p-4 bg-light text-dark m-3 rounded">
          <div className="col-6">
            <h1>{rocket.rocket_name}</h1>
            <p>{rocket.description}</p>
            <p>
              Country: {rocket.country} | Company: {rocket.company}
            </p>
            <p>
              Status{": "}
              <b className={rocket.active ? "text-success" : "text-danger"}>
                {rocket?.active?.toString()}
              </b>
            </p>
            <small>
              <b>Stage: </b>
              {rocket.stages} | <b>Boosters: </b>
              {rocket.boosters} | <b>Cost per launch: </b>
              {rocket.cost_per_launch} | <b>Success rate pct: </b>
              {rocket.success_rate_pct} | <b>First flight: </b>
              {rocket.first_flight}
            </small>
          </div>
          <div className="col-6">
            <h3>Spec</h3>
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
            <div className="bg-secondary text-light p-4">
              <p>
                <b>Payload weight</b>
              </p>
              {rocket.payload_weights.map((p, index) => (
                <div key={p.name}>
                  <small>
                    {index + 1}.) Name: {p.name} | kg: {p.kg} kg/{p.lb} lb
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h3 className="m-4">Image</h3>
        <div className="row d-flex justify-content-center align-items-center">
          {rocket.flickr_images.map((i) => (
            <img
              src={i}
              className="m-3 border border-light rounded"
              style={{
                width: "400px",
                height: "200px",
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

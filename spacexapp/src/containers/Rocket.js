import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, Button } from "react-bootstrap";

const Rocket = () => {
  const [rockets, setRockets] = useState([]);
  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      const data = await response.json();
      setRockets(data);
    };
    fetchRockets();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <div style={{ display: "flex", padding: 25, backgroundColor: "#343a40" }}>
        {rockets.map((rocket) => (
          <div style={{ width: "25rem" }}>
            <Card style={{ margin: 10 }}>
              <Card.Img variant="top" src={rocket.flickr_images[0]} style={{ height: 250, backgroundPostion: "center" }}/>
              <Card.Body>
                <Card.Title>{rocket.rocket_name}</Card.Title>
                <Card.Text>{rocket.description}</Card.Text>
                <Button variant="dark">See more</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Rocket;

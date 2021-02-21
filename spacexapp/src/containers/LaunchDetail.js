import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";

const LaunchDetail = (props) => {
  const data = props.location.state?.data;
  const { history } = props;

  const goRocket = () => {
    history.push("/SpaceX/rocket/rocketDetail", {
      rocket_id: data.rocket.rocket_id,
    });
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid bgBlack" style={{ minHeight: "100vh" }}>
        <div className="text-light text-center p-4">
          <h1>MISSION: {data.mission_name}</h1>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <div className="card w-75">
            <div className="card-header text-center">
              <p className="h5">LAUNCH DETAIL</p>
            </div>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <img src={data.links.mission_patch_small}></img>
              <p className="my-4">{data.details}</p>
              <div className="row text-center">
                <div className="col-12 col-md-4">
                  Launch Year: <b>{data.launch_year}</b>
                </div>
                <div className="col-12 col-md-4">
                  Launch Success:
                  <svg height="20" width="20">
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      fill={data.launch_success ? "green" : "red"}
                    />
                  </svg>
                </div>
                <div className="col-12 col-md-4">
                  Launch Window: <b>{data.launch_window}</b>
                </div>
              </div>
              <div className="inline mt-3">
                <a
                  href={data.links.wikipedia}
                  target="_blank"
                  className="btn btn-light border border-dark mx-2"
                >
                  Wikipedia
                </a>
                <a
                  href={data.links.video_link}
                  target="_blank"
                  className="btn btn-danger mx-2"
                >
                  Youtube
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <div className="card w-75">
            <div className="card-header text-center">
              <p className="h5">ROCKET IN MISSION</p>
            </div>
            <div className="card-body">
              <div className="col">
                <div className="row text-center">
                  <div className="col-6 ">
                    Rocket: <b>{data.rocket.rocket_name}</b>
                  </div>
                  <div className="col-6">
                    Rocket type: <b>{data?.rocket.rocket_type}</b>
                  </div>
                  <Button
                    className="btn btn-dark mx-auto mt-4"
                    onClick={() => goRocket()}
                  >
                    ABOUT ROCKET
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(LaunchDetail);

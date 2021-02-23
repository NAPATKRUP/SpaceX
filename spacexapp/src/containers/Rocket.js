import React, { useEffect, useState, useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { withRouter } from "react-router-dom";

const Rocket = (props) => {
  const [allRocket, setAllRocket] = useState([]);
  const { history } = props;

  const handleAllRocket = useCallback((value) => setAllRocket(value), []);

  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      const data = await response.json();
      handleAllRocket(data);
    };
    fetchRockets();
  }, []);

  const goDetail = (data) => {
    history.push("/rocket/rocketDetail", { rocket_id: data });
  };
  return (
    <React.Fragment>
      <Header />
      <div
        className="container-fulid bgBlack overflow-hidden py-4"
        style={{ minHeight: "100vh" }}
      >
        <div className="row">
          <div className="col-12 col-md-4 d-none d-md-flex justify-content-center align-items-center">
            <svg
              x="0px"
              y="0px"
              width="300px"
              height="300px"
              viewBox="0 0 31.076 31.076"
              fill="white"
            >
              <path
                d="M21.549,20.227v-3.947c0-8.806-3.725-14.125-5.283-15.964C16.098,0.116,15.851,0.002,15.591,0
			c-0.261-0.001-0.508,0.112-0.679,0.31c-1.584,1.835-5.384,7.156-5.384,15.97v3.948l-0.729,0.491
			c-1.405,0.948-2.248,2.533-2.248,4.229v4.711c0,0.279,0.154,0.537,0.4,0.67c0.247,0.132,0.546,0.117,0.778-0.039l2.368-1.577
			c0.665-0.442,1.445-0.679,2.244-0.679h1.741v2.283c0,0.42,0.34,0.76,0.759,0.76h1.394c0.419,0,0.759-0.34,0.759-0.76v-2.283h1.74
			c0.799,0,1.58,0.235,2.246,0.68l2.366,1.576c0.232,0.156,0.531,0.171,0.778,0.039c0.246-0.133,0.4-0.391,0.4-0.67v-4.711
			c0-1.694-0.844-3.279-2.248-4.229L21.549,20.227z M15.539,14.043c-1.446,0-2.62-1.173-2.62-2.619c0-1.447,1.174-2.619,2.62-2.619
			c1.445,0,2.619,1.172,2.619,2.619C18.158,12.87,16.984,14.043,15.539,14.043z"
              />
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur="5s"
                type="scale"
                values="1;1.1;1;1.1;1"
                repeatCount="indefinite"
              />
            </svg>
          </div>
          <div className="col-12 col-md-8">
            <div className="overflow-auto" style={{ height: "100vh" }}>
              <div>
                {allRocket.map((rocket) => (
                  <div
                    className="card bg-dark text-white m-4"
                    style={{ width: "90%", height: "55vh" }}
                    key={rocket.rocket_id}
                  >
                    <img
                      className="card-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        opacity: 0.2,
                        backgroundPosition: "center",
                        backgroundRepeat: false,
                        objectFit: "cover",
                      }}
                      src={rocket.flickr_images[1]}
                      alt={rocket.rocket_name}
                    ></img>
                    <div className="card-img-overlay">
                      <h4 className="card-title">
                        {rocket.rocket_name}
                        <svg height="20" width="20" className="m-2">
                          <circle
                            cx="10"
                            cy="10"
                            r="8"
                            fill={rocket.active ? "green" : "red"}
                          />
                        </svg>
                      </h4>
                      <p className="card-text">{rocket.description}</p>
                      <button
                        className="btn btn-dark text-light my-auto"
                        onClick={() => goDetail(rocket.rocket_id)}
                      >
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(Rocket);

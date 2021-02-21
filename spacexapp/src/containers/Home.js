import React, { useEffect, useState, useCallback } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = (props) => {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { history } = props;

  const handleInfo = useCallback((value) => setInfo(value), []);

  const handleIsLoading = useCallback((value) => setIsLoading(value), []);

  const goOtherPage = (pageURL) => {
    history.push(`/${pageURL}`);
  };

  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/info");
      const data = await response.json();

      handleInfo(data);
      handleIsLoading(true);
    };
    fetchRockets();
  }, []);

  return isLoading ? (
    <React.Fragment>
      <Header />
      <div
        className="container-fluid p-4 bgBlack text-light d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="row">
          <div
            className="col-12 col-md-7 d-flex flex-column justify-content-center"
            style={{ minHeight: "80vh" }}
          >
            <h3>{info.name}</h3>
            <p>{info.summary}</p>
            <div className="d-flex flex-row">
              <a href={info.links.website} target="_blank" className="m-2">
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  width="30px"
                  height="30px"
                  fill="white"
                >
                  <g>
                    <path d="M246.857,455.835v-81.371c-18.648,0.835-37.077,4.354-54.72,10.45C204.626,423.022,224.448,449.966,246.857,455.835z" />
                    <path
                      d="M187.099,367.15c19.288-6.509,39.415-10.198,59.758-10.953v-54.482h-68.343
				C179.036,323.77,181.914,345.706,187.099,367.15z"
                    />
                    <path
                      d="M178.514,283.429h68.343v-54.482c-20.344-0.761-40.471-4.457-59.758-10.971
				C181.912,239.424,179.034,261.367,178.514,283.429z"
                    />
                    <path d="M246.857,210.651V129.28c-22.409,5.87-42.231,32.814-54.72,70.958C209.782,206.321,228.211,209.828,246.857,210.651z" />
                    <path d="M319.863,384.914c-17.644-6.086-36.074-9.597-54.72-10.423v81.371C287.552,449.966,307.374,423.022,319.863,384.914z" />
                    <path
                      d="M324.901,217.993c-19.288,6.509-39.415,10.198-59.758,10.953v54.482h68.343
				C332.964,261.373,330.086,239.437,324.901,217.993z"
                    />
                    <path
                      d="M333.486,301.714h-68.343v54.482c20.344,0.761,40.471,4.457,59.758,10.971
				C330.088,345.719,332.966,323.776,333.486,301.714z"
                    />
                    <path
                      d="M206.126,135.771c-23.73,7.618-45.42,20.526-63.433,37.751c9.979,7.828,20.816,14.496,32.302,19.877
				C181.491,172.333,192.069,152.752,206.126,135.771z"
                    />
                    <path
                      d="M142.693,411.621c18.013,17.224,39.703,30.133,63.433,37.751c-14.054-16.973-24.632-36.544-31.131-57.6
				C163.51,397.143,152.673,403.802,142.693,411.621z"
                    />
                    <path
                      d="M351.762,283.429h68.343c-1.901-35.49-15.303-69.396-38.181-96.594c-12.167,9.761-25.518,17.947-39.735,24.366
				C348.069,234.843,351.28,259.07,351.762,283.429z"
                    />
                    <path
                      d="M169.81,211.2c-14.216-6.413-27.566-14.593-39.735-24.347c-22.874,27.193-36.276,61.093-38.181,96.576h68.343
				C160.72,259.07,163.931,234.843,169.81,211.2z"
                    />
                    <path
                      d="M342.19,373.943c14.216,6.413,27.566,14.593,39.735,24.347c22.874-27.193,36.276-61.093,38.181-96.576h-68.343
				C351.28,326.073,348.069,350.3,342.19,373.943z"
                    />
                    <path
                      d="M305.874,449.371c23.73-7.618,45.42-20.526,63.433-37.751c-9.979-7.828-20.816-14.496-32.302-19.877
				C330.509,412.809,319.931,432.391,305.874,449.371z"
                    />
                    <path
                      d="M484.571,0H27.429C12.28,0,0,12.28,0,27.429v27.429h512V27.429C512,12.28,499.72,0,484.571,0z M45.714,36.571h-9.143
				c-5.049,0-9.143-4.093-9.143-9.143c0-5.049,4.093-9.143,9.143-9.143h9.143c5.049,0,9.143,4.093,9.143,9.143
				C54.857,32.478,50.764,36.571,45.714,36.571z M88.777,33.92c-0.889,0.807-1.91,1.456-3.017,1.92
				c-2.214,0.975-4.735,0.975-6.949,0c-1.108-0.464-2.128-1.113-3.017-1.92c-3.536-3.605-3.536-9.378,0-12.983
				c0.889-0.807,1.91-1.456,3.017-1.92c2.207-1.006,4.742-1.006,6.949,0c1.108,0.464,2.128,1.113,3.017,1.92
				C92.313,24.542,92.313,30.315,88.777,33.92z M127.269,30.903c-0.464,1.108-1.113,2.128-1.92,3.017
				c-3.605,3.536-9.378,3.536-12.983,0c-0.807-0.889-1.456-1.91-1.92-3.017c-0.976-2.213-0.976-4.735,0-6.949
				c0.464-1.108,1.113-2.128,1.92-3.017c2.616-2.637,6.567-3.43,9.998-2.006s5.658,4.783,5.637,8.497
				C128.032,28.628,127.781,29.818,127.269,30.903z M475.429,36.571H164.571c-5.049,0-9.143-4.093-9.143-9.143
				c0-5.049,4.093-9.143,9.143-9.143h310.857c5.049,0,9.143,4.093,9.143,9.143C484.571,32.478,480.478,36.571,475.429,36.571z"
                    />
                    <path d="M265.143,129.307v81.371c18.648-0.835,37.077-4.354,54.72-10.45C307.374,162.121,287.552,135.177,265.143,129.307z" />
                    <path
                      d="M0,484.571C0,499.72,12.28,512,27.429,512h457.143C499.72,512,512,499.72,512,484.571V73.143H0V484.571z
				 M121.225,169.362l0.037,0.018c0.223-0.467,0.486-0.913,0.786-1.335c0.417-0.388,0.874-0.731,1.362-1.024
				c34.401-36.559,82.372-57.289,132.571-57.289c50.199,0,98.171,20.73,132.571,57.289c0.489,0.293,0.945,0.636,1.362,1.024
				c0.3,0.421,0.563,0.868,0.786,1.335c64.159,69.597,64.159,176.785,0,246.382c-0.223,0.467-0.486,0.913-0.786,1.335
				c-0.397,0.344-0.826,0.65-1.28,0.914c-34.393,36.611-82.386,57.383-132.618,57.398c-50.232,0.016-98.238-20.727-132.653-57.316
				c-0.484-0.292-0.937-0.632-1.353-1.015c-0.3-0.421-0.563-0.868-0.786-1.335C57.066,346.147,57.066,238.959,121.225,169.362z"
                    />
                    <path
                      d="M169.81,373.943c-5.88-23.643-9.091-47.87-9.573-72.229H91.895c1.901,35.49,15.303,69.396,38.181,96.594
				C142.243,388.548,155.593,380.361,169.81,373.943z"
                    />
                    <path
                      d="M369.307,173.522c-18.013-17.224-39.703-30.133-63.433-37.751c14.054,16.973,24.632,36.544,31.131,57.6
				C348.49,188,359.327,181.341,369.307,173.522z"
                    />
                  </g>
                </svg>
              </a>
              <a href={info.links.twitter} target="_blank" className="m-2">
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 504.4 504.4"
                  width="30px"
                  height="30px"
                  fill="white"
                >
                  <path
                    d="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6
			C504,57,447.2,0.2,377.6,0.2z M377.2,189c0,2.8,0,5.6,0,8.4c0,84-64.8,180.8-183.6,180.8c-36.4,0-70.4-10.4-98.8-28.4
			c5.2,0.4,10,0.8,15.2,0.8c30.4,0,58-10,80-27.2c-28.4-0.4-52-18.8-60.4-44c4,0.8,8,1.2,12,1.2c6,0,12-0.8,17.2-2.4
			c-28.8-6-50.8-31.6-50.8-62.4V215c8,4.8,18.4,7.6,28.8,8c-17.2-11.2-28.8-30.8-28.8-52.8c0-11.6,3.2-22.4,8.8-32
			c32,38.4,79.2,63.6,132.8,66.4c-1.2-4.8-1.6-9.6-1.6-14.4c0-35.2,28.8-63.6,64.4-63.6c18.4,0,35.2,7.6,47.2,20
			c14.8-2.8,28.4-8,40.8-15.6c-4.8,14.8-15.2,27.2-28.4,35.2c13.2-1.6,25.6-4.8,37.2-10C400.4,169,389.6,180.2,377.2,189z"
                  />
                </svg>
              </a>
              <a href={info.links.flickr} target="_blank" className="m-2">
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 438.536 438.536"
                  width="30px"
                  height="30px"
                  fill="white"
                >
                  <path
                    d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
		C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
		h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
		C438.532,59.576,430.49,40.207,414.41,24.123z M181.585,262.093c-11.803,11.804-26.075,17.706-42.827,17.706
		c-16.75,0-31.024-5.902-42.825-17.706c-11.799-11.8-17.701-26.073-17.701-42.826c0-16.755,5.898-31.027,17.701-42.827
		c11.798-11.801,26.075-17.703,42.825-17.703c16.751,0,31.023,5.902,42.827,17.703c11.798,11.799,17.699,26.072,17.699,42.827
		C199.284,236.013,193.383,250.293,181.585,262.093z M342.603,262.093c-11.793,11.804-26.07,17.706-42.825,17.706
		c-16.748,0-31.024-5.902-42.831-17.706c-11.793-11.8-17.699-26.073-17.699-42.826c0-16.755,5.906-31.027,17.699-42.827
		c11.807-11.801,26.08-17.703,42.831-17.703c16.748,0,31.025,5.902,42.825,17.703c11.8,11.799,17.706,26.072,17.706,42.827
		C360.309,236.013,354.402,250.293,342.603,262.093z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid p-4 bg-light"
        style={{ minHeight: "30vh" }}
      >
        <div className="row">
          <div className="col-12 col-md-7 d-none d-md-flex justify-content-center">
            <div className="card m-4 w-50 p-2">
              <h3>
                <svg
                  x="0px"
                  y="0px"
                  width="30px"
                  height="30px"
                  viewBox="0 0 31.076 31.076"
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
                </svg>
                ROCKET PAGE
              </h3>
              <div className="h-50"></div>
              <button
                className="btn btn-dark text-light my-auto"
                onClick={() => goOtherPage("SpaceX/rocket")}
              >
                LEARN MORE
              </button>
            </div>
            <div className="card m-4 w-50 p-2">
              <h3>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 478.08 478.08"
                  width="30px"
                  height="30px"
                >
                  <g>
                    <g>
                      <path
                        d="M458.176,452.48H425.92c0-0.512,0.512-1.024,0.512-1.536c-0.512-33.28-27.136-59.904-60.416-59.392
			c-24.064,0-45.568,14.848-54.784,36.864c-15.872,2.048-30.72,10.752-39.936,24.064H221.12
			c-8.192-14.848-23.552-23.552-39.936-23.552h-0.512c-9.216-26.624-38.4-40.96-65.024-31.232
			c-8.704,3.072-16.896,8.704-23.04,15.872l-9.728-1.024c-24.064,0-45.568,16.384-51.712,39.936H19.904
			c-7.168,0-12.8,5.632-12.8,12.8c0,7.168,5.632,12.8,12.8,12.8h438.272c7.168,0,12.8-5.632,12.8-12.8
			C470.976,458.112,465.344,452.48,458.176,452.48z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M355.776,190.336c-8.704-8.704-19.456-15.36-31.232-19.456c-1.536-40.448-13.312-79.872-34.816-114.688
			c-1.536-3.584-28.16-39.424-41.472-52.736c-5.12-4.608-13.312-4.608-18.432,0c-48.128,48.64-74.24,105.472-76.288,167.424
			c-11.776,4.096-22.528,10.752-31.232,19.456c-32.256,29.696-34.816,79.872-5.12,112.64c2.048,2.56,5.12,4.096,8.704,4.096h0.512
			c3.072,0,6.656-1.024,8.704-3.584l34.816-31.744c7.168,18.432,15.872,36.352,27.136,52.736
			c10.24,15.36,36.352,16.896,44.032,16.896h0.512c10.752,0,29.184-2.048,37.888-14.336c11.776-16.896,21.504-35.84,28.672-55.296
			l34.816,31.744c2.048,2.56,5.632,3.584,8.704,3.584h0.512c3.584,0,6.656-1.536,8.704-4.096
			C390.592,270.208,388.032,220.032,355.776,190.336z M239.04,198.016c-24.064-0.512-43.52-19.968-43.52-44.032
			s19.456-43.52,43.52-43.52s43.52,19.456,43.52,43.52S263.104,197.504,239.04,198.016z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect
                        x="226.24"
                        y="359.808"
                        width="25.6"
                        height="59.904"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect
                        x="268.224"
                        y="350.08"
                        width="25.6"
                        height="54.784"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect
                        x="184.256"
                        y="350.08"
                        width="25.6"
                        height="50.176"
                      />
                    </g>
                  </g>
                </svg>
                LAUNCH PAGE
              </h3>
              <button
                className="btn btn-dark text-light my-auto"
                onClick={() => goOtherPage("SpaceX/launch")}
              >
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="col-12 col-md-7 d-block d-md-none m-4">
            <div className="d-flex justify-content-center align-items-center m-3">
              <h5 className="mt-1">ROCKET PAGE</h5>
              <button
                className="btn btn-dark text-light ml-2 w-75"
                onClick={() => goOtherPage("SpaceX/rocket")}
              >
                LEARN MORE
              </button>
            </div>
            <div className="d-flex justify-content-center align-items-center m-3">
              <h5 className="mt-1">LAUNCH PAGE</h5>
              <button
                className="btn btn-dark text-light ml-2 w-75"
                onClick={() => goOtherPage("SpaceX/launch")}
              >
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="col-12 col-md-5 text-secondary d-flex justify-content-center">
            <div className="row">
              <div className="col-6">
                <h5>Company Info</h5>
                <small className="my-1">
                  <b>Founder:</b> {info.founder}
                  <br></br>
                  <b>CEO:</b> {info.ceo}
                  <br></br>
                  <b>CTO:</b> {info.cto}
                  <br></br>
                  <b>COO:</b> {info.coo}
                  <br></br>
                  <b>CTO_PROPULSION:</b> {info.cto_propulsion}
                </small>
              </div>
              <div className="col-6">
                <h5>Address Info</h5>
                <small className="my-1">
                  <b>Address:</b> {info.headquarters.address}
                  <br></br>
                  <b>City:</b> {info.headquarters.city}
                  <br></br>
                  <b>State:</b> {info.headquarters.state}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  ) : null;
};

export default withRouter(Home);

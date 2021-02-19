import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">
        <svg viewBox="0 0 600 510" fill="white">
          <rect y="235.145" width="15.705" height="100.093" />
          <rect x="324.81" y="218.948" width="16.683" height="15.705" />
          <rect x="291.453" y="218.948" width="16.682" height="15.705" />
          <rect x="258.085" y="218.948" width="16.683" height="15.705" />
          <rect x="224.717" y="218.948" width="16.683" height="15.705" />
          <rect x="191.36" y="218.948" width="16.683" height="15.705" />
          <path
            d="M458.271,227.294h-9.451c-3.773-23.608-24.281-41.705-48.936-41.705H282.129c-32.988-0.054-58.274-14-75.166-41.465
				c-13.118-21.331-16.132-43.232-16.16-43.438l-0.884-6.848h-46.568l-12.24,55.082l-11.146-13.376H66.728v113.505
				c-8.866-8.309-20.771-13.413-33.853-13.413h-8.341v15.705h8.341c0.035,0,0.069,0.002,0.105,0.002v67.701
				c-0.035,0-0.069,0.002-0.105,0.002h-8.341v15.705h8.341c13.081,0,24.987-5.104,33.853-13.413v13.413h31.638l-16.682,83.411
				h38.676l2.346-3.334c0.516-0.734,32.101-45.107,75.314-80.078h260.25c29.626,0,53.728-24.103,53.728-53.729
				C512,251.396,487.897,227.294,458.271,227.294z M49.07,314.914v-59.44c10.512,5.751,17.659,16.916,17.659,29.72
				S59.582,309.162,49.07,314.914z M148.536,142.906h17.798v-15.705h-14.307l3.924-17.66h20.532
				c1.965,9.008,6.644,25.622,16.799,42.312c7.007,11.516,17.359,24.127,32.263,33.735h-63.875l-17.858-21.429L148.536,142.906z
				 M82.433,151.247h30.174l14.199,17.039l-0.137,0.621H82.433V151.247z M165.593,342.339c-27.142,25.778-46.7,51.173-53.311,60.118
				h-11.441l6.868-34.341h16.917V352.41h-13.776l11.873-59.365h109.962C211.151,303.902,188.734,320.361,165.593,342.339z
				 M458.271,319.046H219.352c22.761-15.037,47.58-25.791,72.165-26.001l-0.067-15.705H109.849l-8.341,41.705H82.433v-26h17.17
				V277.34h-17.17v-92.728h57.98l13.901,16.682h127.864c0.05,0,0.098,0.002,0.149,0.002c0.275,0,0.555-0.001,0.831-0.002h116.726
				c12.804,0,23.969,7.147,29.72,17.66h-71.425v15.705h74.877l-21.342,42.683H299.79v15.705h121.63l25.022-50.046h11.829
				c20.966,0,38.023,17.058,38.023,38.023C496.295,301.989,479.238,319.046,458.271,319.046z"
          />
          <path
            d="M116.286,210.612c-13.528,0-24.535,11.006-24.535,24.535c0,13.528,11.007,24.534,24.535,24.534
				s24.535-11.006,24.535-24.534C140.821,221.618,129.814,210.612,116.286,210.612z M116.286,243.976
				c-4.869,0-8.83-3.961-8.83-8.829s3.961-8.83,8.83-8.83c4.87,0,8.83,3.961,8.83,8.83
				C125.116,240.015,121.156,243.976,116.286,243.976z"
          />
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="5s"
            type="rotate"
            from="0"
            to="-90"
            repeatCount="indefinite"
          />
        </svg>
        SpaceX
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <IndexLinkContainer
            to="/"
            activeClassName="active"
            style={styles.textHeader}
          >
            <Nav.Link>Home</Nav.Link>
          </IndexLinkContainer>
          <LinkContainer
            to="/rocket"
            activeClassName="active"
            style={styles.textHeader}
          >
            <Nav.Link>Rocket</Nav.Link>
          </LinkContainer>
          <LinkContainer
            to="/launch"
            activeClassName="active"
            style={styles.textHeader}
          >
            <Nav.Link>Launch</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const styles = {
  bgLogo: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    padding: 2,
    borderRadius: 100,
    margin: "0px 10px 0px 0px",
  },
  textHeader: {
    margin: "0px 20px",
  },
};

export default Header;

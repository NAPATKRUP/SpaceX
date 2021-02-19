import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/" className="mr-4">
        <svg id="Capa_1" enable-background="new 0 0 80.004 80.004" height="80" viewBox="0 0 512.004 512.004" width="80" xmlns="http://www.w3.org/2000/svg"><path d="m221.799 139.528c-2.922-4.879-8.353-7.68-14.024-7.249l-121.895 9.416c-12.341.954-23.334 7.422-30.162 17.748l-51.155 77.372c-5.177 7.831-6.001 17.63-2.203 26.214 3.797 8.584 11.602 14.565 20.877 16.002l98.84 15.309c.769.119 1.537.178 2.299.178 5.063-.001 9.853-2.568 12.636-6.922l84.557-132.283c3.063-4.793 3.151-10.905.23-15.785z" fill="#e45a6e"/><path d="m372.475 290.205c-4.88-2.922-10.993-2.833-15.785.23l-132.282 84.557c-5.009 3.202-7.654 9.06-6.745 14.935l15.308 98.84c1.437 9.276 7.419 17.08 16.004 20.878 3.57 1.579 7.35 2.358 11.112 2.358 5.281 0 10.528-1.538 15.101-4.561l77.373-51.156c10.326-6.826 16.795-17.82 17.747-30.162l9.416-121.894c.439-5.671-2.369-11.102-7.249-14.025z" fill="#d82e44"/><path d="m192.87 412.278c5.97 5.97 14.453 8.763 22.78 7.37 122.112-20.418 218.741-121.522 255.528-192.645 40.849-78.974 42.362-162.43 40.227-201.57-.732-13.412-11.423-24.103-24.835-24.835-39.14-2.134-122.595-.621-201.57 40.228-71.122 36.787-172.226 133.416-192.644 255.528-1.392 8.327 1.4 16.81 7.37 22.78z" fill="#f1f1fb"/><path d="m503.743 8.261-357.445 357.445 46.572 46.572c5.97 5.97 14.453 8.762 22.78 7.37 122.112-20.418 218.741-121.522 255.528-192.644 40.849-78.974 42.362-162.43 40.227-201.57-.366-6.706-3.222-12.732-7.662-17.173z" fill="#d7d6fb"/><path d="m350.731 236.238c-19.209.001-38.41-7.309-53.033-21.932-14.166-14.165-21.968-33-21.968-53.033s7.802-38.868 21.968-53.033c29.241-29.242 76.822-29.243 106.065 0 14.166 14.165 21.967 33 21.967 53.033s-7.801 38.868-21.967 53.033c-14.619 14.62-33.829 21.93-53.032 21.932zm-42.427-117.391h.01z" fill="#466288"/><path d="m92.356 296.354c-1.392 8.327 1.4 16.81 7.37 22.78l93.144 93.144c5.97 5.97 14.453 8.762 22.78 7.37 26.571-4.443 51.933-12.709 75.737-23.652l-175.379-175.378c-10.943 23.803-19.209 49.166-23.652 75.736z" fill="#466288"/><path d="m15.304 421.938c3.838 0 7.678-1.465 10.606-4.394l48.973-48.973c5.858-5.857 5.858-15.355 0-21.213-5.857-5.858-15.354-5.858-21.213 0l-48.972 48.973c-5.858 5.857-5.858 15.355 0 21.213 2.929 2.93 6.767 4.394 10.606 4.394z" fill="#fdb43a"/><path d="m119.764 392.24c-5.857-5.857-15.355-5.857-21.213 0l-94.154 94.154c-5.858 5.857-5.858 15.355 0 21.213 2.929 2.929 6.768 4.393 10.607 4.393s7.678-1.465 10.606-4.394l94.154-94.154c5.858-5.857 5.858-15.355 0-21.212z" fill="#fdb43a"/><path d="m164.645 437.121c-5.857-5.857-15.355-5.857-21.213 0l-48.972 48.972c-5.858 5.857-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.465 10.606-4.394l48.973-48.973c5.858-5.857 5.858-15.355 0-21.212z" fill="#f57a21"/><path d="m4.397 507.607c2.929 2.929 6.768 4.393 10.607 4.393s7.678-1.465 10.606-4.394l94.154-94.154c5.858-5.857 5.858-15.355 0-21.213z" fill="#f57a21"/><path d="m146.298 365.706 46.572 46.572c5.97 5.97 14.453 8.762 22.78 7.37 26.571-4.443 51.933-12.709 75.737-23.652l-87.689-87.689z" fill="#354a67"/><path d="m297.698 214.306c14.623 14.623 33.824 21.934 53.033 21.932 19.203-.002 38.413-7.313 53.032-21.932 14.166-14.166 21.967-33 21.967-53.033s-7.801-38.868-21.967-53.033z" fill="#354a67"/><path d="m350.73 116.295c-11.523 0-23.047 4.386-31.819 13.159-8.499 8.499-13.181 19.799-13.181 31.819s4.682 23.32 13.181 31.819c17.545 17.545 46.095 17.546 63.64 0 8.499-8.5 13.18-19.8 13.18-31.82s-4.681-23.32-13.18-31.819c-8.773-8.772-20.296-13.158-31.821-13.158z" fill="#4bbefd"/><path d="m382.55 129.454-63.639 63.639c17.545 17.545 46.095 17.546 63.639 0 8.499-8.5 13.18-19.8 13.18-31.82s-4.68-23.32-13.18-31.819z" fill="#0590fb"/></svg>
        <span className="m-3">SpaceX</span>
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

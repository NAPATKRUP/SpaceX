import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Nav,
    Navbar,
} from "react-bootstrap";
import {Link} from 'react-router-dom'
const Header = (props) => {
    return (
        <Navbar  bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/">SpaceX</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto j">
                    <Link to="/" style={styles.textHeader}>Home</Link>
                    <Link to="/rocket" style={styles.textHeader}>Rocket</Link>
                    <Link to="/launch" style={styles.textHeader}>Launch</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const styles = {
    textHeader:{
        margin:5
    }
}

export default Header;

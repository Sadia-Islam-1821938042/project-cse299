import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./Header.css";

const Header = () => {
    const user = {
        email: false
    };
    return (
        <div>
            <Navbar sticky="top" className="nav-bar py-2 px-4" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container fluid>
                    <Navbar.Brand as={HashLink} to="/home#home">
                        <img src="https://i.ibb.co/rcwB9zP/nav-logo.png" style={{ width: "290px", height: "65px" }} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="nav-option" as={HashLink} to="/home#products">Products</Nav.Link>

                            <Nav.Link className="nav-option" as={HashLink} to="/home#reviews">Reviews</Nav.Link>

                            <Nav.Link className="nav-option" as={HashLink} to="/home#coming-soon">Coming Soon</Nav.Link>

                            <Nav.Link className="nav-option" as={Link} to="/explore">Explore</Nav.Link>
                        </Nav>
                        <Nav>

                            {
                                user.email ?
                                    <div className="d-flex justify-content-center align-items-center">
                                        <Nav.Link className="nav-option" as={Link} to="/dashboard/dashboard-home">
                                            Dashboard
                                        </Nav.Link>
                                        <NavDropdown style={{ fontSize: "18px", color: "#b5b5b5" }} title={user?.displayName} id="collasible-nav-dropdown">
                                            {/* <NavDropdown.Item style={{ fontSize: "18px" }} onClick={logOut}>Logout</NavDropdown.Item> */}

                                            <NavDropdown.Item style={{ fontSize: "18px" }} >Logout</NavDropdown.Item>
                                        </NavDropdown>
                                        <img src={user.photoURL ? user.photoURL : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} style={{ width: "50px", height: "50px", borderRadius: "50%" }} alt="" />
                                    </div>
                                    :
                                    <Nav.Link className="nav-option" as={HashLink} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar sticky="top" className="nav-bar py-4 px-4" collapseOnSelect expand="lg" variant="light">
            <Container fluid>
                <Navbar.Brand as={HashLink} to="/home#home">
                    <img src="https://i.ibb.co/rcwB9zP/nav-logo.png" style={{ width: "290px", height: "65px" }} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="nav-option" as={HashLink} to="/all-packages">All Packages</Nav.Link>

                        <Nav.Link className="nav-option" as={HashLink} to="/reviews">Reviews</Nav.Link>

                        <Nav.Link className="nav-option" as={HashLink} to="/coming-soon">Coming soon</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user.email ?
                                <div className="d-flex justify-content-center align-items-center">
                                    <NavDropdown title={user?.displayName || user?.email} id="collasible-nav-dropdown">
                                        <NavDropdown.Item as={Link} to="/add-package">Add new package</NavDropdown.Item>
                                        <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                    <img src={user.photoURL ? user.photoURL : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} style={{ width: "50px", height: "50px", borderRadius: "50%" }} alt="" />
                                </div>
                                :
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
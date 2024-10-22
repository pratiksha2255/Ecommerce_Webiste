import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarHeader() {
  const navStyle = {
    backgroundColor: "rgb(20 67 115)",
    padding: "20px",
  };

  const navLinkStyle = {
    color: "rgb(233 236 239)",
    fontWeight: "bold",
    marginRight: "50px",
  };

  return (
    <>
      <Navbar style={navStyle} bg="light" data-bs-theme="dark">
        <Container>
          <Link to="/" style={navLinkStyle}>
            Dashboard
          </Link>
          <Link to="/" style={navLinkStyle}>
            Products
          </Link>
          <Link to="/" style={navLinkStyle}>
            About Us
          </Link>
          <Link to="/signup" style={navLinkStyle}>
            Register
          </Link>
          <Link to="/login" style={navLinkStyle}>
            Login
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHeader;

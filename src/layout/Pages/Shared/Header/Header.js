import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../../../contexts/AuthProvider/AuthProvider";

import { FaUserCircle } from "react-icons/fa";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    toast.success('Successfully logged out')
    navigate('/login')
      
  };

  let activeStyle = {
    textDecoration: "underline",
    textDecorationThickness: "3px",
    fontWeight: "900",
    color: "blue",
  };
  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      
    >
      <Container>
        <Navbar.Brand>
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
          <h4>  Awesome News</h4>
          </NavLink>
        </Navbar.Brand>
        
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
         
          <Nav className="align-items-center">
            <Link to='/profile'>
              {user?.photoURL ? (
                <Image
                  roundedCircle
                  src={user.photoURL}
                  style={{ height: "40px" }}
                ></Image>
              ) : (
                <FaUserCircle></FaUserCircle>
              )}
              </Link>
            <Nav className="fw-bold align-items-center">
              {user?.uid ? (
                <>
                 <Link to='/profile'> <span className="ms-2">{user?.displayName}</span></Link>
                  <Button
                    className="ms-4"
                    onClick={handleLogOut}
                    variant="outline-danger"
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="ms-3"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="ms-3"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Register
                  </NavLink>
                </>
              )}
            </Nav>
          </Nav>
          <div className="d-lg-none ">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

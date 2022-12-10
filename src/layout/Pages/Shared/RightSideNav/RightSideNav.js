import React, { useContext } from "react";
import "./RightSideNav.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import brand1 from "./../../../../assets/brand1.jpg";
import brand2 from "./../../../../assets/brand2.png";
import { AuthContext } from "./../../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";    
import { useLocation, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const RightSideNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoodleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(`user`, user);
        navigate(from, { replace: true });
          toast.success("Login Successful");
      })
      .catch((error) => {
        console.error(`error`, error);
      });
  };
  return (
    <div className="right-container">
      <ButtonGroup vertical className="shadow w-100 rounded p-2">
        <Button
          onClick={handleGoodleSignIn}
          className="mb-4 rounded"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> <strong>Login with Google</strong>
        </Button>
        <Button variant="outline-secondary" className=" rounded">
          <FaGithub></FaGithub> <strong>Login with GitHub</strong>
        </Button>
      </ButtonGroup>
      <div className="mt-3">
        <h5>Find us on</h5>
        <ListGroup className="shadow p-2 mb-4">
          <Button
            className="mb-2 d-flex justify-content-center align-items-center border facebook "
            variant="outline-primary"
          >
            <FaFacebook className="me-2"></FaFacebook> <strong>Facebook</strong>
          </Button>
          <Button
            className="mb-2 d-flex justify-content-center align-items-center border"
            variant="outline-info"
          >
            <FaTwitter className="me-2"></FaTwitter> <strong>Twitter</strong>
          </Button>
          <Button
            className="mb-2 d-flex justify-content-center align-items-center border"
            variant="outline-success"
          >
            <FaWhatsapp className="me-2"></FaWhatsapp> <strong>Whatsapp</strong>
          </Button>
          <Button
            className="mb-2 d-flex justify-content-center align-items-center border"
            variant="outline-secondary"
          >
            <FaTwitch className="me-2"></FaTwitch> <strong>Twitch</strong>
          </Button>
        </ListGroup>

        <Carousel className="shadow rounded mb-3">
          <Carousel.Item>
            <img
              className="d-block w-100 border rounded p-2"
              src={brand1}
              alt="first slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 border rounded p-2"
              src={brand2}
              alt="second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default RightSideNav;

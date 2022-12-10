import React, { useState } from "react";

import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);
  const [red, setRed] = useState("btn-danger");
  const { createUser, updateUserProfile, verifyEmail, logOut } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.pass.value;
    // console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        toast.success("Please verify your Email");
        handleLogOut();
        navigate("/login");
        handleProfile(name, photoURL);
        handleEmailVerification();
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };
  const handleChecked = () => {
    setCheck(!check);
    if (check) {
      setRed("btn-danger ");
    } else {
      setRed("btn-success");
    }
  };
  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const handleProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch(() => {});
  };
 

  return (
    <Form
      onSubmit={handleSubmit}
      className="border p-4 rounded shadow w-75 mx-auto mb-2  "
    >
      <h2 className="text-center">Registration</h2>
      <hr />
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          type="text"
          name="photoURL"
          placeholder="Enter Photo URL"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="pass"
          placeholder="Password"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          className="link"
          onClick={handleChecked}
          type="checkbox"
          label={
            <>
              Accept <Link to="/terms">terms and conditons.</Link>
            </>
          }
        />
      </Form.Group>

      <Button  className={red} disabled={!check}  variant="" type="submit">
        Register
      </Button>
      <hr />
      <p className="link">
        Already have an account? <Link to="/login">Login</Link> from here.
      </p>

      <Form.Text className="text-danger fw-bold">
        <p>{error}</p>
      </Form.Text>
    </Form>
  );
};

export default Register;

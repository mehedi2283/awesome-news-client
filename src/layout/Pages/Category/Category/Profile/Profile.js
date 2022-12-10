import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { AuthContext } from "../../../../../contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [check, setCheck] = useState(false);
  const [name, setName] = useState(user.displayName);
  const [red, setRed] = useState('btn-danger');
  const photoURLRef = useRef(user.photoURL);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(photoURLRef.current.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleChecked = () => {
    setCheck(!check);
    if(check){
      setRed('btn-danger')
     }
     else{
       setRed('btn-success')
     }
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className="border p-4 rounded shadow  mx-auto mb-4  "
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          readOnly
          defaultValue={user.email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          onChange={handleNameChange}
          defaultValue={user.displayName}
          type="text"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          ref={photoURLRef}
          defaultValue={user.photoURL}
          type="text"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={handleChecked}
          type="checkbox"
          label="Check me for agree."
        />
      </Form.Group>
      <Button
        className={red}
        disabled={!check}
        onClick={handleSubmit}
        variant=""
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default Profile;

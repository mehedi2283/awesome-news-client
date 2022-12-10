import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <h1>Accept all the terms</h1>
      <Link className="text-white underline-none" to="/register">
        <Button variant="primary" type="submit">
          Go to Register
        </Button>
      </Link>
    </div>
  );
};

export default TermsAndConditions;

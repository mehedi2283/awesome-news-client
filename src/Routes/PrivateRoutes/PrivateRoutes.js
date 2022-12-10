import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Spinner from "react-bootstrap/Spinner";
import toast from "react-hot-toast";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className=" d-flex justify-content-center mt-5">
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }

  if (!user) {
    return (
      <>
       {toast.error("Please login first")}
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
      
      </>
    );
  }
  return children;
};

export default PrivateRoutes;

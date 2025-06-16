import React from "react";
import { Link } from "react-router-dom";

export default function UserHome() {
  return (
    <div className="container fluid">
      <div className="d-flex justify-content-center align-items-center mt-4">
        <Link to={"/login"} className="btn btn-primary">
          Login
        </Link>
        <Link to={"/register"} className="btn btn-warning ms-4">
          Register
        </Link>
      </div>
    </div>
  );
}

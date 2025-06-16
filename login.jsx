import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["userid"]);
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userid: "",
      password: "",
    },
    onSubmit: (user) => {
      axios.get(`http://127.0.0.1:4000/users`).then((response) => {
        let userdetails = response.data.find(
          (item) => item.userid === user.userid
        );
        if (userdetails) {
          if (user.password === userdetails.password) {
            setCookie("userid", userdetails.userid);
            console.log("login successfull.");
            navigate("/user-dashboard");
          } else {
            alert("invalid password.");
          }
        } else {
          alert("user doesn't exist.");
        }
      });
    },
  });
  return (
    <div className="container-fluid w-25">
      <form
        className="text-dark bg-white border border-1 p-4 rounded rounded-4"
        onSubmit={formik.handleSubmit}
      >
        <h4>User Login</h4>
        <dl>
          <dt style={{ display: "flex", justifyContent: "flex-start" }}>
            user id
          </dt>
          <dd>
            <input
              type="text"
              name="userid"
              onChange={formik.handleChange}
              className="form-control"
            />
          </dd>
          <dt style={{ display: "flex", justifyContent: "flex-start" }}>
            password
          </dt>
          <dd>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              className="form-control"
            />
          </dd>
        </dl>
        <button className="btn btn-warning w-100" type="submit">
          submit
        </button>
        <p className="mt-3">
          new user, please <Link to={"/register"}>register</Link>
        </p>
      </form>
    </div>
  );
};

export default UserLogin;

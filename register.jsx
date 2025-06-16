import { useFormik } from "formik";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

export function UserRegister() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userid: "",
      password: "",
      email: "",
    },
    onSubmit: (user)=>{
      axios.post(`http://127.0.0.1:4000/users`, user).then(()=>{
        console.log("posted..")
      })
      alert('registered successfully..');
      navigate('/login');
    }
  });
  return (
    <div className="container-fluid w-25">
      <form onSubmit={formik.handleSubmit} className="text-dark bg-light border border-1 rounded rounded-4 p-4">
        <h4>User Register</h4>
        <dl>
          <dt className="d-flex justify-content-start">userid</dt>
          <dd>
            <input
              type="text"
              onChange={formik.handleChange}
              placeholder="enter userid"
              className="form-control"
              name="userid"
            />
          </dd>
          <dt className="d-flex justify-content-start">password</dt>
          <dd>
            <input
              type="password"
              onChange={formik.handleChange}
              className="form-control"
              placeholder="enter password"
              name="password"
            />
          </dd>
          <dt className="d-flex justify-content-start">email</dt>
          <dd>
            <input
              type="text"
              onChange={formik.handleChange}
              className="form-control"
              placeholder="enter email"
              name="email"
            />
          </dd>
        </dl>
        <button className="btn btn-primary w-100">
          Register
        </button>
        <p className="mt-3">
          already registered, please <Link to={"/login"}>login</Link>
        </p>
      </form>
    </div>
  );
}

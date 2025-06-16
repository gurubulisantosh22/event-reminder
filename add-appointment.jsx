import { useCookies } from "react-cookie";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function AddAppointment(){
    const[cookies, setCookie, removeCookie]= useCookies(['userid'])
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues:{
            userid: cookies['userid'],
            date:"",
            title:""
        },
        onSubmit:(appointment)=>{
            axios.post(`http://127.0.0.1:4000/appointments`, appointment)
            .then(()=>{
                console.log("appointment added.")
            })
            navigate("/user-dashboard");
        }

        
    })

    return (
      <div className="container-fluid">
        <h3>add new appointment - {cookies["userid"]}</h3>
        <div className="d-flex justify-content-center w-100">
          <form onSubmit={formik.handleSubmit}>
            <dl>
              <dt>Title</dt>
              <dd>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  onChange={formik.handleChange}
                />
              </dd>
              <dt>Date</dt>
              <dd>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  onChange={formik.handleChange}
                />
              </dd>
            </dl>
            <button type="submit" className="btn btn-success">
              add
            </button>
            <Link to={"/user-dashboard"} className="btn btn-warning m-2">
              cancel
            </Link>
          </form>
        </div>
      </div>
    );
}  

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

export function UserDashboard() {
  const [appointments, setAppointments] = useState([
    { id: 0, title: "", date: "", userid: "" },
  ]);
  const [cookies, setCookie, removeCookie] = useCookies(["userid"]);
  let navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://127.0.0.1:4000/appointments`)
    .then(response=>{
        let user_appointments = response.data.filter(appointment => appointment.userid === cookies['userid']);
        setAppointments(user_appointments);
    })
  },[])
 
  function handleSignout() {
    removeCookie("userid");
    navigate("/login");
  }
  return (
    <div className="container-fluid bg-light p-4 w-50 mt-2">
      <h3 className="text-dark d-flex justify-content-between">
        <span>{cookies["userid"]}</span>
        <span>Dashboard</span>
        <span>
          <button className="btn btn-link" onClick={handleSignout}>
            signout
          </button>
        </span>
      </h3>
      <Link
        to={"/add-appointment"}
        className="btn btn-success bi bi-calendar-event"
      >
        {" "}
        Add-appointment
      </Link>
      <div>
        {
            appointments.map(appointment=>
                <div key={appointment.id} className="alert alert-success mt-2">
                    <h4 className="d-flex justify-content-start">{appointment.title}</h4>
                    <p className="d-flex justify-content-start">{appointment.date}</p>
                    <div className="d-flex justify-content-start">
                        <Link to={`/edit-appointment/${appointment.id}`} className="bi bi-pen-fill btn btn-warning"></Link>
                        <Link to={`/delete-appointment/${appointment.id}`} className="bi bi-trash-fill btn btn-danger ms-2"></Link>
                    </div>
                </div>
            )
        }
      </div>
    </div>
  );
}

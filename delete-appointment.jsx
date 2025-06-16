import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

export function DeleteAppointment() {
  let navigate = useNavigate();
  let params = useParams();

  const [appointment, setAppointment] = useState({
    id: 0,
    title: "",
    date: "",
    userid: "",
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:4000/appointments/${params.id}`)
      .then((response) => {
        setAppointment(response.data);
        console.log(response.data);
      });
  }, []);

  function handleDeleteClick() {
    axios.delete(`http://127.0.0.1:4000/appointments/${params.id}`).then(() => {
      console.log("appointment deleted.");
    });
    navigate("/user-dashboard");
  }
  return (
    <div>
      <h3>delete appointment</h3>
      <h5 className="my-3">
        are you sure want to delete? <br />
        <span className="text-danger my-3">{appointment.title}</span>
      </h5>
      <button onClick={handleDeleteClick} className="btn btn-danger mx-2">
        yes
      </button>
      <Link to={"/user-dashboard"} className="btn btn-warning">
        cancel
      </Link>
    </div>
  );
}

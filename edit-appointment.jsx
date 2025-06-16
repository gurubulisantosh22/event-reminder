import { useFormik } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

export function EditAppointment(){
    let params = useParams();
    let navigate = useNavigate();
    const[appointment, setAppointment]=useState({id:0, title:'', date:'', userid:''});
    const formik = useFormik({
        initialValues:{
            id:appointment.id,
            title:appointment.title,
            date:appointment.date,
            userid:appointment.userid
        },
        onSubmit:(appointment)=>{
            axios.put(`http://127.0.0.1:4000/appointments/${params.id}`, appointment)
            .then(()=>{
                console.log("saved.");
            })
            navigate("/user-dashboard");
        }, 
        enableReinitialize:true
        
    })
      useEffect(()=>{
        axios.get(`http://127.0.0.1:4000/appointments/${params.id}`)
        .then(response=>{
            setAppointment(response.data)
        })
      },[])

    return(
        <div className="container">
            <h3>edit appointment</h3>
            <form onSubmit={formik.handleSubmit} className="w-100">
                <dl>
                    <dt className="d-flex justify-content-start">title</dt>
                    <dd><input type="text" onChange={formik.handleChange} value={formik.values.title} name="title" className="form-control" /></dd>
                    <dt className="d-flex justify-content-start">date</dt>
                    <dd><input type="date" onChange={formik.handleChange} value={formik.values.date} name="date" className="form-control" /></dd>
                </dl>
                <button className="btn btn-success mx-2">save</button>
                <Link to={"/user-dashboard"} className="btn btn-warning">cancel</Link>
            </form>
        </div>
    )
}
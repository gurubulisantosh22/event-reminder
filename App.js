import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import UserHome from "./components/form/home";
import UserLogin from "./components/form/login";
import { UserRegister } from "./components/form/register";
import { UserDashboard } from "./components/form/dashboard";
import { AddAppointment } from "./components/form/add-appointment";
import { DeleteAppointment } from "./components/form/delete-appointment";
import { EditAppointment } from "./components/form/edit-appointment";

function App() {
  return (
    <div className="container-fluid text-white text-center" id="bg-img">
      <BrowserRouter>
      <h3>
        <Link to={"/"} className="bi bi-house text-light">User Page</Link>
      </h3>
        <section>
          <Routes>
            <Route path="/" element={<UserHome />}></Route>
            <Route path="login" element={<UserLogin />}></Route>
            <Route path="register" element={<UserRegister />}></Route>
            <Route path="user-dashboard" element={<UserDashboard/>}></Route>
            <Route path="add-appointment" element={<AddAppointment/>}></Route>
            <Route path="delete-appointment/:id" element={<DeleteAppointment/>}></Route>
            <Route path="edit-appointment/:id" element={<EditAppointment/>}></Route>
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "../pages/Home";
import Campuses from "../pages/Campuses";
import Campus from "../pages/Campus";
import CampusForm from "../pages/CampusForm";
import StudentForm from "../pages/StudentForm";
import Student from "../pages/Student";
import Students from "../pages/Students";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campuses" element={<Campuses />} />
        <Route path="/campuses/:id" element={<Campus />} />
        <Route path="/campuses/:id/edit" element={<CampusForm />} />
        <Route path="/campuses/new" element={<CampusForm />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<Student />} />
        <Route path="/students/:id/edit" element={<StudentForm />} />
        <Route path="/students/new" element={<StudentForm />} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddStudent from "./components/Add/addStudent";
import StudentInfo from "./components/Details/StudentInfo";
import EditStudent from "./components/Edit/EditStudent";
import DeleteStudent from "./components/Delete/DeleteStudent";
import AddTeacher from "./components/Add/addTeacher";
import DeleteTeacher from "./components/Delete/DeleteTeacher";
import EditTeacher from "./components/Edit/EditTeacher";
import TeacherList from "./components/List/TeacherList";
import TeacherInfo from "./components/Details/TeacherInfo";
import StudentList from "./components/List/StudentList";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App">
      {/* <h1>Student Management System</h1> */}
      <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/details/student" element={<StudentList />} />
          <Route path="/details/teacher" element={<TeacherList />} />
          <Route path="/add" element={<AddStudent />}/>
          <Route path="/create" element={<AddTeacher />}/>
          <Route path="/student/:id" element={<StudentInfo />}/>
          <Route path="/teacher/:t_id" element={<TeacherInfo />}/>
          <Route path="/student/edit/:id" element={<EditStudent />} />
          <Route path="/teacher/edit/:t_id" element={<EditTeacher />} />
          <Route path="/student/delete/:id" element={<DeleteStudent />} />
          <Route path="/teacher/delete/:t_id" element={<DeleteTeacher />} />
      </Routes>
      </ div>
  );
}

export default App;

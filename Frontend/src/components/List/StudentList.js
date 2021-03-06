import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";

const StudentList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    
    let abortController = new AbortController();
    setLoading(true);
    fetch("http://localhost:9494/api/v1/student/all")
      .then((response) => response.json())
      .then((data) => setData(data));
    setLoading(false);
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <h1>All Students</h1>
      <Link to="/add">
        <Button variant="contained">Add Student</Button>
      </Link>
      <br />
      <br/>

      {!loading ? (
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <TableContainer style={{ maxWidth: `900px` }} component={Paper}>
            <Table style={{ width: `100%` }} aria-label="student table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((student) => (
                  <TableRow
                    key={student.id}
                  >
                    <TableCell component="th" scope="row">
                      {student.id}
                    </TableCell>
                    <TableCell align="center">{student.firstname}</TableCell>
                    <TableCell align="center">{student.lastname}</TableCell>
                    <TableCell align="center">{student.email}</TableCell>
                    <TableCell align="center">
                      <Link to={`/student/${student.id}`}>
                        <Button variant="contained">View</Button>
                      </Link>
                      {` `}
                      <Link to={`/student/edit/${student.id}`}>
                        <Button variant="contained">Edit</Button>
                      </Link>
                      {` `}
                      <Link to={`/student/delete/${student.id}`}>
                        <Button variant="contained" color="error">Delete</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default StudentList;

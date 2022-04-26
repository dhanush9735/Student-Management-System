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
const tcss ={
  maxWidth: `900px`,
  marginTop: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  // marginLeft : 'auto'
}
const TeacherList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    let abortController = new AbortController();
    setLoading(true);
    fetch("http://localhost:9494/api/v1/teacher/all")
      .then((response) => response.json())
      .then((data) => setData(data));
    setLoading(false);
    return () => {
      abortController.abort();
    };
  }, []);


  return (
    <>
      <h1>All Teachers</h1>
      <Link to="/create">
        <Button variant="contained">Add Teacher</Button>
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
          <TableContainer style={tcss} component={Paper}>
            <Table style={{ width: `100%` }} aria-label="student table">
              <TableHead >
                <TableRow>
                  <TableCell>T_ID</TableCell>
                  {/* <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell> */}
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((teacher) => (
                  <TableRow
                    key={teacher.t_id}
                  >
                    <TableCell component="th" scope="row">
                      {teacher.t_id}
                    </TableCell>
                    {/* <TableCell align="center">{teacher.firstname}</TableCell>
                    <TableCell align="center">{teacher.lastname}</TableCell> */}
                    <TableCell align="center">{teacher.email}</TableCell>
                    <TableCell align="center">
                      <Link to={`/teacher/${teacher.t_id}`}>
                        <Button variant="contained">View</Button>
                      </Link>
                      {` `}
                      <Link to={`/teacher/edit/${teacher.t_id}`}>
                        <Button variant="contained">Edit</Button>
                      </Link>
                      {` `}
                      <Link to={`/teacher/delete/${teacher.t_id}`}>
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
    </>
  );
};

export default TeacherList;

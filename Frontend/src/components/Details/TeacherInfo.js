import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const TeacherInfo = () => {
  const { t_id } = useParams();

  const [teacherData, setTeacherData] = useState({});
  

  useEffect(() => {
    
    let abortController = new AbortController();
    fetch(`http://localhost:9494/api/v1/teacher/${t_id}`)
      .then((response) => response.json())
      .then((data) => setTeacherData(data));
    return () => {
      abortController.abort();
    };
  });
  return (
    <>
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        }}
      >
        <div style={{ maxWidth: `900px` }}>
          <Card style={{ width: `100%` }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {teacherData.firstname} {` `} {teacherData.lastname}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Email: {teacherData.email}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                My Attendance:{teacherData.attendaance}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                My Salary:{teacherData.salary}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Subject:{teacherData.subject}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/">Go Back</Link>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TeacherInfo;

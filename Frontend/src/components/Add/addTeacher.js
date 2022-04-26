import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
const sty ={backgroundColor: 'antiquewhite'}

const AddTeacher = () => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:9494/api/v1/teacher/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("New Teacher Added");
        // navigate to home page
        navigate("/", { state: { from: { pathname: "/create" } } });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Add Teacher</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box style={sty}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              fullWidth
              id="firstname"
              label="First Name"
              type="text"
              {...register("firstname")}
            />
          </div>
          <div>
            <TextField
              required
              fullWidth
              id="lastname"
              label="Last Name"
              type="text"
              {...register("lastname")}
            />
          </div>
          <div>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              type="email"
              {...register("email")}
            />
          </div>
          <div>
            <TextField
              required
              fullWidth
              id="attendance"
              label="Attendance"
              type="number"
              {...register("attendance")}
            />
          </div>
          <div>
            <TextField
              required
              fullWidth
              id="salary"
              label="Salary"
              type="number"
              {...register("salary")}
            />
          </div>
          <div>
            <TextField
              required
              fullWidth
              id="subject"
              label="Subject"
              type="text"
              {...register("subject")}
            />
          </div>

          <div>
            <Button variant="contained" type="submit">
              Add Teacher
            </Button>
          </div>
        </Box>
      </form>
    </>
  );
};

export default AddTeacher;

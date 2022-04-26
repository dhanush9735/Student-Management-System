import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
const sty ={backgroundColor: 'antiquewhite'}
const AddStudent = () => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:9494/api/v1/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("New Student Added");
        // navigate to home page
        navigate("/", { state: { from: { pathname: "/add" } } });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Add Student</h1>
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
              id="fee"
              label="Fee"
              type="number"
              {...register("fee")}
            />
          </div>
        

          <div>
            <Button variant="contained" type="submit">
              Add Student
            </Button>
          </div>
        </Box>
      </form>
    </>
  );
};

export default AddStudent;

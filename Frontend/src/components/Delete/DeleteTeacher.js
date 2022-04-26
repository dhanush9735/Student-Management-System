import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DeleteTeacher = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    let abortController = new AbortController();
    fetch(`http://localhost:9494/api/v1/teacher/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        
        navigate("/", {
          state: { from: { pathname: `/teacher/delete/${id}` } },
        });
      })
      .catch((err) => console.log(err));

    return () => {
      abortController.abort();
    };
  });
  return(<h1>Teacher Delete Successfully</h1>);
};

export default DeleteTeacher;

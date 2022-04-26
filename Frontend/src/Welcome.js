import React from 'react';
const bg ={backgroundColor: 'lightblue'}
const d = new Date();
var met = "";
const cssStyle = {
    color: 'green'
};
if (d.getHours() >= 0 && d.getHours() <= 11) {
    met = "Good Morning";
    cssStyle.color = 'green';
} else if (d.getHours() > 11 && d.getHours() <= 19) {
    met = "Good Afternoon";
    cssStyle.color = 'blue';
} else {
    met = "Good Night";
    cssStyle.color = 'red';
}
function Welcome(){
    return(
        <div style={bg}>
        <h1>Student Management System</h1>
        <h3>{met}</h3>
        <h4>Welcome to our project<br></br>
        Please choose what you want to do</h4>
        <a class="btn btn-primary" href='/details/student' role="button">Student</a><br/><br/>
        <a class="btn btn-primary" href='/details/teacher' role="button">Teacher</a><br/><br/>
        </div>
    );
}
export default Welcome;
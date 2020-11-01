import React, { useState } from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { addPerson } from "../redux";
import { useDispatch } from "react-redux";
function Home() {
  const dispatch = useDispatch();
  const newPerson = (person) => dispatch(addPerson(person));
  const [person, setperson] = useState({
    name: "",
    username: "",
    email: ""
  });
   
  function handleChange(e) {
    e.preventDefault();
     
  }

  axios.post("/person", {
    name: person.name,
    username: person.username,
    email: person.email,
  }).then((response) => {
    console.log(response.status);
    newPerson(response.data);
    newPerson(person);
  });
  return (
    <div className="form">
      <h1>form</h1>
      <form>
        <div className="form_fields">
        Name &nbsp;&nbsp;&nbsp;<input type="text" value={person.name.value}></input><br/>
              Username &nbsp;&nbsp;&nbsp;<input type="text" value={person.username.value}></input><br/>
              Email &nbsp;&nbsp;&nbsp;<input type="text" value={person.email.value}></input><br/>
              <Button variant="contained" color="primary" onClick={handleChange} >Save</Button>
        </div>
      </form>
      <Link type="button"  class="link-styel" color="primary" to="/List">Person List</Link><br/>

    </div>
  );
}

export default Home;

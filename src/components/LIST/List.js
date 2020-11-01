import React from 'react';
import './List.css'
import axios from 'axios';
import { Link } from "react-router-dom";
export default class List extends React.Component {
  state = {
    persons: []
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }
 
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`) 
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
    
    <div>
         <table>
            <thead class="uk-height-small">
                <tr>
                    <th rowspan="2">NAME</th>
                    <th rowspan="2">UNAME</th>
                    <th rowspan="2">WEBSITE</th>
                    <th rowspan="2">PHONE</th>
                    <th rowspan="2">DETAILS</th>
                    <th rowspan="2">DELETE</th>
                </tr>
            </thead>
            <tbody>
            { this.state.persons.map(person =>{
                return (
                  <tr>
                        <td>{person.name}</td>
                        <td>{person.username}</td>
                        <td>{person.website}</td>
                        <td>{person.phone}</td>
                        <td>
                        <Link type="button"   color="primary" to="/Details"> View More</Link><br/>
                        </td>
                        <td>
                        <Link type="button"   color="primary" onChange={this.handleChange} to="/List">Delete</Link><br/>
                        </td>
                        </tr> 
                    )
                })}
            </tbody>
        </table>   
    </div>
    )
  }
}
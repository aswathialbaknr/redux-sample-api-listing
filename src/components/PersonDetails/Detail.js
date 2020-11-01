import React from 'react';
import './Details.css'
import axios from 'axios';
export default class Details extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://reqres.in/api/users/2`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
    
    <div>
         <table class="uk-table uk-table-small uk-table-divider">
                                <thead class="uk-height-small">
                                    <tr>
                                        <th rowspan="2">Email</th>
                                        <th rowspan="2">First Nale</th>
                                        <th rowspan="2">LastName</th>
                                        <th rowspan="2">Avatar</th>
                                        <th rowspan="2">Company</th>
                                        <th rowspan="2">Url</th>
    
                                    </tr>
                                </thead>
                                <tbody>
                                { this.state.persons.map(person =>{
                    return (
                        <tr>
                            <td>{person.email}</td>
                            <td>{person.first_name}</td>
                            <td>{person.last_name}</td>
                            <td>{person.avatar}</td>
                            <td>{person.company}</td>
                            <td>{person.url}</td>
                            
                        </tr> 
                    )
                })}
                                </tbody>
                            </table>   
    </div>
    )
  }
}
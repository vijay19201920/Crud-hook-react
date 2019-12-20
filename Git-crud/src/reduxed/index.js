import React, { Component } from 'react';
//https://levelup.gitconnected.com/react-crud-app-without-and-with-redux-da4cd87f2eab
//https://reqres.in/

import Store from '../store.js'

class reduxed extends Component {
constructor(){
	super();

		this.state = [
            { name: "vijay", Email: "vijayd@gmail.com", Created: "" },
            { name:"Arun", Email: "Arun@gmail.com", Created: "" },
          { name: "vinay", Email: "vinay@gmail.com", Created: "" }
        ];
}

render() {
        return (
            <div>
                  <p>{(this.state.map((a)=> a.name))}</p>


                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Grade</th>
                            <th>School</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>1</td>
                            <td>2</td>
                            <td>
                                <button className="button muted-button"> Edit </button>
                                <button className="button muted-button">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default reduxed
import React, { Component } from 'react';


class reduxed extends Component {
constructor(){
	super();

		this.state = [
            { name: 1, Email: "vijay", Created: "" },
            { name: 2, Email: "Arun", Created: "" },
            { name: 3, Email: "vinay", Created: "" }
          ];
         


}

render() {
        return (
            <div>

        <p>{console.log(this.state)}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created</th>
                            <th>Actions</th>
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
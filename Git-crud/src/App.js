import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
//https://www.taniarascia.com/crud-app-in-react-with-hooks/
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm.js'
import EditUserForm from './forms/EditUserForm'

const App = () => {
  const usersData = [
    { id: 1, name: "vijay", username: " vijayd" },
    { id: 2, name: "Arun", username: "kumar" },
    { id: 3, name: "vinay", username: "sonar" }
  ]

  const [users, setUsers] = useState(usersData)

  //add user
  const addUser = user => {
   // user.id = users.length + 1
    setUsers([...users, user])

  }
//Delete user
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  //Editing
  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }


 

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-large">

        {editing ? (
          <div>
            <h2>Edit user</h2>
            <EditUserForm editing={editing} setEditing={setEditing}  currentUser={currentUser}
        updateUser={updateUser}
        />
          </div>
        ) : (
            <div>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />

            </div>
          )
        }
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}  />
        </div>
      </div>
    </div>
  )
}

export default App;

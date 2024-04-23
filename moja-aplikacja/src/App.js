import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewComp from './NewComp';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7295/data/v1/user/getusers');
        console.log('Response status:', response.status);
        console.log('Response data:', response.data);
        const adaptedData = response.data.data.map(user => ({
          Id: user.id,
          Title: user.title,
          FirstName: user.firstname,
          LastName: user.lastname,
          Picture: user.picture
        }));
        setUsers(adaptedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };;

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Users List</h1>
        <div>
          <NewComp stateFromParent={users} />
        
      {/* <ul>
        {users.map(user => (
          <li key={user.Id}>
            {user.FirstName} {user.LastName}
            <img src={user.Picture}></img>
          </li>
        ))}
      </ul> */}
      </div>
    </div>
  );
}

export default App;

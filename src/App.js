import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import ListsUser from './components/ListsUser';
import UserFilter from './components/UserFilter';
import UserContext from './UserContext';
import axios from 'axios';

const Title = styled.h1`
  text-align:center;
`;
function App() {

  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');

  async function fetchUsers(){
    
    const request = await axios.get("https://randomuser.me/api/?results=100");
    
    setUsers(request.data.results);
    return request;
  }

  useEffect(() => {
    
    // normal fetch
    // fetch("https://randomuser.me/api/?results=100").then(response => {
    //   if (response.ok) {
    //     return response.json()
    //   }
    //   throw response;
    // }).then(data => {
    //   setUsers(data.results);
    // })
    //   .catch(error => {
    //     console.error("Error", error)
    //   })

    // using async with axios
    fetchUsers();
  }, [])

  return (
    <div>
      {/* version normal */}
      {/* <Title>List of User</Title>
      <UserFilter filter={filter} setFilter={setFilter} />
      <ListsUser users={users} filter={filter}/> */}

      {/* version using context */}
      <UserContext.Provider value={{filter,users, setFilter, setUsers}}>
        <Title>List of User</Title>
        <UserFilter/>
        <ListsUser/>
      </UserContext.Provider>
    </div>
  );
}

export default App;

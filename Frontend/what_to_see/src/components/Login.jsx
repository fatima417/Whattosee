import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import '../style/Login.scss';
import {Box, Button, Typography} from "@mui/material"
import { fetchUsers } from '../services/sanity/api';
import { useNavigate, useNavigation } from 'react-router-dom';

const Login = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate() 
  useEffect(() => {
    // Fetch the list of users from an API or some data source
    const getUsers = async () => {
      try {
        const response = await fetchUsers();
        console.log(response)
        setUsers(response);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, []);

  const handleSaveUsername = (username) => {
    localStorage.setItem('username', username);
    console.log('Username saved:', username);
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    handleSaveUsername(user)
    
    navigate("/home")
  };

  return (
    <Box className='login-section'
    
    display="flex" flexDirection={"column"} alignItems="center">
      <header className='login-header'>
        <h1>Login</h1>
        <h6>Identify yourself </h6>
      </header>
      <Box display="flex" flexdirection={"row"} justifycontent="" marginTop={4} gap={4} flexWrap={"wrap"}>
        {users.length > 0 ? (
          users.map((user) => (
            <Button
              display="flex" flexdirection={"row"} justifycontent="left"
              
              key={user}
              onClick={() => handleUserSelect(user)}
              className='login-button'
              variant="outlined"
              sx={{ width: "200px", marginTop: "4px"}}
            >
              <FaUserCircle className='user-icon' />
              <span>{user}</span>
            </Button>
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </Box>
      {selectedUser && (
        <footer className='login-footer'>
          <Typography marginTop={4}>Login User: {selectedUser}</Typography>
        </footer>
      )}
    </Box>
  );
};

export default Login;

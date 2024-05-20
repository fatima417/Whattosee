import { Box, Typography } from '@mui/material';
import React from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import TagFacesRoundedIcon from '@mui/icons-material/TagFacesRounded';
import FilmList from './FilmList';
import { fetchUsers, fetchUsersData } from '../services/sanity/api';

const Home = () => {

    const [userName, setUserName]  = React.useState("")
    const [users, setUsers]  = React.useState([])
    const [userData, setUserData]  = React.useState([])

    const getUser = async ()=>{
        const users = await fetchUsers()
        setUsers(users)

    }

    const getUserData = async ()=>{
        const users_data = await fetchUsersData({userName})
        setUsers(users_data)
        console.log(userData)

    }


    
    React.useEffect(
        ()=>{
          const storedUsername = localStorage.getItem('username');
          if (storedUsername) {
            setUserName(storedUsername);
        }
        getUser()
        
        getUserData()

        
        }

      , [])




      return (
        <Box>
            <Typography marginTop={4} fontWeight={"bold"}>Hei, {userName}</Typography> 
            <Box display="flex" flexDirection={"row"}>
                
                <Box display="flex" flexDirection={"column"} width={"60%"}>
                    <Typography marginTop={4}> <StarRoundedIcon /> Film we are going to watch?</Typography>
                </Box>

                <Box display="flex" flexDirection={"column"} width={"60%"}>
                    <Typography marginTop={4}> <TagFacesRoundedIcon /> Im gonna watch these films together with...</Typography>
                    
                    <ul>
                        {users.map((value, index)=>(
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </Box>
                
            </Box>
        </Box>
      )
};

export default Home;
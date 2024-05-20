// GenreComponent.js
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { get_genre_list } from '../services/movies_api/movies';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { addFavoriteGenreToUser } from '../services/sanity/api';


const Genre = () => {

    const [availableGenre, setAvailGenre] = useState([])

    const getGenre = async ()=>{
        const genres = await get_genre_list()
        setAvailGenre(genres)
        console.log(availableGenre);
    }
    
    
    const addFavGenre = async (name)=>{
        const genres = await addFavoriteGenreToUser(name)
    }


    useEffect(
        ()=>{
            getGenre()
        }
    , [])
  return (
    <Box>
      <Typography variant='h4' align='center'>Genres</Typography>
      
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        {availableGenre &&
            availableGenre.map((value, index)=>(
                <Box key={index} display={"flex"} flexDrirection="row" >
                    <Typography sx={{ marginTop: "5px"}} key={index} >{value}</Typography>
                    {value && <Button onClick={()=>{
                        addFavGenre(value)
                    }} > <StarRoundedIcon></StarRoundedIcon> Add to favourite</Button>}

                </Box>
                
            ))
            

        }
      </Box>
      
      
    </Box>
  );
};

export default Genre;
